const LayoutPath = require("./LayoutPath");
const dataLayer = require("./dataLayer")

const edcClient = require('../clients/edcClient')
const log = require('techbytes').logger(module);

const FormRef = {
    FORM_TYPE_SHARED:'shared',
    FORM_TYPE_NORMAL: 'normal',
    FORM_STATUS_IN_WORK:'in-work'
}

/* *******************************************************************************
    * Null Row Patching
    */

/**
 * Identifies null rows among all sections and filters them out.
 * NOTE: THIS DOES NOT PERSIST THE PATCH TO THE DB, CALLERS
 *       ARE EXPECTED TO PERSIST TO THE DB IF SO DESIRED
 *
 * [Background]
 *
 * As of 2021-May-21 there have been two incidents where
 * null rows have been introduced. There has been no successful
 * reproduction of the introduction of these null rows. We
 * elect to patch the corrupted data as an intermediate measure.
 *
 * [Performance]
 *
 * The traversal through the data to identify
 * corrupted sections took <1ms in development testing, which is
 * additionally amortized by the traversals done by Jackson and
 * other processes in Composer that already traverse the full data
 * structure.
 *
 * The performance of actually correcting the corrupted sections
 * is not a concern, as it's only expended in the rare scenario
 * a null row is introduced, but was <2ms. Further, for any given
 * null row, the patch should only be necessary once.
 */
function patchNullRows(form) {
    const corruptedSections = [];
    (form.sections || []).forEach(section => {
        const rows = section.rows || [];
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (row === null) {
                corruptedSections.push(row);
                break;
            }
        }
    });
    if (corruptedSections.length > 0) {
        log.error(`Have corrupted sections in form: ${form.formLabel + " [" + form._id + "]"}`);
        corruptedSections.forEach(corruptedSection => {
            log.info("Filtering out null rows in section: " + corruptedSection.sectionLabel + " [" + corruptedSection.getId() + "]");
            const filteredRows = [];
            const nullIndices = [];
            const rows = corruptedSection.rows || [];
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                if (row == null) {
                    nullIndices.add(i);
                } else {
                    filteredRows.add(row);
                }
            }
            corruptedSection.rows = filteredRows;
            log.info("Null rows at indices: " + nullIndices);

        })
    }

    return corruptedSections.length > 0;
}

async function loadFormId(formId, formName) {
    const FormModel = await dataLayer.getModel("vision",dataLayer.model.ComposerForm);
    if (! FormModel) {
        throw new Error(`${dataLayer.model.ComposerForm} not found`);
    }
    let form = await FormModel.findById(dataLayer.makeId(formId));
    if (! form) return null;
    form = form.toJSON();
    patchNullRows(form);            
    (form.sections || []).forEach(section => {
        section.fields = collectTypes(section, '_type', 'field');
        (section.fields || []).forEach(f => {
            switch (f._class) {
                case 'com.preludedynamics.composer.data.elements.Module': {
                    f._type = 'module';
                    break;
                }
                case 'com.preludedynamics.composer.data.elements.FieldData': {
                    f._type = 'field';
                    break;
                }
            }
        });
    });
    return form;
}
async function loadSnapshot(snapshotId) {
    const ComposerSnapshotModel = await dataLayer.getModel("vision",dataLayer.model.ComposerSnapshot);
    if (! ComposerSnapshotModel) {
        throw new Error(`${dataLayer.model.ComposerSnapshot} not found`);

    }
    const segments = snapshotId.split('_');
    if (segments.length === 2) {
        return ComposerSnapshotModel.findOne({
            parentId:segments[0],
            number:Number(segments[1])
        });
    }
}
async function loadStudy(studyId) {
    const ComposerStudyModel = await dataLayer.getModel("vision",dataLayer.model.ComposerStudy);
    if (! ComposerStudyModel) {
        throw new Error(`${dataLayer.model.ComposerStudy} not found`);
    }
    return ComposerStudyModel.findOne({_id:studyId});

}
async function changeFormState(data) {
    console.log(data.refId);
    // const formRef = 
    // FormRef formRef = (FormRef) data.studyData.findNode(ComposerElement.Type.formRef, data.refId);
    // String state = data.state;
}

function getFormGroupById(studyDoc, viewId, groupId) {
    if (! Array.isArray(studyDoc.views)) return null;
    const views = studyDoc.views.filter(v => v._id === viewId);
    if (views.length !== 1 || ! Array.isArray(views[0].groups)) return null;
    for (let i = 0; i < views[0].groups.length; i++) {
        if (views[0].groups[i]._id && views[0].groups[i]._id.toString() === groupId) {
            return views[0].groups[i];
        }
    }
    return null;
}

async function initForm(clientId, templateId) {
    if (templateId != null && templateId !== '') {
        // TODO db
        const ComposerForm = await dataLayer.getModel('vision', dataLayer.model.ComposerForm);
        return ComposerForm.findById(dataLayer.makeId(templateId)).lean();
    }
    return Object.assign({}, require('./initialFormState'));
}

async  function initializeAndSaveForm(form, clientId, templateId, firstInstance) {
    if (form.formType ===  FormRef.FORM_TYPE_SHARED  && ! firstInstance)  {
        return null;
    }
    // TODO db
    const ComposerForm = await dataLayer.getModel('vision', dataLayer.model.ComposerForm);

    const id = dataLayer.createMongoID();
    form._id = id;
    form.id = id.toString();
    if (FormRef.FORM_TYPE_PROVIDED !== form.formType) {
        let template = await initForm(clientId, templateId);
        if (! template) throw new Error(`Could not initialize form template templateId=${templateId}`);
        Object.keys(form).forEach(k => {
            // if for form has a key and its not array of length 0, from wins
            const v = form[k];
            if (v && !(Array.isArray(v) && v.length == 0)) {
                template[k] = v;
            }
        });
        ['sections', 'calculations', 'constraints'].forEach(lValue => {
            (template[lValue] || []).forEach(item => {
                if (! item.shareRules) {
                    item.shareRules =  {
                        instances:[]
                    }
                }
            })
        });
        // TODO return?
        return ComposerForm.create(template);
    } else {
        form.providedJspPath = templateId;
        // TODO return?
        return  ComposerForm.create(form);
    }
}

/**
 * 
 * 1) Load the study associated with the request, we need the study.name, and client.id attribute from the study
 * 2) Create the form based on the study, 
 * 3) Error if creation failure
 * 4) If the new form is shared
 *      Load the ComposerStudy
 *      Iterate over each view over each group over each formRef and update other referenece as in-work
 * @param {ComposerForm JSON} form 
 */
async function addForm(clientId, studyId, form, path, templateId, firstInstance, jwtToken) {
    try {
        // TODO datbase name
        const ComposerStudy = await dataLayer.getModel('vision', dataLayer.model.ComposerStudy);
        const ComposerForm = await dataLayer.getModel('vision', dataLayer.model.ComposerForm);
        jwtToken = jwtToken || await edcClient.connect('administrator@preludeedc.com', 'superMo9');

        const study = await edcClient.getStudy(studyId, clientId, jwtToken);
        if (! study) throw new Error(`Study not found studyId=${studyId}, clientId=${clientId}`);

        const studyDoc = await ComposerStudy.findById(path.getId(LayoutPath.IDs.STUDY));
        if (! studyDoc) throw new Error(`ComposerStudy not found _id=${path.getId(LayoutPath.IDs.STUDY)}`);
        form.studyId = studyId;
        form.clientId = clientId;
        form.studyName = study.ui;
        const group = getFormGroupById(studyDoc, path.getPath()[1], path.getPath()[2]);;
        if (! group) {
            throw new Error(`Group not found composerStudy=${studyDoc._id}, path=${JSON.stringify(path)}`);
        }
        let savedForm = await initializeAndSaveForm(form, clientId, templateId,firstInstance);
        // If saveForm is null, that means we saved the nth (n > 1) instance of a shared form
        const idStr = savedForm == null ? templateId : savedForm._id.toString();

        const formRef = {
            _id:dataLayer.createMongoID().toString(),
            name:form.formName,
            label:form.formLabel,   
            formType:form.formType,
            onDemand:!!form.onDemand,
            refId:idStr,
            isOriginal:!!firstInstance,
            includeInFormLibrary:false,
            formStatus:FormRef.FORM_STATUS_IN_WORK,
        }
        group.formRefs.push(formRef);

        // This was from ComposerController NOT ComposerMongoDB
        if(formRef.formType === FormRef.FORM_TYPE_SHARED) {
            (studyDoc.views || []).forEach(view => {
                (view.groups || []).forEach(group => {
                    (group.formRefs || []).forEach(sharedForm => {
                        if (formRef.refId === sharedForm.refId && formRef._id !== sharedForm._id.toString()) {
                            sharedForm.formStatus = FormRef.FORM_STATUS_IN_WORK;
                            // TODO: The old code resaved the form which tagged the last edit to logged in user and time
                        }
                    });
                })
            });
        }
        // TODO: No save?
        await studyDoc.save();
        // TODO: publish edit?
        // pushStudyUpdate(req.path.getId(LayoutPath.Id.STUDY));
        return formRef;
    } catch (err)  {
        log.error(`addForm clientId=${clientId}, studyId=${studyId}, form=${JSON.stringify(form)}, path=${JSON.stringify(path)}, templateId=${templateId}, firstInstance=${firstInstance}, err=${err.message}`);
        throw err;
    }

}

async function addGroup(formGroupData, path) {
    const ComposerStudy = await dataLayer.getModel('vision', dataLayer.model.ComposerStudy);
    const study = await ComposerStudy.findById(path.getId(LayoutPath.IDs.STUDY));
    if (study) {
        let view = study.views.filter(v => v._id === path.getPath()[1]);
        if (view && view.length === 1) {
            view = view[0];
            formGroupData._id = dataLayer.createMongoID();
            formGroupData.onDemand = formGroupData.onDemand === true;
            view.groups.push(formGroupData);
            const wasSaved =  await study.save();
            // TODO What if not saved
            return formGroupData._id;
        }
        throw new Error(`Study not found _id=${path.getId(LayoutPath.IDs.STUDY)}, view=${path.getPath()[1]}`);

    }
    throw new Error(`Study not found _id=${path.getId(LayoutPath.IDs.STUDY)}`);
}
function collectTypes(object, propName, propValue, result = []) {
    if (! object) return;
    if (Array.isArray(object)) {
        object.forEach(v => collectTypes(v, propName, propValue, result));
        return result;
    }
    if (typeof object === 'object') {
        if (object[propName] === propValue) {
            result.push(object);
            return result;
        }
        Object.keys(object).forEach(key => {
            collectTypes(object[key], propName, propValue, result)
        });
    }
    return result;
}

async function formLibraryOptions(clientId, studyId, jwtToken) {
    // const study = await edcClient.getStudy(studyId, clientId, jwtToken);
    // if (! study) throw new Error(`Study not found studyId=${studyId}, clientId=${clientId}`);
    // TODO DB name
    const FormModel = await dataLayer.getModel("vision",dataLayer.model.ComposerForm);
    const clientIds = ['Prelude'];
    const studyIds = [];
    return FormModel.aggregate([
        // First mmatch all forms whose clientIds are in clientIds or studyId is in studyIds
        { "$match": { "$or": [{ "clientId": { "$in": clientIds } }, { "studyId": { "$in": studyIds } }] } },
        // Group by studyName, collect the id (aka name) and formLabel (aka value) in the chuldren arrat
        {
            "$group": {
                "_id": "$studyName",
                "name":{"$first":"$studyId"},
                "children": {
                    "$push": {
                        "name": "$_id",
                        "value": "$formLabel"
                    }
                }
            }
        },
        //  Sort ascending by _id aaka studName
        {
            "$sort": { "_id": 1 }
        },
        // Project name, rename _id to value, do not project _id and sort the children by value field ascending
        {
            "$project": {
                name:1,
                value:"$_id",
                _id:0,
                "children": {
                    "$sortArray": {
                        "input": "$children",
                        "sortBy": {
                            "value": 1
                        }
                    }
                }
            }
        }

    ]);
}

async function saveStudy(newStudy) {
    const ComposerStudy = await dataLayer.getModel('vision', dataLayer.model.ComposerStudy);
    const currentStudy = ComposerStudy.findById(newStudy._id);
    if (! currentStudy) {
        throw new Error(`saveStudy newStudy._id=${newStudy._id}, not found`);
    }
    // TODO: This looks like some patching work
    // for (ViewData view : newStudy.getViews()) {
    //     for (FormGroupData group : view.groups) {
    //         for (FormRef formRef : group.formRefs) {
    //             FormRef existingRef = (FormRef) currentStudy.findNode(ComposerElement.Type.formRef, formRef.getId());
    //             if(existingRef == null)
    //                 continue;
    //             if(!existingRef.formStatus.equals(formRef.formStatus)) {
    //                 long currentStatusChangeTime = getStatusChangeTime(currentStudy, existingRef);
    //                 long newStatusChangeTime = getStatusChangeTime(newStudy, formRef);
    //                 if(currentStatusChangeTime > newStatusChangeTime) {
    //                     formRef.formStatus = existingRef.formStatus;
    //                 }
    //             }

    //             if(!Objects.equals(formRef.lastPublishedName, existingRef.lastPublishedName)
    //                     || !Objects.equals(formRef.lastPublishedLabel, existingRef.lastPublishedLabel)) {
    //                 long existingPubTime = getPublishedTime(existingRef);
    //                 long newPubTime = getPublishedTime(formRef);
    //                 if(existingPubTime > newPubTime) {
    //                     formRef.lastPublishedName = existingRef.lastPublishedName;
    //                     formRef.lastPublishedLabel = existingRef.lastPublishedLabel;
    //                 }
    //             }

    //             // Account for legacy data, which did not have lastPublishedName/Label fields.
    //             // We initialize those fields now, for forms that are currently published.
    //             if (formRef.formStatus.equals(FormRef.FORM_STATUS_PUBLISHED)) {
    //                 if (formRef.lastPublishedName == null) {
    //                     formRef.lastPublishedName = formRef.name;
    //                 }
    //                 if (formRef.lastPublishedLabel == null) {
    //                     formRef.lastPublishedLabel = formRef.label;
    //                 }
    //             }
    //         }
    //     }
    // }

    return ComposerStudy.replaceOne({_id:newStudy._id}, newStudy);
}

async function saveForm(form) {
    // TODO DB name
    const CompserFormModel = await dataLayer.getModel("vision",dataLayer.model.ComposerForm);
    return CompserFormModel.replaceOne({_id:dataLayer.makeId(form._id)}, form);
}

async function listFieldsForForm(clientId, studyId, viewId, formRefId) {
console.log('ead');

}
module.exports = {
    loadFormId,
    loadSnapshot,
    loadStudy,
    changeFormState,
    addForm,
    addGroup,
    formLibraryOptions,
    saveStudy,
    saveForm,
    listFieldsForForm
};
const dataLayer = require("./dataLayer")

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
    if (FormModel) {
        let form = await FormModel.findById(dataLayer.makeId(formId));
        if (form) {
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
            })
            return form;
        }
    }
    throw new Error(`${dataLayer.model.ComposerForm} not found`);
}
async function loadSnapshot(snapshotId) {
    const ComposerSnapshotModel = await dataLayer.getModel("vision",dataLayer.model.ComposerSnapshot);
    if (ComposerSnapshotModel) {
        const segments = snapshotId.split('_');
        if (segments.length === 2) {
            return ComposerSnapshotModel.findOne({
                parentId:segments[0],
                number:Number(segments[1])
            });
        }
    }
    throw new Error(`${dataLayer.model.ComposerSnapshot} not found`);
}
async function loadStudy(studyId) {
    const ComposerStudyModel = await dataLayer.getModel("vision",dataLayer.model.ComposerStudy);
    if (ComposerStudyModel) {
        return  ComposerStudyModel.findOne({_id:studyId});
    }
    throw new Error(`${dataLayer.model.ComposerStudy} not found`);
}
async function changeFormState(data) {
    console.log(data.refId);
    // const formRef = 
    // FormRef formRef = (FormRef) data.studyData.findNode(ComposerElement.Type.formRef, data.refId);
    // String state = data.state;
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
async function addForm(studyId, form) {
    // Study study = StudyService.findStudyInSession(session).orElse(null);
    // FormRef formRef = db.addForm(study, req.data, req.path, req.templateId, req.firstInstance);
    // if(formRef == null) {
    //     return ResponseEntity.badRequest().build();
    // }
    // StudyDataDoc studyDoc = db.getStudyDataDoc(study.getUniqueId());
    // //update status for all places the form exists if it's a shared form
    // if(formRef.formType.equals("shared")) {
    //     for (ViewData view : studyDoc.getViews()) {
    //         for (FormGroupData group : view.groups) {
    //             for (FormRef sharedForm : group.formRefs) {
    //                 if(formRef.refId.equals(sharedForm.refId) && !formRef.getId().equals(sharedForm.getId())) {
    //                     changeFormStateToInWork(sharedForm, studyDoc, req.data);
    //                 }
    //             }
    //         }
    //     }
    // }
    // pushStudyUpdate(req.path.getId(LayoutPath.Id.STUDY));
    // return ResponseEntity.ok(new IdResponse(formRef.getId()));

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
module.exports = {
    loadFormId,
    loadSnapshot,
    loadStudy,
    changeFormState,
    addForm
}
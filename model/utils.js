const dataLayer = require("./dataLayer")

function getNodeChildren(node) {
    switch (node._type) {
        case 'study':return (node.views || []);
        case 'view': return (node.groups || []);
        case 'group': return (node.formRefs || []);
        case 'form': {
            return (node.sections || []).concat(node.calculations || []).concat(node.constraints || []);
        }
        case 'section': return (node.rows || []);
        case 'row': return node.tables || [];
        case 'table': return node.tableRows || [];
        case 'tableRow': return node.cells || [];
        case 'tableCell': return node.components || [];
        case 'field': return node.fieldOptions || [];
        case 'constraints':
        case 'calculation': {
            return (node.triggers || []);
        }

        case 'triggers': 
        default:
            return [];
    }
}
function findNodesOfType(root, type, result = []){

    (getNodeChildren(root) || []).forEach(child => {
        if (child && child._type === type) {
            result.push(child);
        } else {
            findNodesOfType(child, type, result);
        }
    });
    return result;
}
function findNode(node, type, id, returnParent = false, parent = null) {
    if((node._id && node._id.toString()) === (id && id.toString()) && node._type === type) {
        if(returnParent){
            return parent;
        }
        return node;
    }
    parent = node;
    const children = getNodeChildren(node) || [];
    for (let i = 0 ; i < children.length; i++) {
        const ret = findNode(children[i], type, id, returnParent, parent);
        if (ret) {
            return ret;
        }
    }
    return null;
}

async function getAllFieldsForForm(clientId, studyId, formRefId) {
    const ComposerStudyModel = await dataLayer.getModel("vision",dataLayer.model.ComposerStudy);
    const ComposerFormModel = await dataLayer.getModel("vision",dataLayer.model.ComposerForm);

    const study = await ComposerStudyModel.findById(studyId);
    if (! study) {
        throw new Error(`getAllFieldsForForm clientId=${clientId}, studyId=${studyId}, formRefId=${formRefId}: study not found`);
    }
    const fr = findNode(study, 'formRef', formRefId);
    if (! fr) {
        throw new Error(`getAllFieldsForForm clientId=${clientId}, studyId=${studyId}, formRefId=${formRefId}: formRefId not found`);
    }
    const form = await ComposerFormModel.findById(fr.refId);
    if (! form) {
        throw new Error(`getAllFieldsForForm clientId=${clientId}, studyId=${studyId}, formRefId=${formRefId}, form._id=${fr.refId}: form not found`);
    }
    const result = [];
    (findNodesOfType(form, 'section') || []).forEach(section => {
        (findNodesOfType(section, 'field') || []).forEach(fieldData => {
            if (fieldData && fieldData.fieldName && fieldData.fieldName !== '') {
                result.push( {
                    name:fieldData.fieldName,
                    fixedIndex:section.fixedIndex
                });
            }
        });
    });
    return result;
}
module.exports = {
    findNode,
    findNodesOfType, 
    getAllFieldsForForm
};


(async () => {
    // const CompserFormModel = await dataLayer.getModel("vision",dataLayer.model.ComposerForm);
    // const form = await CompserFormModel.findById('62a38b5ddd51862f6851dd98');
    try {
        console.log(await getAllFieldsForForm('vision', 'Prelude_Animal_Demo_Training', '62a38b5ddd51862f6851dd9a'));
        // console.log(findNodesOfType(form, 'field').length);
        // console.log(findNode(form, 'field', 'form_element_19'));
    } catch (err) {
        console.log(err);
    } finally {
        process.exit(0);
    }
})();
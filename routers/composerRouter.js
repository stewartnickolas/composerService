const express = require('express');

const router = express.Router();
const BAD_REQUEST = 400;
const composerService = require('../model/composerService');
const LayoutPath = require('../model/LayoutPath');
const log = require('techbytes').logger(module);

router.get('/loadForm/:formId', async (req, res, next) => {
    try {
        const form = await composerService.loadFormId(req.params.formId, req.query.formName);
        if (! form) {
            const msg =  "No form found for id: " + req.params.formId;
            res.status(BAD_REQUEST).send(msg);
        } else {
            res.json(form);
        }
    } catch (err) {
        log.error(err);
        res.status(BAD_REQUEST).send(err);
    }
});

router.get('/formHistory', async (req, res, next) => {
    try {   
        const snapShot = await composerService.loadSnapshot(req.query.snapshotId);
        if (! snapShot) {
            const msg =  "No snapShot found for snapshotId: " + req.query.snapshotId;
            res.status(BAD_REQUEST).send(msg);
        } else {
            res.json(snapShot.formData);
        }
    } catch (err) {
        log.error(err);
        res.status(BAD_REQUEST).send(err);
    }
});

router.post('/revertFormToRevision/:studyId/:formRefId', (req, res) => {
    // req.query.snapshotId
    console.log('here');
});

router.post('/saveForm', (req, res) => {
    try {   
        // TODO User in session
        const form = req.body || {};
        form.lastEditedBy = "Stewart Nickolas";
        form.lastEditedDateTime =  new Date();
        res.json(composerService.saveForm(form));
    } catch (err) {
        log.error(err);
        res.status(BAD_REQUEST).send(err);
    }
});

// TODO: Implement
router.post('/changeFormState', async (req, res, next) => {
    try {   
        res.json(composerService.changeFormState(req.body));
    } catch (err) {
        log.error(err);
        res.status(BAD_REQUEST).send(err);
    }
});

router.post('/saveStudy', (req, res) => {
    try {   
        const study = composerService.saveStudy(req.body);
        if (study) {
            res.json({status:'saved study'})
        } else {
            res.status(BAD_REQUEST).send(err);
        }
    } catch (err) {
        log.error(err);
        res.status(BAD_REQUEST).send(err);
    }

});

router.get('/loadStudy/:studyId', async (req, res, next) => {
    try {   
        const study = await composerService.loadStudy(req.params.studyId);
        if (! study) {
            const msg =  "No study found for id: " + req.query.studyId;
            res.status(BAD_REQUEST).send(msg);
        } else {
            res.json(study);
        }
    } catch (err) {
        log.error(err);
        res.status(BAD_REQUEST).send(err);
    }
});

/**
 * req.body -
 */
router.post('/addForm', async (req, res) => {
    try {
        const body = req.body || {};
        // TODO: passed on request
        const clientId = '64e4ea5713562534c41c5775';
        const studyId = '64e4e6e3dc3b0653e705905b';

        const formRef = await composerService.addForm(clientId, studyId, body.data, new LayoutPath(body.path), body.templateId,body.firstInstance);
        if (formRef && formRef._id) {
            // pushStudyUpdate(req.path.getId(LayoutPath.Id.STUDY));
            res.json({id:formRef._id});
        } else {
            res.status(BAD_REQUEST).send(err);
        }
    } catch (err) {
        log.error(err);
        res.status(BAD_REQUEST).send(err);
    }
});
/**
{
    "data": {
        "_type": "group",
        "name": "hello",
        "label": "Hello",
        "onDemand": true,
        "formRefs": []
    },
    "path": {
        "path": [
            "Prelude_Animal_Demo_Training",
            "patient"
        ],
        "targetType": "view",
        "rootType": "study"
    },
    "tabId": "tid0.7842853455738072"
} * 
 */
router.post('/addGroup', async (req, res) => {
    // req.query.formRefId
    try {
        const formId = await composerService.addGroup(req.body.data, new LayoutPath(req.body.path));
        if (formId) {
            res.json(formId);
        } else {
            res.status(BAD_REQUEST).send(err);
        }
    } catch (err) {
        log.error(err);
        res.status(BAD_REQUEST).send(err);
    }
});

// TODO: Implement
router.get('/predefinedForms', (req, res) => {
    // req.query.view
    res.json({});
});

// TODO: Implement
router.get('/listFields', (req, res) => {
    // req.query.studyId, viewId, skipCategory,includeFieldIndex
    console.log('listFields');
});

// TODO: Implement
router.get('/listFieldsForForm', async (req, res) => {
    try {
        const fieldInfos = await composerService.listFieldsForForm(clientId, req.query.studyId, req.query.viewId, req.query.formRefId)
        if (fieldInfos) {
            res.json(fieldInfos);
        } else {
            res.status(BAD_REQUEST).send(err);
        }
    } catch (err) {
        log.error(err);
        res.status(BAD_REQUEST).send(err);
    }

    console.log('listFieldsForForm');
});

router.get('/formLibraryOptions', async (req, res) => {
    try {
        // TODO clientId, studyId
        const clientId = '64e4ea5713562534c41c5775';
        const studyId = '64e4e6e3dc3b0653e705905b';
        const jwtToken = null;

        const options = await composerService.formLibraryOptions(clientId, studyId, jwtToken);
        if (options) {
            res.json(options);
        } else {
            res.status(BAD_REQUEST).send(err);
        }
    } catch (err) {
        log.error(err);
        res.status(BAD_REQUEST).send(err);
    }
});

// TODO: Implement
router.get('/user', (req, res) => {
    res.json({"roleCode":"A","name":"Stew Nickolas","uniqueId":"administrator"});
});

router.get('/tldInfo', (req, res) => {
    res.json(require('./cache/tldInfo.js'));
});
router.get('/translations', (req, res) => {
    res.json(require('./cache/translations.js'));
});

router.get('/availableModules', (req, res) => {
    console.log('here');

});

router.post('/publishStudy', (req, res) => {
    // req.query.pass, publishLive
    console.log('publishStudy');

});
router.post('/uploadFieldImage', (req, res) => {
    // req.query file
    console.log('uploadFieldImage');

});


module.exports = router;
const express = require('express');

const router = express.Router();
const { restCall } = require('./utils');
const log = require('../logs')(module);

const BAD_REQUEST = 400;

const composerService = require('../model/composerService');

router.get('/loadForm/:formId', async (req, res, next) => {
    try {
        const form = await composerService.loadFormId(req.params.formId, req.query.formName);
        if (! form) {
            const msg =  "No form found for id: " + req.params.formId;
            res.status(BAD_REQUEST).send(msg);
        } else {
            const fs = require('fs');
            fs.writeFileSync(__dirname + '/form.js', 'module.exports = ' + JSON.stringify(form, null, 4));
            res.json(form);
        }
    } catch (err) {
        log.error(err);
        res.status(BAD_REQUEST).send(err);
    }
});

router.get('/formHistory', async (req, res, next) => {
    // req.query.snapshotId
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
});

router.post('/saveForm', (req, res) => {
    // req.query.formRefId
});

router.post('/changeFormState', async (req, res, next) => {
    try {   
        res.json(composerService.changeFormState(req.body));
    } catch (err) {
        log.error(err);
        res.status(BAD_REQUEST).send(err);
    }
});

router.post('/saveStudy', (req, res) => {
});

router.get('/loadStudy/:studyId', async (req, res, next) => {
    try {   
        const study = await composerService.loadStudy(req.params.studyId);
        if (! study) {
            const msg =  "No study found for id: " + req.query.studyId;
            res.status(BAD_REQUEST).send(msg);
        } else {
            // const fs = require('fs');
            // fs.writeFileSync(__dirname + '/foo.js', 'module.exports = ' + JSON.stringify(study.toJSON(), null, 4));
            res.json(study);
            // res.json(require('./cache/study'));
        }
    } catch (err) {
        log.error(err);
        res.status(BAD_REQUEST).send(err);
    }
});

router.post('/addForm', (req, res) => {
    // req.query.formRefId
});

router.post('/addGroup', (req, res) => {
    // req.query.formRefId
});

router.get('/predefinedForms', (req, res) => {
    // req.query.view
});

router.get('/listFields', (req, res) => {
    // req.query.studyId, viewId, skipCategory,includeFieldIndex
});

router.get('/listFieldsForForm', (req, res) => {
    // req.query.studyId, viewId, formRefIf
});

router.get('/formLibraryOptions', (req, res) => {
});

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
});

router.post('/publishStudy', (req, res) => {
    // req.query.pass, publishLive
});
router.post('/uploadFieldImage', (req, res) => {
    // req.query file
});


module.exports = router;
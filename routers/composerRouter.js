const express = require('express');

const router = express.Router();
const {restCall} = require('./utils');
const log = require('../logs')(module);



router.get('/loadForm/:formId', (req, res) => {
    // req.query.formName
});

router.get('/formHistory', (req, res) => {
    // req.query.snapshotId
});

router.post('/revertFormToRevision/:studyId/:formRefId', (req, res) => {
    // req.query.snapshotId
});

router.post('/saveForm', (req, res) => {
    // req.query.formRefId
});

router.post('/changeFormState', (req, res) => {
});

router.post('/saveStudy', (req, res) => {
});

router.get('/loadStudy/:studyId', (req, res) => {
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

router.get('/tldInfo', (req, res) => {
});
router.get('/translations', (req, res) => {
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
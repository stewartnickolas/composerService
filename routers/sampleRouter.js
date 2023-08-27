const express = require('express');

const router = express.Router();

const edcClient = require('../clients/edcClient')
const log = require('techbytes').logger(module);


router.post('/login', async (req, res, next) => {
    try {
        const jwtToken = await edcClient.connect(req.body.username, req.body.password);
        res.redirect(`/index.html?token=${JSON.stringify(jwtToken)}`);
    } catch (err) {
        log.error(err);
        next(err)
    }
});

module.exports = router;
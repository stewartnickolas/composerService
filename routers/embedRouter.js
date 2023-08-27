const express = require('express');

const router = express.Router();

const log = require('techbytes').logger(module);

router.get('/', async (req, res, next) => {
    try {
        if (! req.query.token) {
            return res.render('misconfigured');
        }
        const datums = {
            token:req.query.token
        }
        res.render('composer', datums);
    } catch (err) {
        log.error(err);
        next(err)
    }
});

module.exports = router;
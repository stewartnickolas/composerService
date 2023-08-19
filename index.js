const express = require('express');

const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env['COMPOSER_PORT'] || 8090;
const app = express();

const log = require('./logs')(module);
// Allow cors so we'll work with our client web app hosted in another domain
app.use(cors());
// Compress the output (helps a lot for download large amounts of data)
app.use(compression())


// Set limits for download/upload on HTTP POST/body size
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.use(bodyParser.json({ limit: '500mb', type: 'application/json' }));

async function authRequired(req, res, next) {
    const headers = req.headers || {};
    if (headers.authorization) {
        if (headers.authorization && headers.authorization.startsWith('Bearer ')) {
            const segments = headers.authorization.split(' ');
            const token = segments[segments.length - 1];
            // TODO: call ??
            return next();
        }
    }
    res.sendStatus(401);
};

app.use('/composer', authRequired, require('./routers/composerRouter'));

(async () => {
    const dataLayer = require('./model/dataLayer');
    await dataLayer.init();
    app.listen(PORT, () => {
        log.info(`Prelude Compoer Service listening on port ${PORT}`)
    })
})();

const express = require('express');

const { create } = require('express-handlebars');

const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env['COMPOSER_PORT'] || 8090;
const app = express();

const log = require('techbytes').logger(module);
// Allow cors so we'll work with our client web app hosted in another domain
app.use(cors());
// Compress the output (helps a lot for download large amounts of data)
app.use(compression())


// Set limits for download/upload on HTTP POST/body size
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.use(bodyParser.json({ limit: '500mb', type: 'application/json' }));

// Initialize the handlebars components
const hbs = create({
    defaultLayout: 'generic',
    layoutsDir:'./views/layouts',
    partialsDir:'./views/partials',
    helpers: require('./views/helpers/handlebars_helpers.js')
});

// Configuration the handlebars environment
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');
app.set('hbs', hbs);


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
    return next();
    res.sendStatus(401);
};

app.use((req, res, next) => {
    const agent = req.headers['user-agent'];
    if (agent && agent.indexOf('ELB-HealthChecker') !== -1) {
        res.send("OK");
    } else {
        next();
    }
});
app.use('/embed', require('./routers/embedRouter.js'));
app.use('/vision/composer', authRequired, require('./routers/composerRouter'));
app.use('/sample', require('./routers/sampleRouter'));
app.use(express.static('public'));

const errorHandler = (error, request, response, next) => {
    // Error handling middleware functionality
    log.error(error);
    next(error);
}
app.use(errorHandler);

(async () => {
    const dataLayer = require('./model/dataLayer');
    await dataLayer.init();
    app.listen(PORT, () => {
        log.info(`Prelude Compoer Service listening on port ${PORT}`)
    })
})();

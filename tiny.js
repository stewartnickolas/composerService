const express = require('express');


const PORT = process.env['COMPOSER_PORT'] || 8090;
const app = express();

(async () => {
    app.listen(PORT, () => {
        console.log(`Prelude Compoer Service listening on port ${PORT}`)
    })
})();

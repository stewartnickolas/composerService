
const got = require('got');
const log = require('techbytes').logger(module);

const EDC_ENDPOINT = process.env['EDC_API_URL'] || 'http://localhost:8081/edc/api/internal/v1';

async function connect(username, password, options = {}) {
    const apiEndpoint = options.endPoint || EDC_ENDPOINT;
    const payload = {
        username,
        password
    }
    try {
        log.debug(`connect username=${username}`);
        const start = new Date().getTime();
        const result = await got.post(apiEndpoint + `/auth`,
            {
                json: payload,
                responseType: 'json'
            }).json();
        log.debug(`Login time=${new Date().getTime() - start}`);
        return result;
    } catch (err) {
        log.warn(`connect username=${username} err=${err}`);
        throw err;
    }
}

async function getStudy(studyId, accessId, token, options = {}) {
    const apiEndpoint = options.endPoint || EDC_ENDPOINT;
    try {
        log.debug(`getStudy studyId=${studyId}, accessId=${accessId}`);
        const start = new Date().getTime();
        const result = await got(apiEndpoint + '/' + accessId + '/studies/' + studyId,
            {
                headers: {
                    Authorization: 'Bearer ' + (token && token.accessToken),
                },
                responseType: 'json'
            }).json();
        log.debug(`getStudy time ${new Date().getTime() - start}`);
        return result;
    } catch (err) {
        log.warn(`getStudy studyId=${studyId}, accessId=${accessId}, options=${JSON.stringify(options)}, err=${err}`);
        throw err;
    }
}

module.export = {
    connect,
    getStudy
}

const got = require('got');
const log = require('../../logs')(module);

class PreludeAPIClient {
    constructor(props) {
        this.props = props;
        this.token = props.token || null;
        this.props.testData = props.testData || null;
        this.apiEndpoint = this.props.apiEndPoint || process.env['EDC_API_URL'];
        this.dbName = props.dbName || 'Prelude';
    }
    async connect(username, password) {
        if (this.token) return true;
        if (username) {
            this.props.usernane = username;
        }
        const payload = {
            username: username || this.props.username,
            password: password || this.props.password
        }
        try {
            log.debug(`connect username=${this.props.username}`);
            const start = new Date().getTime();
            const result = await got.post(this.apiEndpoint + `/api/internal/v1/auth`,
                {
                    json: payload,
                    responseType: 'json'
                }).json();
            if (result && result.accessToken) {
                this.token = result.accessToken;
            }
            log.debug(`Login time=${new Date().getTime() - start}`);
            return true;
        } catch (err) {
            log.warn(`connect username=${username} err=${err}`);
            throw err;
        }
    }
    async getStudy(studyId, accessId) {
        try {
            log.debug(`getStudy studyId=${studyId}, accessId=${accessId}`);
            const start = new Date().getTime();
            const result = await got(this.apiEndpoint + '/api/internal/v1/studies' + (studyId ? '/' + studyId : ''),
                {
                    headers: {
                        Authorization: 'Bearer ' + this.token,
                        'X-Internal-Identifier':accessId
                    },
                    responseType: 'json'
                }).json();
            log.debug(`getStudy time ${new Date().getTime() - start}`);
            // const fs = require('fs');
            // fs.writeFileSync('all.js', 'module.exports = ' + JSON.stringify(result, null, 4));
            // result.studyMetadata = await this.getStudyMetadata(studyId);
            return result;
        } catch (err) {
            log.warn(`getStudy studyId=${studyId}, accessId=${accessId}, err=${err}`);
            throw err;
        }
    }
}
(async () => {
    const client = new PreludeAPIClient({
        // apiEndPoint:'http://192.168.1.221:8080/vision',
        apiEndPoint:'http://localhost:8081/vision',
        dbName:'Prelude'
    });
    if (await client.connect('administrator@preludeedc.com', 'superMo9')) {
        // process.exit(0);

        const studies = await client.getStudy('000000000004686e82e4c6f6');  

        console.log(studies);
        // process.exit(0);
    }

})();
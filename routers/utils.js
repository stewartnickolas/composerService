async function restCall(promise, res, handler) {
    return promise
        .then(result => {
            if (res) {
                if (handler) {
                    return handler(restResult(result));
                }
                return res.json(restResult(result));
            }
            return restResult(result);
        })
        .catch(err => {
            if (res) {
                if (handler) {
                    return handler(restError(restError));
                }
                return res.json(restError(err));
            }
            return restError(err);
        })
}

function restError(err) {
    return { success: false, errorString: err.toString(), errorNo: err.errorNo };
}

function restResult(result) {
    return { success: true, result };
}
function sGet(obj, path, defValue) {
    if (typeof obj !== 'object') return typeof defValue !== 'undefined' ? defValue : null;
    const segments = path.split('.');
    let root = obj;
    const last = segments.length - 1;
    for (let i = 0; i < segments.length; i++) {
        if (! root) {
            root = undefined;
            break;
        }
        root = root[segments[i]];
        if (i === last) {
            break;
        }
        if (typeof root !== 'object') {
            return typeof defValue !== 'undefined' ? defValue : null;
        }
    }
    if (typeof root === 'undefined') {
        return typeof defValue !== 'undefined' ? defValue : null;
    }
    return root;
}

class PreludeError extends Error {
    constructor(message, errorCode, options) {
        super(message, options);
        this.errorCode = errorCode;
    }
    toString() {
        const message = `Error: ${this.message}, code=${this.errorCode}`;
        return message;
    }
}
PreludeError.ERRORS = {
    FILE_NOT_FOUND : 1
}

module.exports = {
    restCall,
    sGet,
    PreludeError
}

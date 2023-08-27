module.exports = {
    ifeq: function (a, b, options) {
        if (a === b || String(a) === String(b)) {
            return options.fn(this);
        }
        return options.inverse(this);
    }
}
const IDs = {
    STUDY: 0,
    VIEW: 1,
    GROUP: 2,
    FORM_REF: 3,

    FORM: 4,
    SECTION: 5,
    ROW: 6,
    TABLE: 7,
    TABLE_ROW: 8,
    TABLE_CELL: 9,
    FIELD: 10,
    FIELD_OPTION: 11,
}
class LayoutPath {
    constructor(path, rootType, targetType) {
        if (typeof path === 'object') {
            this.rootType = path.rootType;
            this.targetType = path.targetType;
            this.path = path.path;
        } else {
            this.path = path;
            this.rootType = rootType;
            this.targetType = targetType;
        }
    }
    getPath() {
        return this.path;
    }
    getId(level) {
        if (level >= IDs.FORM) {
            level -= IDs.FORM;
        }
        return this.path[level];
    }
    toString() {
        let ret = "";
        (this.path || []).forEach((item, idx) => {
            ret += (idx > 0 ? "." : "") + item;
        });
        return ret;
    }
}
LayoutPath.IDs = IDs;

module.exports = LayoutPath;
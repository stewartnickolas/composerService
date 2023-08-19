const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormRefSchema = new Schema({
    name: String,
    label: String,
    formStatus: String,
    formType: String, // TODO: Enum?, normal provided, ..?
    refIf: mongoose.ObjectId,
    includeInFormLibrary: { type: Boolean, default: false },
    _type: { type: String, default: 'formRef' },
    lastPublishedName: String,
    lastPublishedLabel: String,
    onDemand: Boolean,
    isOriginal: Boolean
});
FormRefSchema.set('toJSON', {
    virtuals: true
});

const GroupSchema = new Schema({
    name: String,
    label: String,
    onDemand: Boolean,
    _type: { type: String, default: 'group' },
    formRefs: [FormRefSchema],
});
GroupSchema.set('toJSON', {
    virtuals: true
});

const ViewSchema = new Schema({
    _type: { type: String, default: 'view' },
    _id: String,
    groups: [GroupSchema]
})
ViewSchema.set('toJSON', {
    virtuals: true
});

const ComposerStudy = new Schema({

    _id: String,
    name: String,
    views: [ViewSchema],
    roles: [
        {
            code: String,
            name: String,
            shortName: String,
            edits: String,
            _type: { type: String, default: "role" }
        }
    ],
    studyAttributes: [
        {
            name: String,
            value: String,
            _type: { type: String, default: 'studyAttribute' }
        }
    ],
    prefs: {
        defaultSiteCanDos: Schema.Types.Mixed,
        defaultPatientCanDos: Schema.Types.Mixed
    },
    _type: { type: String, default: "study" },
    lastPublishedTime: Number,
    lastPublishedBy: String,
    requireChangeReason: { type: Boolean, default: true },
    _class: String // TODO: Do we need this?

}, { timestamps: true, collection: 'studies' });

ComposerStudy.set('toJSON', {
    virtuals: true
});

const ShareRule = {
    type: String, // TODO Enum none...?
    instances: [
        {
            // TODO??
        }
    ]
}
const Component = new Schema({
    _id: String,
    _type: { type: String, default: 'field' },
    fieldType: String, // TODO ENUM text...?
    fieldName: String,
    fieldLabel: String,
    fieldSize: String,
    blankFields: Boolean,
    usingDimensions: Boolean,
    absoluteOrRelativeSize: String,
    fieldWidth: String,
    fieldHeight: String,
    fieldPlaceholder: String,
    labelClass: String,
    fieldOptionsClass: String,
    labelColor: String,
    cDash: String,
    readOnly: Boolean,
    requireChangeReason: Boolean,
    changesState: Boolean,
    showChanges: Boolean,
    maxLength: String,
    addInfoIcon: Boolean,
    addInfoIconText: String,
    showBackground: Boolean,
    controlDisplayField: String,
    controlDisplayValue: String,
    controlDisplayShowHide: String,
    controlDisplayType: String, // TODO ENUM?
    fieldOptions: [
        {
            // TODO??
        }
    ],
    fieldHasInitialValue: Boolean,
    fieldInitialValue: String,
    optionsFromOwnerField: String,
    comboFileName: String,
    value: String,
    imgWidth: Number,
    imgHeight: Number,
    conditionallyIncludeChecked: Boolean,
    conditionallyIncludeType: String, // TODO: Enum match...?
    conditionallyIncludeFieldPath: String,
    conditionallyIncludeValue: String,
    shareRules: [ShareRule],
    attributes: Schema.Types.Mixed,
    _class: String // TODO DELETE?
});
Component.set('toJSON', {
    virtuals: true
});

const Trigger = new Schema({
    _id:String,
    fields: String,
    triggerType: String, // TODO Enum notBlank...?
    value: String,
    _type:{type:String, default:'trigger'}
});
Trigger.set('toJSON', {
    virtuals: true
});

const Calculation = new Schema({
    _id:String,
    editCheckType: String, // TODO: Enum, setValue...?
    triggers: [Trigger],
    allTriggersRequired: Boolean,
    attributes: Schema.Types.Mixed,
    shareRules: [ShareRule],
    _type:{type:String, default:'calculation'}
});
Calculation.set('toJSON', {
    virtuals: true
});

const Constraint = new Schema({
    _id:String,
    editCheckType: String, // TODO Enum editCheckType...?
    severity: String, // TODO: Enum warning....?
    value: String,
    fields: String,
    errorMsg: String,
    population: String,
    attributes: Schema.Types.Mixed,
    triggers: [Trigger],
    allTriggersRequired: Boolean,
    shareRules: [ShareRule],
    _type:{type:String, default:'constraint'}

});
Constraint.set('toJSON', {
    virtuals: true
});


const PublishHistory = {
    action: String, // TODO: Enum?
    username: String,
    fullName: String,
    timestamp: Number,
    dateTime: Date,
    snapshotId: String
}

const CellSchema = new Schema({
    _id:String,
    align: String,
    layoutOrientation: String,
    components: [Component],
    _type:{type:String, default:'tableCell'}

});
CellSchema.set('toJSON', {
    virtuals: true
});

const TableRowSchema = new Schema({
    _id:String,
    _type: {type:String, default:"tableRow"},
    cells: [CellSchema]
});
TableRowSchema.set('toJSON', {
    virtuals: true
});

const TableSchema = new Schema({
    _id:String,
    numRows: Number,
    numCols: Number,
    width: String,
    alignment: String,
    autoNumber: String,
    showBorders: String,
    blankFields: String,
    columnHeaders: [String],
    columnHeadersSortBy: [
        // TODO??
    ],
    columnWidths: [String],
    rowLabels: [
        // TODO??
    ],
    controlDisplayField: String,
    controlDisplayType: String,
    tableRows: [TableRowSchema],
    conditionallyIncludeChecked: Boolean,
    conditionallyIncludeType: String, // TODO: Enum match...?
    conditionallyIncludeFieldPath: String,
    conditionallyIncludeValue: String,
    shareRules: [ShareRule],
    attributes: Schema.Types.Mixed,
    _type:{type:String, default:'table'}
});
TableSchema.set('toJSON', {
    virtuals: true
});
const RowSchema = new Schema({
    _id:String,
    rowName: String,
    rowLabel: String,
    tables: [TableSchema],
    _type:{type:String, default:'row'}

});
RowSchema.set('toJSON', {
    virtuals: true
});
const Section = new Schema({
    _id: String,
    _type: { type: String, default: 'section' },
    indexed: Boolean,
    reversedIndex: Boolean,
    sectionName: String,
    sectionLabel: String,
    controlDisplayField: String,
    controlDisplayType: String,
    blankFields: Boolean,
    obfuscated: Boolean,
    addInfoIcon: Boolean,
    addInfoIconText: String,
    conditionallyIncludeChecked: Boolean,
    conditionallyIncludeType: String,
    conditionallyIncludeFieldPath: String,
    conditionallyIncludeValue: String,
    rows: [RowSchema],
    shareRules: [ShareRule]
});
Section.set('toJSON', {
    virtuals: true
});


const ComposerForm = new Schema({
    _type:{type:String, default:'form'},
    clientId: String,
    studyId: String,
    studyName: String,
    formName: String,
    formLabel: String,
    formType: String, // TODO types, provided...?
    lastPublishedBy: String,
    lastPublishedDateTime: Date,
    deletedData: [
        // TODO: deletedData
    ],
    providedJspPath: String, // TODO Removed?
    publishHistory: [PublishHistory],
    sections: [Section],
    calculations: [Calculation],
    constraints: [Constraint],
    _class: String, // TODO Delete??

}, { timestamps: true, collection: 'forms' });
ComposerForm.set('toJSON', {
    virtuals: true
});

const ComposerSnapshot = new Schema({

    formData: { // TODO This should be Form, no?
        clientId: String,
        studyId: String,
        studyName: String,
        formName: String,
        formLabel: String,
        lastEditedBy: String,
        lastEditedDateTime: Date,
        lastPublishedBy: String,
        lastPublishedDateTime: Date,
        publishHistory: [PublishHistory],
        sections: [Section],
        calculations: [Calculation],
        constraints: [Constraint],
        parentId: String,
        username: String,
        timestamp: Number,
        number: Number,
        _class: String // TODO Delete?
    }
}, { timestamps: true, collection: 'formSnapshots' });

module.exports = {
    ComposerStudy: mongoose.model('studies', ComposerStudy),
    ComposerForm: mongoose.model('forms', ComposerForm),
    ComposerSnapshot: mongoose.model('formSnapshot', ComposerSnapshot)
}


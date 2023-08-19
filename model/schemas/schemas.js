const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComposerStudy = new Schema({

    _id:String,
    name:String,
    views:[
        {
            _id: String,
            groups: [
                {
                    name:mongoose.ObjectId,
                    label:String,
                    onDemand:Boolean,
                    formRefs: [
                        {
                            name:mongoose.ObjectId,
                            label:String,
                            formStatus:String,
                            formType:String, // TODO: Enum?, normal provided, ..?
                            refIf:mongoose.ObjectId,
                            includeInFormLibrary:Boolean,
                            _type:{type:String, default:'formRef'}
                        }
                    ]

                }
            ]
        }
    ],
    roles: [
        {
            code:String,
            name:String,
            shortName:String,
            edits:String 
        }
    ],
    studyAttributes: [
        {
            name:String,
            value:String,
            _type:String,
        }
    ],
    prefs: {
        defaultSiteCanDos:Schema.Types.Mixed,
        defaultPatientCanDos: Schema.Types.Mixed
    },
    lastPublishedTime:Number,
    lastPublishedBy:String,
    _class:String // TODO: Do we need this?

}, { timestamps:true, collection: 'studies' });

const ShareRule = {
        type:String, // TODO Enum none...?
        instances: [
            {
                // TODO??
            }
        ] 
}
const Component = {
    fieldType:String, // TODO ENUM text...?
    fieldName:String,
    fieldLabel:String,
    fieldSize:String,
    blankFields:Boolean,
    usingDimensions:Boolean,
    absoluteOrRelativeSize:String,
    fieldWidth:String,
    fieldHeight:String,
    fieldPlaceholder:String,
    labelClass:String,
    fieldOptionsClass:String,
    labelColor:String,
    cDash:String,
    readOnly:Boolean,
    requireChangeReason:Boolean,
    changesState:Boolean,
    showChanges:Boolean,
    maxLength:String,
    addInfoIcon:Boolean,
    addInfoIconText:String,
    showBackground:Boolean,
    controlDisplayField:String,
    controlDisplayValue:String,
    controlDisplayShowHide:String,
    controlDisplayType:String, // TODO ENUM?
    fieldOptions:[
        {
            // TODO??
        }
    ],
    fieldHasInitialValue:Boolean,
    fieldInitialValue:String,
    optionsFromOwnerField:String,
    comboFileName:String,
    value:String,
    imgWidth:Number,
    imgHeight:Number,
    conditionallyIncludeChecked:Boolean,
    conditionallyIncludeType:String, // TODO: Enum match...?
    conditionallyIncludeFieldPath:String,
    conditionallyIncludeValue:String,
    shareRules:[ShareRule],
    attributes: Schema.Types.Mixed,
    _class:String // TODO DELETE?
}
const Trigger = {
    fields:String,
    triggerType:String, // TODO Enum notBlank...?
    value:String,
}
const Calculation = {
    editCheckType:String, // TODO: Enum, setValue...?
    triggers:[Trigger],
    allTriggersRequired:Boolean,
    attributes:Schema.Types.Mixed,
    shareRules:[ShareRule,]
}
const Constraint = {
    editCheckType:String, // TODO Enum editCheckType...?
    severity:String, // TODO: Enum warning....?
    value:String,
    fields:String,
    errorMsg:String,
    population:String,
    attributes:Schema.Types.Mixed,
    triggers:[Trigger],
    allTriggersRequired:Boolean,
    shareRules:[ShareRule]
}
const PublishHistory = {
        action:String, // TODO: Enum?
        username:String,
        fullName:String,
        timestamp:Number,
        dateTime:Date,
        snapshotId:String
}
const Section =  {
    indexed:Boolean,
    reversedIndex:Boolean,
    sectionName:String,
    sectionLabel:String,
    controlDisplayField:String,
    controlDisplayType:String,
    blankFields:Boolean,
    obfuscated:Boolean,
    addInfoIcon:Boolean,
    addInfoIconText:String,
    conditionallyIncludeChecked:Boolean,
    conditionallyIncludeType:String,
    conditionallyIncludeFieldPath:String,
    conditionallyIncludeValue:String,
    rows:[
     {
         rowName:String,
         rowLabel:String,
         tables:[
             {
                 numRows:Number,
                 numCols:Number,
                 width:String,
                 alignment:String,
                 autoNumber:String,
                 showBorders:String,
                 blankFields:String,
                 columnHeaders: [String],
                 columnHeadersSortBy:[
                     // TODO??
                 ],
                 columnWidths:[String],
                 rowLabels:[
                     // TODO??
                 ],
                 controlDisplayField:String,
                 controlDisplayType:String,
                 tableRows:[
                     {
                        cells:[
                         {
                             align:String,
                             layoutOrientation:String,
                             components:[Component]
                         }
                        ],
                        
                     }
                 ],
                 conditionallyIncludeChecked:Boolean,
                 conditionallyIncludeType:String, // TODO: Enum match...?
                 conditionallyIncludeFieldPath:String,
                 conditionallyIncludeValue:String,
                 shareRules:[ShareRule],
                 attributes:Schema.Types.Mixed
             }
         ]
     }
    ],
    shareRules:[ShareRule]
 }

const ComposerForm = new Schema({

    clientId:String,
    studyId:String,
    studyName:String,
    formName:String,
    formLabel:String,
    formType: String, // TODO types, provided...?
    lastPublishedBy:String,
    lastPublishedDateTime:Date,
    deletedData:[
        // TODO: deletedData
    ],
    providedJspPath:String, // TODO Removed?
    publishHistory: [PublishHistory],
    sections: [Section],
    calculations:[Calculation],
    constraints:[Constraint],
    _class:String, // TODO Delete??

}, { timestamps:true, collection: 'forms' });

const ComposerSnapshot = new Schema({

    formData:{ // TODO This should be Form, no?
        clientId:String,
        studyId:String,
        studyName:String,
        formName:String,
        formLabel:String,
        lastEditedBy:String,
        lastEditedDateTime:Date,
        lastPublishedBy:String,
        lastPublishedDateTime:Date,
        publishHistory:[PublishHistory],
        sections:[Section],
        calculations:[Calculation],
        constraints:[Constraint],
        parentId:String,
        username:String,
        timestamp:Number,
        number:Number,
        _class:String // TODO Delete?
    }
},{ timestamps:true, collection: 'formSnapshots' });

module.exports = {
    ComposerStudy: mongoose.model('studies', ComposerStudy),
    ComposerForm: mongoose.model('forms', ComposerForm),
    ComposerSnapshot:mongoose.model('formSnapshot', ComposerSnapshot)
}


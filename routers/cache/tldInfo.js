module.exports = {
    "constraints": {
        "FieldChanged": {
            "name": "FieldChanged",
            "label": null,
            "description": "At least one of the field values for '___' has changed when form submitted.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "after": {
            "name": "after",
            "label": null,
            "description": "Date field(s) specified in the \"fields\" attribute must occur on or after a date specified in the \"value\" attribute.",
            "requiredAttributes": [],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed date fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "\n        The specified date that all field(s) in the \"fields\" attribute should be on or after. This date must in the appropriate study date format (in Study Builder, see Project/Form Permissions/Attributes/Study date format for details on this format). ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "alphaNumericFormat": {
            "name": "alphaNumericFormat",
            "label": null,
            "description": "Fields must be alphanumeric.",
            "requiredAttributes": [],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "and": {
            "name": "and",
            "label": null,
            "description": "Constraint: Fields are mandatory. (boolean \"and\" function). Trigger: When a given field(s) are filled in (notBlank) trigger the calculation.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "value",
                    "label": null,
                    "description": "Value to test against - used in some checks, but not all.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "atLeastNonBlank": {
            "name": "atLeastNonBlank",
            "label": null,
            "description": "At least a specified number of fields must be non-blank (i.e. must have a value). For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The maximum number of fields that must be non-blank.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "atMostNonBlank": {
            "name": "atMostNonBlank",
            "label": null,
            "description": "At most a specified number of fields must be non-blank (i.e. must have a value). For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The minimum number of fields that must be non-blank.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "before": {
            "name": "before",
            "label": null,
            "description": "Date field(s) specified in the \"fields\" attribute must occur on or before a date specified in the \"value\" attribute.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed date fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The specified date that all field(s) in the \"fields\" attribute should be on or before. This date must be in the appropriate study date formal (in Study Builder, see Project/Form Permissions/Attributes/Study date format for details on this format).",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "blank": {
            "name": "blank",
            "label": null,
            "description": "Designated fields must be blank.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "contains": {
            "name": "contains",
            "label": null,
            "description": "Fields must contain the specified string or value.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The specified string or value all field(s) in the \"fields\" attribute must contain.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "caseSensitive",
                    "label": null,
                    "description": "If caseSensitive=\"false\" then constraint ignores case.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "dateFormat": {
            "name": "dateFormat",
            "label": null,
            "description": "Fields must be dates. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "value",
                    "label": null,
                    "description": "Value to test against - used in some checks, but not all.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "dateOrder": {
            "name": "dateOrder",
            "label": null,
            "description": "Dates must be in order of occurrence.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Select the fields in the order in which they must occur from earliest to latest date. If a date can occur on the same date, those fields can be one after the other on the list.\n        In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "dateStudyFormat": {
            "name": "dateStudyFormat",
            "label": null,
            "description": "Field '___' must be in the study's date format___. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "value",
                    "label": null,
                    "description": "This is where the study date format will be specified.\n        Use \"dd-MMM-yyyy HH:mm z\" for the 24 hr clock and \"dd-MMM-yyyy hh:mm a z\" for a 12 hr clock. For dates, the default is \"dd-MMM-yyyy\" as it is required by most regulatory agencies, but \"mm-dd-yy\" can be used too.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "datesOutsideDays": {
            "name": "datesOutsideDays",
            "label": null,
            "description": "Dates must be outside a specified number of days from each other. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Enter two date fields to use in the constraint. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is number of days after the first date field which the second date field should occur.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "datesOutsideHours": {
            "name": "datesOutsideHours",
            "label": null,
            "description": "Two concatenated date/time fields that must be outside a specified number of hours from each other. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Enter two date/time fields to use in the constraint. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is number of hours after the first date/time field which the second date/time field should occur.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "datesOutsideMinutes": {
            "name": "datesOutsideMinutes",
            "label": null,
            "description": "Two concatenated date/time fields that must be outside a specified number of minutes from each other. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Enter two date/time fields to use in the constraint. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is number of minutes after the first date/time field which the second date/time field should occur.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "datesWithinDays": {
            "name": "datesWithinDays",
            "label": null,
            "description": "Dates must be within a specified number of days from each other. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Enter two date fields to use in the constraint. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is number of days the two dates in the \"fields\" attribute must be within.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "datesWithinHours": {
            "name": "datesWithinHours",
            "label": null,
            "description": "Two concatenated date/time fields must be within a specified number of hours from each other.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Enter two concatenated date/time fields to use in the constraint. In Study Builder, start typing each field name to select the applicable field(s). (Use the calculation \"concatenateDate\" to create a concatenated date/time field.)",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is number of hours the two concatenated date/time fields in the \"fields\" attribute must be within.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "datesWithinMinutes": {
            "name": "datesWithinMinutes",
            "label": null,
            "description": "Two concatenated date/time fields must be within a specified number of minutes from each other. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Enter two concatenated date/time fields to use in the constraint. In Study Builder, start typing each field name to select the applicable field(s). (Use the calculation \"concatenateDate\" to create a concatenated date/time field.)",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is number of minutes the two concatenated date/time fields in the \"fields\" attribute must be within.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "decimalRequired": {
            "name": "decimalRequired",
            "label": null,
            "description": "Field(s) requires a decimal.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is numbers of digits which should be included after the decimal point.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "decreasing": {
            "name": "decreasing",
            "label": null,
            "description": "Fields must be in decreasing order. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "These numeric or integer fields that should be in decreasing order (i.e. each field should be less than or equal to the field preceding it within this list). In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "equalIntegers": {
            "name": "equalIntegers",
            "label": null,
            "description": "Each field must be equal to the specified integer value.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is the integer it must equal.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "equals": {
            "name": "equals",
            "label": null,
            "description": "Each field must equal the specified value. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is the value the field(s) must equal.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "caseSensitive",
                    "label": null,
                    "description": "If caseSensitive=\"false\" then constraint ignores case.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "equalsAny": {
            "name": "equalsAny",
            "label": null,
            "description": "At least one of the fields must equal the specified value. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is the value at least one field in the \"fields\" attribute must be equal.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "caseSensitive",
                    "label": null,
                    "description": "If caseSensitive=\"false\" then constraint ignores case.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "equalsState": {
            "name": "equalsState",
            "label": null,
            "description": "Form '___' state must equal ___. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is state which the referenced field should equal. Use \"form.state.new\", \"in.work\", \"in.review\", \"reviewed\" or \"final\".",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "fieldNotChanged": {
            "name": "fieldNotChanged",
            "label": null,
            "description": "Field '___' must not have been changed. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "future": {
            "name": "future",
            "label": null,
            "description": "Dates must be in the future. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed date fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "greaterThan": {
            "name": "greaterThan",
            "label": null,
            "description": "Fields must be greater than the specified value. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is value that the referenced field(s) should be greater than.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "greaterThanOrEqual": {
            "name": "greaterThanOrEqual",
            "label": null,
            "description": "Fields must be greater than or equal to the specified value. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is value that the referenced field(s) should be greater than or equal to.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "greaterThanOrEqualState": {
            "name": "greaterThanOrEqualState",
            "label": null,
            "description": "Form '___' state must be greater than or equal to ___. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is state that the referenced field should be greater than or equal to. Use \"form.state.new\", \"in.work\", \"in.review\", \"reviewed\" or \"final\".",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "greaterThanState": {
            "name": "greaterThanState",
            "label": null,
            "description": "Form '___' state must be greater than ___. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is form state that the referenced field should be greater than. Use \"form.state.new\", \"in.work\", \"in.review\", \"reviewed\" or \"final\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "increasing": {
            "name": "increasing",
            "label": null,
            "description": "Fields must be in increasing order.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "These numeric or integer fields that should be in increasing order (i.e. each field should be greater than or equal to the field preceding it within this list). In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "inequality": {
            "name": "inequality",
            "label": null,
            "description": "Fields must not be equal. (!=) ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "integerFormat": {
            "name": "integerFormat",
            "label": null,
            "description": "Fields must be integers. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "value",
                    "label": null,
                    "description": "Value to test against - used in some checks, but not all.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "isAfter": {
            "name": "isAfter",
            "label": null,
            "description": "Fields must be after another field which is indicated in value. Is more lenient than 'after'.\n      Allows hundreds of absolute date formats such as value=\"1989/Jan/01\".\n      Allows relative dates such as value=\"now\" value=\"today\" value=\"5 days ago\".",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed date fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "value",
                    "label": null,
                    "description": "The specified date that all field(s) in the \"fields\" attribute should be strictly after.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "isBefore": {
            "name": "isBefore",
            "label": null,
            "description": "Fields must be before another field which is indicated in the value. Is more lenient than 'before'.\n      Allows hundreds of absolute date formats such as value=\"1989/Jan/01\".\n      Allows relative dates such as value=\"now\" value=\"today\" value=\"5 days ago\".",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed date fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "value",
                    "label": null,
                    "description": "The specified date that all field(s) in the \"fields\" attribute should be stictly before.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "isUnique": {
            "name": "isUnique",
            "label": null,
            "description": "Fields must be unique amongst a population. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "length": {
            "name": "length",
            "label": null,
            "description": "The number of characters in the field must be equal to the specified value. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The number of characters (i.e. length) of the entry made in the referenced field(s).",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "lessThan": {
            "name": "lessThan",
            "label": null,
            "description": "Fields must be less than the specified value.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is value that the referenced field(s) should be less than.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "lessThanOrEqual": {
            "name": "lessThanOrEqual",
            "label": null,
            "description": "Fields must be less than or equal to the specified value.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is value that the referenced field(s) should be less than or equal to.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "lessThanOrEqualState": {
            "name": "lessThanOrEqualState",
            "label": null,
            "description": "Form '___' state must be less than or equal to ___. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is form state that the referenced field should be less than or equal to. Use \"in.work\",\"in.review\", or \"final\".",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "lessThanState": {
            "name": "lessThanState",
            "label": null,
            "description": "Form '___' state must be less than ___. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is form state that the referenced field should be less than. Use \"in.work\",\"in.review\", or \"final\".",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "letterFormat": {
            "name": "letterFormat",
            "label": null,
            "description": "Fields must be letters and/or hyphens. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "match": {
            "name": "match",
            "label": null,
            "description": "All listed fields must match.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "caseSensitive",
                    "label": null,
                    "description": "If caseSensitive=\"false\" then constraint ignores case.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "matchDates": {
            "name": "matchDates",
            "label": null,
            "description": "All listed date fields must match (i.e. are on the same calendar day).",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed date fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "matchDictionary": {
            "name": "matchDictionary",
            "label": null,
            "description": "Field '___' must match an entry in the dictionary.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "value",
                    "label": null,
                    "description": "Value to test against - used in some checks, but not all.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "matchEntryDate": {
            "name": "matchEntryDate",
            "label": null,
            "description": "Listed date field(s) must match the current date at the time of entry.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed date fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "matchFirstFieldToAnyOther": {
            "name": "matchFirstFieldToAnyOther",
            "label": null,
            "description": "Make sure the value of the first field matches at least one of the other fields.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "caseSensitive",
                    "label": null,
                    "description": "If caseSensitive=\"false\" then constraint ignores case.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "matchPassword": {
            "name": "matchPassword",
            "label": null,
            "description": "Verifies that the passwords in the fields match the given password (the given password should be encoded)",
            "requiredAttributes": [
                {
                    "name": "password",
                    "label": null,
                    "description": "\n        The encoded password to compare against\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "\n        The constraint will apply to these listed fields.\n        (Study Builder) - Either select the fields by dragging the green dot onto them or type in the field name. If more than one field name is needed separate them with a comma.\n      ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "the lookup to application resources to find a custom error message",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "used to provide the value of the first field in place of value= in the error message",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "used to provide the literal text for the error fields in the error message",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "used to display the value of the field instead of the name in the error message when generating for each field",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "maxCharacters": {
            "name": "maxCharacters",
            "label": null,
            "description": "Field '___' must have no more than ___ characters.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is maximum number of characters that the referenced field should have.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "minCharacters": {
            "name": "minCharacters",
            "label": null,
            "description": "Field(s) must contain at least the specified number of characters.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is minimum number of characters that the referenced field(s) should contain.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "minLetters": {
            "name": "minLetters",
            "label": null,
            "description": "Field(s) must contain at least the specified number of letters.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is minimum number of letters that the referenced field(s) should contain.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "monthOrder": {
            "name": "monthOrder",
            "label": null,
            "description": "Fields '___' must be in month order.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "noneMatch": {
            "name": "noneMatch",
            "label": null,
            "description": "Used to ensure two or more fields are unique. This constraint can also be used to ensure a field is unique across subjects or sites. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this constraint.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "notBlank": {
            "name": "notBlank",
            "label": null,
            "description": "All designated field(s) in the \"fields\" attribute are mandatory.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "notContains": {
            "name": "notContains",
            "label": null,
            "description": "Fields must not contain the specified string.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The referenced field should does not contain this value or string.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "caseSensitive",
                    "label": null,
                    "description": "If caseSensitive=\"false\" then constraint ignores case.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "notEquals": {
            "name": "notEquals",
            "label": null,
            "description": "Each field must not equal the specified value.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is the value the field(s) must not equal.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "caseSensitive",
                    "label": null,
                    "description": "If caseSensitive=\"false\" then constraint ignores case.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "notEqualsOrBlank": {
            "name": "notEqualsOrBlank",
            "label": null,
            "description": "Each field must not equal the specified value or be left blank.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is the value the field(s) must not equal.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "caseSensitive",
                    "label": null,
                    "description": "If caseSensitive=\"false\" then constraint ignores case.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "notEqualsState": {
            "name": "notEqualsState",
            "label": null,
            "description": "Form '___' state must not equal ___. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The referenced field should not equal this given state: \"form.state.new\", \"in.work\", \"in.review\", \"reviewed\", or \"final\".",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "notFuture": {
            "name": "notFuture",
            "label": null,
            "description": "Dates must not be in the future.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed date fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "notMatch": {
            "name": "notMatch",
            "label": null,
            "description": "At least one of the listed fields must not match the other listed fields.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "caseSensitive",
                    "label": null,
                    "description": "If caseSensitive=\"false\" then constraint ignores case.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "notMatchDictionary": {
            "name": "notMatchDictionary",
            "label": null,
            "description": "Field '___' must not match an entry in the dictionary.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "value",
                    "label": null,
                    "description": "Value to test against - used in some checks, but not all.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "notWithinTolerance": {
            "name": "notWithinTolerance",
            "label": null,
            "description": "The field is not within the set tolerance level. ",
            "requiredAttributes": [],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The referenced field should be within this tolerance level.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "numCharacters": {
            "name": "numCharacters",
            "label": null,
            "description": "Field '___' must have exactly ___ characters. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is exact number of characters that the referenced field should have.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "numberFormat": {
            "name": "numberFormat",
            "label": null,
            "description": "Fields must be real numbers.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "value",
                    "label": null,
                    "description": "Value to test against - used in some checks, but not all.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "numberNonBlank": {
            "name": "numberNonBlank",
            "label": null,
            "description": "The specified number of fields within a list of fields that must be non-blank.\n    ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The number of fields that should be non-blank.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "or": {
            "name": "or",
            "label": null,
            "description": "At least one field in the \"fields\" attribute must not be blank. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Optional - Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this..",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Optional - used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "Optional - The lookup to application resources to find a custom error message..",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "plausibleEmail": {
            "name": "plausibleEmail",
            "label": null,
            "description": "Entered email must be a plausible email address.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "regexp": {
            "name": "regexp",
            "label": null,
            "description": "Field(s) must contain string that match with the regular expression",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The regular expression that the referenced field(s) should match with.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "reverseDateOrder": {
            "name": "reverseDateOrder",
            "label": null,
            "description": "Dates must be in reverse order of occurrence. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Select the fields in the order in which they must occur from latest to earliest date. If a date can occur on the same date, those fields can be one after the other on the list.\n        In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "startsWith": {
            "name": "startsWith",
            "label": null,
            "description": "The listed field(s) must start with the specified value.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The referenced field(s) must start with these characters.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "caseSensitive",
                    "label": null,
                    "description": "If caseSensitive=\"false\" then constraint ignores case.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "strictDateOrder": {
            "name": "strictDateOrder",
            "label": null,
            "description": "Dates must be in strict order, with no dates equal or overlapping. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Select the fields in the order in which they must occur from earliest to latest date. No date can occur on the same date.\n        In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "strictReverseDateOrder": {
            "name": "strictReverseDateOrder",
            "label": null,
            "description": "Dates must be in reverse order, with no dates equal or overlapping.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Select the fields in the order in which they must occur from latest to earliest date. No date can occur on the same date.\n        In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "strictlyDecreasing": {
            "name": "strictlyDecreasing",
            "label": null,
            "description": "Fields must be in strictly decreasing order.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "These numeric or integer fields that should be in strictly decreasing order (i.e. each field should be strictly less than the field preceding it within this list). In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "strictlyIncreasing": {
            "name": "strictlyIncreasing",
            "label": null,
            "description": "Fields must be in strictly increasing order.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "These numeric or integer fields that should be in strictly increasing order (i.e. each field should be strictly greater than the field preceding it within this list). In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "timeDecreasing": {
            "name": "timeDecreasing",
            "label": null,
            "description": "Times entered must be in decreasing order. If using date/time together, please use the reverseDateOrder constraint.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "These time fields must be in decreasing order (i.e. each time field should be on or after the time field preceding it within this list). In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "timeFormat": {
            "name": "timeFormat",
            "label": null,
            "description": "The field entry must be in the standard study format. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "value",
                    "label": null,
                    "description": "This is the time format to use. Use \"HH:mm z\" for 24 hour clock, \"hh:mm a z\" for 12 hour clock, and for hours off zulu use a capital Z.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "timeIncreasing": {
            "name": "timeIncreasing",
            "label": null,
            "description": "Times entered must be in increasing order. If using date/time together, please use the dateOrder constraint.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "These time fields must be in increasing order (i.e. each time field should be on or before the time field preceding it within this list). In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "timeStrictlyDecreasing": {
            "name": "timeStrictlyDecreasing",
            "label": null,
            "description": "Times entered must be in strictly decreasing order with no matching times. If using date/time together, please use the strictReverseDateOrder constraint.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "These time fields must be in strictly decreasing order (i.e. each time field should be strictly after the time field preceding it within this list). In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "timeStrictlyIncreasing": {
            "name": "timeStrictlyIncreasing",
            "label": null,
            "description": "Times entered must be in strictly increasing order with no matching times. If using date/time together, please use the strictDateOrder constraint. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "These time fields must be in strictly increasing order (i.e. each time field should be strictly before the time field preceding it within this list). In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "validPatientId": {
            "name": "validPatientId",
            "label": null,
            "description": "Fields listed in fields=\"..\" must have values that, if not blank, must\n      match one of the patients amongst a population. That population is defined by scope \n      of this constraint, or a provided population=\"..\" bean passed in the session/page scope\n      like is done for jsp files.  Without the provided population=\"..\", if this constraint\n      is on a patient form, then must match the patient formOwner.  If on a site form, then\n      that sites patients.  And if on a study form, then that studies' patients (all assigned sites).\n    ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "velocity": {
            "name": "velocity",
            "label": null,
            "description": null,
            "requiredAttributes": [],
            "optionalAttributes": []
        },
        "vm": {
            "name": "vm",
            "label": null,
            "description": null,
            "requiredAttributes": [],
            "optionalAttributes": []
        },
        "weekday": {
            "name": "weekday",
            "label": null,
            "description": "Field(s) must be a weekday date.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed date fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "withinTolerance": {
            "name": "withinTolerance",
            "label": null,
            "description": "Fields must be within a certain factor of each other. ",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Two numeric or integer fields for which to determine the tolerance. Start typing the field name to select it from the drop down list.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The referenced field should be within this tolerace level.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "xor": {
            "name": "xor",
            "label": null,
            "description": "One and only one field must be filled in.",
            "requiredAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The constraint will apply to these listed fields. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Used to insert a string into the error message at position 3.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "Optional - not used but can be entered to give something of a comment to this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorMsg",
                    "label": null,
                    "description": "The lookup to application resources to find a custom error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "errorHandle",
                    "label": null,
                    "description": "error or warning",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValue",
                    "label": null,
                    "description": "Used to provide the value of the first field in place of value= in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useLiteralForFieldName",
                    "label": null,
                    "description": "Used to provide the literal text for the error fields in the error message.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "useFieldValueForName",
                    "label": null,
                    "description": "Used to display the value of the field instead of the name in the error message when generating for each field.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        }
    },
    "calcs": {
        "DBLookupAtcPaths": {
            "name": "DBLookupAtcPaths",
            "label": null,
            "description": "Sets a calculatedField to a referenced field in an ATC dictionary.  Example:\n      calculatedField=\"atc_code2\" db=\"VetAtcTermsByCode\" fields=\"preferred_code\" autoIndex=\"true\" customArg=\"Code2\".",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "addCalendarEvent": {
            "name": "addCalendarEvent",
            "label": null,
            "description": "Add a calendar event -- it will appear on the dashboard calendar.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results (i.e. indicate the event was added to the calendar).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "date",
                    "label": null,
                    "description": "This is the event date. May be a reference date field.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "title",
                    "label": null,
                    "description": "This is the title of the event as it will appear in the calendar.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "description",
                    "label": null,
                    "description": "This is additional information about the event. It will be available when the event is clicked/expanded.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "formOwner",
                    "label": null,
                    "description": "\n        The owner which this event will belong to. For example, if it is set to ${theSite}, it will belong to the site, and be visible to users assigned to that site.\n        If it is set to ${theStudy}, it will be visible to users assigned to the study.  If left unused, the current owner is assumed.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "formName",
                    "label": null,
                    "description": "(optional) The name of a form associated with this event.  If provided, the calendar will use this for the 'go to form' option.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "roles",
                    "label": null,
                    "description": "Indicate the roles that should see this event by entering the role codes, e.g. ICT02.  If left blank, all roles will see the event.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "eventType",
                    "label": null,
                    "description": "Describes the type of event as \"subject\", \"site\", \"study\", \"task\" or \"personal event\" (case sensitive).",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "showTime",
                    "label": null,
                    "description": "Determines whether the time of the event will be shown.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "addUserTask": {
            "name": "addUserTask",
            "label": null,
            "description": "Add a task for a user -- it will appear on the dashboard calendar.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "date",
                    "label": null,
                    "description": "Date in which the task is due.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "title",
                    "label": null,
                    "description": "Title of the task.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "description",
                    "label": null,
                    "description": "Notes or description related to the task.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "userId",
                    "label": null,
                    "description": "The unique id of the user to add the task to -- looked up from study user list.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "formName",
                    "label": null,
                    "description": "(optional) The name of a form associated with this event.  If provided, the calendar will use this for the 'go to form' option.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "age": {
            "name": "age",
            "label": null,
            "description": "Provides a generic way of determining the elapsed time between two dates in months or years.  Two fields with dates are required in the 'fields' attribute.  ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "Two date fields are required for this calculation type (example: entering the date of birth and consent date fields will result in the number of months or years between these two dates - i.e. the subject's age at consent). In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "monthsOrYears",
                    "label": null,
                    "description": "Designates if you want the elapsed time between the two dates to be calculated in months or years.",
                    "required": true,
                    "inputType": "options",
                    "inputOptions": [
                        "months",
                        "years"
                    ]
                }
            ],
            "optionalAttributes": [
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "ageAt": {
            "name": "ageAt",
            "label": null,
            "description": "Calculate a patient's age at a specified date",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "ageAtInMonths": {
            "name": "ageAtInMonths",
            "label": null,
            "description": "Find the age of a patient at a given date in months.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "ageAtInYrsMths": {
            "name": "ageAtInYrsMths",
            "label": null,
            "description": "Find the age of a patient at a given date in years and months.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order (e.g., consent date and date of birth). In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "arithmetic": {
            "name": "arithmetic",
            "label": null,
            "description": "\n      Used to calculate a combination of fields and numbers.\n      An expression may add, subtract, multiply, and/or divide (+, -, *, /) numeric values.\n      Order of operations can be specified using parentheses.\n      [Sample 1: calculatedField=\"age_months\", expression=\"(age_years*12)+approximate_months\"].\n      [Sample 2: calculatedField=\"calculated_dose\", expression=\"(mg_dose/weight)*2.5\", decimals=\"1\"].\n      For Study Builder, please contact your Prelude Project Manager for support.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "expression",
                    "label": null,
                    "description": "A mathematical phrase that can contain ordinary numbers, field names, and operators.\n        Example: If the form has fields = \"length\", \"width\", and \"height\", then expression=\"(length*width*height)*0.5\" would give you half of the volume of a rectangular prism.\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "cancelNotification": {
            "name": "cancelNotification",
            "label": null,
            "description": "Cancel a pending or notifyLater notification. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results. Results for cancelNotifcation include \"cancelled\" or \"already sent\".",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "concatenate": {
            "name": "concatenate",
            "label": null,
            "description": "\n      Conjoins multiple field values into one value with each field value separated by a specified character (delimiter).\n      Example:  calculatedField=\"patient_name\" delimiter=\" \" fields=\"dog_name,owner_last_name\" would give the result patient_name=\"value(dog_name) value(owner_last_name).\"\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "delimiter",
                    "label": null,
                    "description": "Character used to separate each of the fields. This could be a hyphen, space, semicolon, etc. Note: Space may not appear visible within this attribute.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "case",
                    "label": null,
                    "description": "Use if you would like the calculateField to be converted to all upper case or all lower case. Enter \"upper\" or \"lower\" to specify case.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "concatenateDate": {
            "name": "concatenateDate",
            "label": null,
            "description": "Sets a calculatedField to a concatenation of a date field and a time field using the study default date/time format.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "\n        Select a date fields followed by a time field. If the second field represents hours, then a third field should be selected that represents minutes.\n        In Study Builder, start typing each field name to select the applicable field(s).\n      ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "pattern",
                    "label": null,
                    "description": "Used for date and time formatting. For Study Builder, please leave this attribute blank.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "studyFormat",
                    "label": null,
                    "description": "Used to pull the study level date and time format. For Study Builder, please leave this attribute blank.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "copyFormFromStudy": {
            "name": "copyFormFromStudy",
            "label": null,
            "description": null,
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "The name of the field that the calculation result will populate.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "lookupForm",
                    "label": null,
                    "description": null,
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "lookupStudy",
                    "label": null,
                    "description": null,
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "keepCategory",
                    "label": null,
                    "description": "Optionally, keep this category (on the current form)",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "\n        Sets the order in which this calculation will run on this form.         \n        If blank, the priority will default to zero.        \n        On each form, the calculation with the lowest priority number will fire first, followed by the calculation with the next lowest priority number, and so on.\n      ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.        \n        Enter \"false\" to only run the calculation the first time the form is submitted. \n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "makeReadonly",
                    "label": null,
                    "description": "\n        Set the form to readonly after it's been copied.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "copyPatientFormsToStudy": {
            "name": "copyPatientFormsToStudy",
            "label": null,
            "description": "Copies specified subject level forms from one study to another. Please note: the site and patient will\n      be created if they do not already exist in the target study.\n      It is best to first copy (copySite calculation) the site from Study 1 to Study 2. Please contact your Prelude\n      Project Manager for support.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "studyNameNew",
                    "label": null,
                    "description": "Specify the target study's unique ID.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "listOfForms",
                    "label": null,
                    "description": "Provide a list of forms to use with this calculation. Form names should be in this format:\n        visit.1.form.name.physical.exam, and be separated by commas if copying more than one form. If listOfForms is\n        blank, the entire subject record will copy.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "targetFormNames",
                    "label": null,
                    "description": "Provide a list of target form names to use with this calculation. Form names should be in this\n        format: visit.1.form.name.physical.exam, and be separated by commas. Attribute can be blank if form names match\n        between studies, otherwise the amount of forms MUST be the same as in listOfForms attribute.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "copySite": {
            "name": "copySite",
            "label": null,
            "description": "Create a new site from one study to another, copying only the site demographics form. Please contact\n      your Prelude Project Manager for support.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Specify the target study's unique ID.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "roles",
                    "label": null,
                    "description": "Indicate the roles that should see this event by entering the role codes, e.g. ICT02.  If left blank, all roles will see the event.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "copyStudyForm": {
            "name": "copyStudyForm",
            "label": null,
            "description": "Copy a set of forms from one study to another",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Holds the name of the new study to receive the forms",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "forms",
                    "label": null,
                    "description": "List of forms to be copied - if blank, assumes current form only",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "count": {
            "name": "count",
            "label": null,
            "description": "Count the number of times a specified value occurs in a list of fields.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The value the field must equal to be included in the count.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "countBlankTableElementsWhereFieldEquals": {
            "name": "countBlankTableElementsWhereFieldEquals",
            "label": null,
            "description": "Count the number of blank values in a table where another field has a specified value. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to count if they are blank. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fieldToMatch",
                    "label": null,
                    "description": "Sets the field name to match in the table; only fields in the matching rows (where this field matches the valueToMatch) will be counted. ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "valueToMatch",
                    "label": null,
                    "description": "Sets the value that the fieldToMatch must match in the table; only fields in the matching rows (where the fieldToMatch matches this value) will be counted. ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "countNonBlank": {
            "name": "countNonBlank",
            "label": null,
            "description": "Count the number of non-blank values in a list of fields.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "countNonBlankTableElementsWhereFieldEquals": {
            "name": "countNonBlankTableElementsWhereFieldEquals",
            "label": null,
            "description": "Count the number of non-blank values in a table where another field has a specified value. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to count if they are blank. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fieldToMatch",
                    "label": null,
                    "description": "Sets the field name to match in the table; only fields in the matching rows (where this field matches the valueToMatch) will be counted. ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "valueToMatch",
                    "label": null,
                    "description": "Sets the value that the fieldToMatch must match in the table; only fields in the matching rows (where the fieldToMatch matches this value) will be counted. ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "countNonZero": {
            "name": "countNonZero",
            "label": null,
            "description": "Count the number of non-zero values.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "countOwnersWhereFieldIsEqual": {
            "name": "countOwnersWhereFieldIsEqual",
            "label": null,
            "description": "Counts the population where the defined field equals the defined value. Please contact your Prelude\n      Project Manager for support.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "The field to use in this calculation. In Study Builder, start typing each field name to select the\n        applicable field.\n      ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is the value to be used in this calculation.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Specify \"site\" or \"study\" to control if the counting is per site or study-wide.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "format",
                    "label": null,
                    "description": "Used to specify how the field information will be formatted.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "forms",
                    "label": null,
                    "description": "List of forms to be edit checked in priority order (required if no fields set).",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "countUnique": {
            "name": "countUnique",
            "label": null,
            "description": null,
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "createFormInstances": {
            "name": "createFormInstances",
            "label": null,
            "description": "Create instances of forms specified by a visit schedule on the study-level form form.name.patient/site.schedule.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the date/time this calculation was run.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "The set of form owners to run the edit checks for. If empty, then uses the current form owner.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "custom": {
            "name": "custom",
            "label": null,
            "description": "For Composer, please contact your Prelude Project Manager.",
            "requiredAttributes": [
                {
                    "name": "type",
                    "label": null,
                    "description": "Type of calculation, e.g. setValue, datePlusDays.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "attachments",
                    "label": null,
                    "description": "\n        Comma separated field names used in notification types that are emailed\n        to include the file that the field points to as an attachment to the email.\n        This attribute only makes sense in a type=\"notify\" and the fields only make\n        sense if they are filefields.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "icon",
                    "label": null,
                    "description": "Used to define an icon associated with notifications.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "postToSent",
                    "label": null,
                    "description": "Used to cause a Notify to be posted (if \"true\") to the sent items page - default \"false\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "alertPriority",
                    "label": null,
                    "description": "Used to define priority applied to notifications.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "delimiter",
                    "label": null,
                    "description": "Used in type=concatenate to know what delimiter to use between elements.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "pattern",
                    "label": null,
                    "description": "Used for date and time formatting. For Study Builder, please leave this attribute blank.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "studyFormat",
                    "label": null,
                    "description": "Used to pull the study level date and time format. For Study Builder, please leave this attribute blank.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "Field(s) to use in this calculation. In Study Builder, start typing each field name to select the applicable field(s). Can have special syntax to describe sets of fields.",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "This is the ID to use for this calculation.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "case",
                    "label": null,
                    "description": "Use if you would like the calculateField to be converted to all upper case or all lower case. Enter \"upper\" or \"lower\" to specify case.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is the value to be used in this calculation.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "expression",
                    "label": null,
                    "description": "This is the expression to be used in this calculation. Since it is custom, it can be a calculation (such as arithmetic) or text(like that used in a notification).",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "forms",
                    "label": null,
                    "description": "Used in set/reverting state and in moving fields to list the target forms.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "maximum",
                    "label": null,
                    "description": "This is the maximum possible value used in this calculation.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "format",
                    "label": null,
                    "description": "Used to specify how the field information will be formatted.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "variable",
                    "label": null,
                    "description": "",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "displayDateFormat",
                    "label": null,
                    "description": "",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "table",
                    "label": null,
                    "description": "The name of the form pulled from or pushed to.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "primaryKey",
                    "label": null,
                    "description": "To be used if the index (i) of the row on the site form is known.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "column",
                    "label": null,
                    "description": "The column on the site table where the value should be set.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "roles",
                    "label": null,
                    "description": "Enter the letter/number/character codes corresponding to the appropriate roles.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "url",
                    "label": null,
                    "description": "The URL to be used.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "replaceThis",
                    "label": null,
                    "description": "Used by the \"replace\" calculation to know what to replace.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "replaceWith",
                    "label": null,
                    "description": "Used by the \"replace\" calculation to know what to replace with.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "scope",
                    "label": null,
                    "description": "Used by notify to override the limit of sending notices only\n        to users that can see the form with the calculation. E.g., \"site\" sends to\n        all users who are assigned to the site that the notify comes from.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "startingNumber",
                    "label": null,
                    "description": "Used to specify the starting number for NextPatientNumber, e.g., 4000.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "suppressPrefixUrl",
                    "label": null,
                    "description": "Used to suppress the prefix of a notify message and the url beneath it.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "datePlusDays": {
            "name": "datePlusDays",
            "label": null,
            "description": "Adds a number of days to a date field.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "Specify one date field to be used with the \"variable\" attribute, or specify two fields here: one for\n        a date field and one that references a field that contains a number to add to that date field. In Study Builder,\n        start typing each field name to select the applicable field(s).\n      ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "variable",
                    "label": null,
                    "description": "The number of days that will be added to the date field specified in the \"fields\" attribute.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "datePlusHours": {
            "name": "datePlusHours",
            "label": null,
            "description": "\n      Adds a number of hours specified in the \"variable\" attribute to a concatenated date/time field.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "Specify one concatenated date/time field to use in this calculation. In Study Builder, start typing the field name to select the applicable field. (Use the calculation \"concatenateDate\" to create a concatenated date/time field.)",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "variable",
                    "label": null,
                    "description": "The number of hours that will be added to the date/time field specified in the \"fields\" attribute.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "datePlusMinutes": {
            "name": "datePlusMinutes",
            "label": null,
            "description": "\n      Adds a number of minutes specified in the \"variable\" attribute to a concatenated date/time field.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "Specify one concatenated date/time field to use in this calculation. In Study Builder, start typing each field name to select the applicable field(s). (Use the calculation \"concatenateDate\" to create a concatenated date/time field.)",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "variable",
                    "label": null,
                    "description": "The number of minutes that will be added to the date/time field specified in the \"fields\" attribute.\n        This can also reference a field name that contains the number of minutes.\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "datePlusMonths": {
            "name": "datePlusMonths",
            "label": null,
            "description": "\n      Adds a number of months specified in the \"variable\" attribute to a date field.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "Specify one date field to use in this calculation. In Study Builder, start typing the field name to select the applicable field.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "variable",
                    "label": null,
                    "description": "The number of months that will be added to the date field specified in the \"fields\" attribute.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "dayOfWeek": {
            "name": "dayOfWeek",
            "label": null,
            "description": "Sets the day of the week of the corresponding date.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the day of the week.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "This is the date field for which day of the week is desired. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "variable",
                    "label": null,
                    "description": "",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "daysBetween": {
            "name": "daysBetween",
            "label": null,
            "description": "Finds the number of days between two dates (not counting either of the two dates).",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "Select two date fields to specify a date range to use in this calculation (field entry order determines how the days will be counted). In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "keepSign",
                    "label": null,
                    "description": "\n        Set to \"true\" if the order of the two dates listed in the \"fields\" attribute matters (i.e. if the first date listed in \"fields\" falls after the second date listed in \"fields,\" then the calculatedField will have a negative value).\n        Set to \"false\" if the order of the two dates listed in the \"fields\" attribute does not matter (i.e. the calculatedField value will always be positive regardless of date order). Default is \"false\".\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "daysFromTo": {
            "name": "daysFromTo",
            "label": null,
            "description": "Finds the number of days from one date to another date (including the end date).",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "Select two date fields to specify a date range to use in this calculation (field entry order determines how the days will be counted). In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "keepSign",
                    "label": null,
                    "description": "\n        Set to \"true\" if the order of the two dates listed in the \"fields\" attribute matters (i.e. if the first date listed in \"fields\" falls after the second date listed in \"fields,\" then the calculatedField will have a negative value).\n        Set to \"false\" if the order of the two dates listed in the \"fields\" attribute does not matter (i.e. the calculatedField value will always be positive regardless of date order). Default is \"false\".\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "daysFromToFractional": {
            "name": "daysFromToFractional",
            "label": null,
            "description": "This method finds the number of days from one date to the next, including fractional parts of a day.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This field shows the number of days and fractional part of a day from one date (first field) to the next(second field)",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Designate two date/time concatenated fields to use in the calculation. The first field will be the starting date/time and the second will be the end date/time.\n        In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "studyFormat",
                    "label": null,
                    "description": "Used to pull the study level date and time format. For Study Builder, please leave this attribute blank.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "variable",
                    "label": null,
                    "description": "",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "dbLookup": {
            "name": "dbLookup",
            "label": null,
            "description": "Sets a calculatedField to a field in a dictionary.\n      Example: calculatedField=\"soc_code\" fields=\"low_level_term\" autoIndex=\"true\" db=\"VeDDRA\" customArg=\"SOC Key\".",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "dbLookupWhoAtcPaths": {
            "name": "dbLookupWhoAtcPaths",
            "label": null,
            "description": "Looks up the corresponding information in the WHO Database.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display results of looking up the given code in the dictionary.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "This is the code or text to look up. This corresponds to the database column heading. For example, Code 1, Text 1, etc.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "difference": {
            "name": "difference",
            "label": null,
            "description": "Subtract numeric field values.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "The first field should be the number from which the subsequent numeric or integer field(s) will be subtracted.\n        In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "duplicateStudyConfig": {
            "name": "duplicateStudyConfig",
            "label": null,
            "description": "Used only for Study Builder. Allows the creation of a duplicate study runtime config with a new name and unique ID.",
            "requiredAttributes": [
                {
                    "name": "newStudyName",
                    "label": null,
                    "description": null,
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "newStudyUID",
                    "label": null,
                    "description": "The unique ID assigned to a new study.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "clean",
                    "label": null,
                    "description": "Creates a clean instance of a Study Builder study.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "earliestDate": {
            "name": "earliestDate",
            "label": null,
            "description": "Find the earliest date from a list of dates.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field that will display the earliest date.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of date field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "pattern",
                    "label": null,
                    "description": "Used for date and time formatting. For Study Builder, please leave this attribute blank.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "studyFormat",
                    "label": null,
                    "description": "By default the date format is used. If time (24hr clock) is needed, please set this to: dd-MMM-yyyy HH:mm z. If time (12hr clock) is needed, please set to: dd-MMM-yyyy hh:mm a z.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "earliestDateAfter": {
            "name": "earliestDateAfter",
            "label": null,
            "description": "Finds the earliest of a set of dates that are after the first date.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This field will show the results of the earliest day after the reference date.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of date field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "pattern",
                    "label": null,
                    "description": "Used for date and time formatting. For Study Builder, please leave this attribute blank.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "studyFormat",
                    "label": null,
                    "description": "Used to pull the study level date and time format. For Study Builder, please leave this attribute blank.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "email": {
            "name": "email",
            "label": null,
            "description": "Send an email composed from text and fields to specified roles.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results. For email calculations, the calculatedField stores notification information such as the date and time the email was sent and the email recipients.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "expression",
                    "label": null,
                    "description": "\n        The text that will show in the email. If referencing a field, place a % sign in the expression message where the field should go.\n        Example: fields=\"patient_id,consent_date\" expression=\"Patient % consented on %.\" email result=\"Patient XX-### consented on 1/1/17.\"\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "roles",
                    "label": null,
                    "description": "Enter the single character role codes you would like to recieve this email. Alternatively, enter the specific email address(es) of those that should receive this message separated by a comma. Role codes can be found in Projects/Form Permissions.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. These fields will populate their order specific % sign within the \"expression\" attribute. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero.",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "exponential": {
            "name": "exponential",
            "label": null,
            "description": "\n      Calculates a field raised to the power of another field or specified exponent.\n      Either enter two fields (the first field being the base, the second field being the exponent) in the \"fields\" attribute, or enter one field in the \"fields attribute\" and set the exponent value in the \"exponent\" attribute.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "\n        Specify one numeric or integer field and specify the exponent value to use in the \"exponent\" attribute OR specify two numeric or integer fields (the first field will be the base and the second field be the exponent).\n        In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "exponent",
                    "label": null,
                    "description": "The explicit exponent value to raise a field value to if only one field was specified in the \"fields\" attribute. This should be a numeric or integer value.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "fileUploadParser": {
            "name": "fileUploadParser",
            "label": null,
            "description": "\n      This calculation reads an uploaded csv (comma separated values) file, and parses the file into an indexed (repeating) table.\n      For Study Builder, please contact your Prelude Project Manager for support.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results. The calculated field will be set once the csv file parses.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "This indicates the field that holds the uploaded file. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "cols",
                    "label": null,
                    "description": "\n        The database field names (valueKey) of fields for which the columns of the csv file being parsed, will be mapped to.\n        One can skip columns of the parsed file using extra commas (e.g., \"cols=a,b,c,,e,f,,,z\" will put columns 1-3 from the csv file into fields a,b,c. It will skip column 4, and put columns 5-6 into field e,f.\n        It will skip columns 7-8 and put column 9 into field z).\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "delimiter",
                    "label": null,
                    "description": "The delimiter to use for the parsing of each row into columns. Default is a comma (','). Must be a single character.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "uniqueKey",
                    "label": null,
                    "description": "\n        The database field name (valueKey) of the field for which the row data correspond;\n        must be one of the \"cols\", e.g., a,b,c,e,f, or z in the example for \"cols=\".\n        If present, it will search through the existing data to see if there's already a match, and update the data in the row.\n        This ensures there will be no duplicates. If the file has duplicates, there will be multiple updates to the same fields.\n        If not present, it will just append without checking (so should have a fieldChanged trigger).\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "skipHeaderRow",
                    "label": null,
                    "description": "\n        Determines whether the data begin on the top row, or the top row is a header row. \n        If false, the top row will be treated as a data row, like all the other rows.\n        If true, the top row will be skipped. Default is false. \n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "generateRandomNumber": {
            "name": "generateRandomNumber",
            "label": null,
            "description": "Sets the value in the calculatedField in range (default from 0 to 1)",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "from",
                    "label": null,
                    "description": "Number from which the random generation will go",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "to",
                    "label": null,
                    "description": "Number to which the random generation will go",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The value that will populate the calculatedField.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "format",
                    "label": null,
                    "description": "Used to specify how the field information will be formatted.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "hideForm": {
            "name": "hideForm",
            "label": null,
            "description": "Sets a form state for a list of forms. Typically used to suppress forms (i.e. set their form state to N/A). For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.  Results for hideForm is \"stateChange\".",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "forms",
                    "label": null,
                    "description": "This is the path to the form(s) for which the state will be set (Ex. visit.1.form.name.pe,visit.2.form.name.pe). ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "hoursMinFromTo": {
            "name": "hoursMinFromTo",
            "label": null,
            "description": "Calculates the hours:minutes from one concatenated date/time field to another concatenated date/time field.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "Select two concatenated date/time fields to use in this calculation. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "hrMinToNumber": {
            "name": "hrMinToNumber",
            "label": null,
            "description": "Converts hours:minutes to a number.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Enter a field that contains a value in hours:minutes format. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "incrementMaximum": {
            "name": "incrementMaximum",
            "label": null,
            "description": "",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "format",
                    "label": null,
                    "description": "Used to specify how the field information will be formatted.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "intervalContains": {
            "name": "intervalContains",
            "label": null,
            "description": "Compute whether the third value lies in an interval formed by the first two.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "Will show the results of the calculation. Specifically, it will show whether the third value lies in an interval formed by the two selected fields.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Select two numeric or integer fields to use to create an interval for use in this calculation. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "invokeRemoteEditChecksFor": {
            "name": "invokeRemoteEditChecksFor",
            "label": null,
            "description": "\n      Use the form and owner specified to look up the form and run it as if \"Run Edit Checks\" was pushed.  This\n      tag will NOT enter data, but will cause the form to be rendered and then all edit checks to be run.\n      For Study Builder, please contact your Prelude Project Manager for support.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "Return date/time this was run",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "forms",
                    "label": null,
                    "description": "List of forms to be edit checked in priority order (required if no fields set)",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "The set of form owners to run the edit checks for. If empty, then uses the current form owner.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "processNewState",
                    "label": null,
                    "description": "Whether to process new forms; default is false",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "renderFormsOnly",
                    "label": null,
                    "description": "Whether to merely render the forms and not submit for edit checking; default is false",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "formOwners",
                    "label": null,
                    "description": null,
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "labOrder": {
            "name": "labOrder",
            "label": null,
            "description": "\n      Places a lab order based on the template provided (located in the study's WEB-INF folder), performing string replacement based on the values in the orderMap.\n      The result is sent to the email address or URL provided by sendTo, and a CC is sent to the email address provided by the ccAddress attribute.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "templateFileName",
                    "label": null,
                    "description": "The name of the VM template file (located in the root study WEB-INF folder)",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "orderMap",
                    "label": null,
                    "description": "A hashmap of name value pairs which will be inserted into the template.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "labTestCategory",
                    "label": null,
                    "description": "An indexed category that contains a list of test to be performed.  Expects fields 'test_code()' and 'test_notes()' to be present.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "settingsFileName",
                    "label": null,
                    "description": "The name of a file that contains API access credentials and other settings in a JSON format. Should be in the same folder as the template file. (located in the root study WEB-INF folder)",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "receiptFileField",
                    "label": null,
                    "description": "A file field to store a copy of the receipt for APIs that support a receipt.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "latestDate": {
            "name": "latestDate",
            "label": null,
            "description": "Find the latest (most recent) date from a list of dates.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of date field(s) to use in this calculation. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "studyFormat",
                    "label": null,
                    "description": "By default the date format is used. If time (24hr clock) is needed, please set this to: dd-MMM-yyyy HH:mm z. If time (12hr clock) is needed, please set to: dd-MMM-yyyy hh:mm a z.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "latestDateBefore": {
            "name": "latestDateBefore",
            "label": null,
            "description": "Finds the latest (most recent) date of a set of dates that falls before the first date entered into the \"fields\" attribute. If the \"variable\" attribute has a field name, then this calculation will instead pull this field's value that is associated with the calculated latest date.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of date field(s) to use in this calculation. Note: The first date field entered will be the date that all other date fields in the list are compared to. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "variable",
                    "label": null,
                    "description": "A field on the corresponding date's form. The calculation will look for the latest date before the first date\n        listed in 'fields' and will return this field's corresponding value.\n        Leave blank if you would like to populate the calculatedField with the latest date (listed in 'fields').\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "\n        Set to the word \"blank\" if you want to consider dates where the reference field (field name in variable) is blank; otherwise, it will skip those forms\n        (e.g., the calculatedField will be blank if the reference field that meets the latest date criteria is blank).\n        Set to a value if you want to consider dates where the reference field (field name in variable) does NOT equal that value\n        (e.g., if the reference field (field name in variable) has values that could be Yes/No/NA, and customArg is set to \"No\", this calculation will return the value for the appropriate date that is not equal to \"No\").\n        This attribute should only be used if the \"variable\" attribute is not blank.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "linearComb": {
            "name": "linearComb",
            "label": null,
            "description": "\n      Calculates a linear combination (ax + b), where x is a field, and a and b are real numbers.\n      [Example: Converting from celsius to fahrenheit: calculatedField=\"temperature_fahrenheit\" fields=\"temperature_celsius\" expression=\"1.8x+32\"]\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of numeric or integer field(s) to use in this calculation. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "expression",
                    "label": null,
                    "description": "Should be in the form: ax+b where \"a\" and \"b\" are numbers and \"x\" is a field (specified in the \"fields\" attribute). Example: 1.8x+32.\n        Note: If only ax is needed, it must still read ax+0 in order for the calculation to run.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "lookupGet": {
            "name": "lookupGet",
            "label": null,
            "description": "Interprets a far-away indexed category as a key-value lookup table. Returns the found field text.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "categoryPath",
                    "label": null,
                    "description": "\n        The velocity-markup path to an indexed category *anywhere* on the server, such as\n        $study.form(\"inventory\").category(\"patient_vial_lookup\")\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "keyColumn",
                    "label": null,
                    "description": "Basename of the key fields, such as \"vial_number\"",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "keyTarget",
                    "label": null,
                    "description": "The text being searched for in the keyColumn, such as vial_number \"7111\", which determines the valueRow",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "valueColumn",
                    "label": null,
                    "description": "Basename of the value fields, such as \"patient_id\".",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "lookupSet": {
            "name": "lookupSet",
            "label": null,
            "description": "Interprets a far-away indexed category as a key-value lookup table. Loads the found field.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "categoryPath",
                    "label": null,
                    "description": "\n        The velocity-markup path to an indexed category *anywhere* on the server, such as\n        $study.form(\"inventory\").category(\"patient_vial_lookup\")\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "keyColumn",
                    "label": null,
                    "description": "Basename of the key fields, such as \"vial_number\"",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "keyTarget",
                    "label": null,
                    "description": "The text being searched for in the keyColumn, such as vial_number \"7111\", which determines the valueRow.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "valueColumn",
                    "label": null,
                    "description": "Basename of the value fields, such as \"patient_id\", will return the patient_id[valueRow].",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "valueText",
                    "label": null,
                    "description": "After the value field is found---in the valueColumn and valueRow---it will be loaded with valueText.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "maximum": {
            "name": "maximum",
            "label": null,
            "description": "Find the largest value in a list of fields.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "maximumMagnitude": {
            "name": "maximumMagnitude",
            "label": null,
            "description": "Find the largest of the absolute values.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field that will display the larges of the absolute values.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "mean": {
            "name": "mean",
            "label": null,
            "description": "Finds the average value of a list of numeric fields specified in the \"fields\" attribute.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of integer or numeric field(s) to use in this calculation. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "minFromTo": {
            "name": "minFromTo",
            "label": null,
            "description": "Calculates the minutes from one concatenated date/time field to another concatenated date/time field.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "Select two concatenated date/time fields to use in this calculation. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "minimum": {
            "name": "minimum",
            "label": null,
            "description": "Find the smallest value in a list of fields.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "moveDataToPenForm": {
            "name": "moveDataToPenForm",
            "label": null,
            "description": "\n      Copies the data from a site form into the corresponding indexed category on the patient (pen) form\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "\n        This merely sets the value to \"done\"\n      ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "categoryToSet",
                    "label": null,
                    "description": "\n        The indexed category name on the pen form to post the values onto\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "penForm",
                    "label": null,
                    "description": "\n        The pen form name to post the values onto\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "\n        The non-indexed fields to copy\n      ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fieldToMatch",
                    "label": null,
                    "description": "Sets the field name to match in the table; only fields in the matching rows (where this field matches the valueToMatch) will be pushed down. ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "valueToMatch",
                    "label": null,
                    "description": "Sets the value that the fieldToMatch must match in the table; only fields in the matching rows (where the fieldToMatch matches this value) will be pushed down. ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "The list of indexed fields to copy",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "attributeToUser",
                    "label": null,
                    "description": "Determines whether the calculated field (in the audit trail) will be attributed to the system calculation ('set from calculation') or\n        be attributed to the user that triggered that calculation. The default is 'false' which will set the entry to 'set from calculation'.\n        If 'true', then the entry will be attributed to the logged in user who triggered the calculation.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "moveField": {
            "name": "moveField",
            "label": null,
            "description": "Move a field from one form to another.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "forms",
                    "label": null,
                    "description": "List of forms to be edit checked in priority order (required if no fields set)",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "movePatient": {
            "name": "movePatient",
            "label": null,
            "description": "Move entire current patient to the site with the uniqueId described by the field named in the \"fields\".",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "nextPatientNumber": {
            "name": "nextPatientNumber",
            "label": null,
            "description": "Finds and returns the next subject number by examining the already existing subject number values in the \"calculatedField\" attribute. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Designate \"site\" or \"study\" for either site-based or study-wide numbering.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "startingNumber",
                    "label": null,
                    "description": "This is the starting number to begin the numbering of subjects, not including this number (Ex. if \"startingNumber\" is 299, then the first case will be assigned number 300).",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "format",
                    "label": null,
                    "description": "Used to specify how the field information will be formatted (Ex. 00 or 000 or <%=randomizationNumberFormat%>)",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "notify": {
            "name": "notify",
            "label": null,
            "description": "Sends a formatted email notification to one or more recipients composed from text and fields.\n      For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results. For notify calculations, the calulatedField stores notification information such as the date and time the email was sent and the email recipients.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "expression",
                    "label": null,
                    "description": "\n        The text that will show in the email. If referencing a field, place a % sign in the expression message where the field should go.\n        Example: fields=\"patient_id,consent_date\" expression=\"Patient % consented on %.\" email result=\"Patient XX-### consented on 1/1/17.\"\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "roles",
                    "label": null,
                    "description": "\n        Enter the single character role codes you would like to recieve this email. Alternatively, enter the specific email address(es) of those that should receive this message separated by a comma. Role codes can be found in Projects/Form Permissions.\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. These fields will populate their order specific % sign within the \"expression\" attribute. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "This is the subject line to use for the email notification.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "postToSent",
                    "label": null,
                    "description": "Setting this to \"true\" will post this notification to the Project Level Notifications Sent form. Default is false.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "alertPriority",
                    "label": null,
                    "description": "Set to \"high\" for high priority notifications.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "suppressPrefixUrl",
                    "label": null,
                    "description": "Used to suppress the prefix of a notify message and the url beneath it.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "scope",
                    "label": null,
                    "description": "Used by notify to override the limit of sending notices only\n        to users that can see the form with the calculation (e.g. \"site\" sends to\n        all users who are assigned to the site that the notify comes from regardless if the role can see the form that the \"notify\" calculation is on).\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "attachments",
                    "label": null,
                    "description": "\n        The referenced field(s) must be a file upload field.\n        The files within the associated field in this list will be included as an attachment to the email.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "notifyLater": {
            "name": "notifyLater",
            "label": null,
            "description": "Notify and email users of a specific event on a specified future date. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results. For notifyLater calculations, the calulatedField stores notification information such as the date and time the email was sent and the email recipients.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "expression",
                    "label": null,
                    "description": "\n        The text that will show in the email. If referencing a field, place a % sign in the expression message where the field should go.\n        Example: fields=\"patient_id,consent_date\" expression=\"Patient % consented on %.\" email result=\"Patient XX-### consented on 1/1/17.\"\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "roles",
                    "label": null,
                    "description": "\n        Enter the single character role codes you would like to recieve this email. Alternatively, enter the specific email address(es) of those that should receive this message separated by a comma. Role codes can be found in Projects/Form Permissions.\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "variable",
                    "label": null,
                    "description": "This is the future date field when the notification will be sent.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. These fields will populate their order specific % sign within the \"expression\" attribute. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "This is the subject line to use for the email notification.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "alertPriority",
                    "label": null,
                    "description": "Set to \"high\" for high priority notifications.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "postToSent",
                    "label": null,
                    "description": "Setting this to \"true\" will post this notification to the Project Level Notifications Sent form. Default is false. For Study Builder, please leave blank.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "pairDevice": {
            "name": "pairDevice",
            "label": null,
            "description": "Associate the selected device in this users session.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "Return date/time this was run.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "percentChange": {
            "name": "percentChange",
            "label": null,
            "description": "Calculate % change between 2 fields.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "product": {
            "name": "product",
            "label": null,
            "description": "Multiply numeric field values.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of numeric or integer field(s) to use in this calculation. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "publishForm": {
            "name": "publishForm",
            "label": null,
            "description": "Creates a jsp based on specifications.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "folderType",
                    "label": null,
                    "description": "Set to patient, site, user, or study to put the jsp in that folder.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "One field, whose value (+\".jsp\") is used as the name of the jsp to create",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "\n        Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero.\n      ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "fileType",
                    "label": null,
                    "description": "Name of the field that holds whether to build normal jsp or with file uploader.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "pushDownSiteToPatient": {
            "name": "pushDownSiteToPatient",
            "label": null,
            "description": "\n      Copies field data from a site form onto a patient form. Note that this calculation\n      expects a particular form format in order to work correctly. More specifically,\n      the site form must have an indexed category (repeating table) where each row\n      defines which data to copy and where to copy to. This table is known as a push-down\n      table. Please see the knowlege base for more\n    ",
            "requiredAttributes": [
                {
                    "name": "patientFormName",
                    "label": null,
                    "description": "\n        The name of the patient form that data will be pushed down towards\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "patientCategoryName",
                    "label": null,
                    "description": "\n        The name of the patient category that data will be pushed down towards\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "patientIdFieldName",
                    "label": null,
                    "description": "\n        Refers to the name of the indexed field in the push-down table that\n        defines the id of the patient that data will be copied to\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "\n        Refers to the indexed field in the push-down table that indicates the completion\n        of this calculation. Note that this calculation can be set up to conditionally\n        fire by using the 'fieldToMatch' and 'valueToMatch' attributes\n      ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fieldToMatch",
                    "label": null,
                    "description": "Sets the field name to match in the table; only fields in the matching rows (where this field matches the valueToMatch) will be pushed down. ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "valueToMatch",
                    "label": null,
                    "description": "Sets the value that the fieldToMatch must match in the table; only fields in the matching rows (where the fieldToMatch matches this value) will be pushed down. ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "\n        Defines the fields on the site form that will be copied to the patient form.\n        Indexed and/or non-indexed fields may be used, but all indexed fields must exist\n        in the push-down table\n      ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "Not used in calculation",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "attributeToUser",
                    "label": null,
                    "description": "Determines whether the calculated field (in the audit trail) will be attributed to the system calculation ('set from calculation') or\n        be attributed to the user that triggered that calculation. The default is 'false' which will set the entry to 'set from calculation'.\n        If 'true', then the entry will be attributed to the logged in user who triggered the calculation.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "quotient": {
            "name": "quotient",
            "label": null,
            "description": "Divides numeric field values.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of numeric or integer field(s) to use in this calculation. The first field listed will be the dividend (numerator) and the second field listed will be the divisor (denominator). In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "renderJsp": {
            "name": "renderJsp",
            "label": null,
            "description": "\n      Uses the form and owner specified to look up the jsp\n      and add its categories and fields to Vision\n      as if it had been rendered.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "Return date/time this was run",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "forms",
                    "label": null,
                    "description": "List of forms to be edit checked in priority order (required if no fields set).",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "The set of form owners for which to run the edit checks. If empty, then uses the current form owner.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "processNewState",
                    "label": null,
                    "description": "Process forms that are in the new state.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "formOwners",
                    "label": null,
                    "description": null,
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "revertFromNAState": {
            "name": "revertFromNAState",
            "label": null,
            "description": "This calculations is used to make a form reappear after its state was set to NA. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results. Results for revertFromNAState is \"RevertState\".",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "forms",
                    "label": null,
                    "description": "This is the path to the form(s) for which the state will be set (Ex. visit.1.form.name.pe, visit.2.form.name.pe). ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "value",
                    "label": null,
                    "description": "This must be exactly this: <%=com.perceptivec.form.Form.STATE_NOT_APPLICABLE%>",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "roundUp": {
            "name": "roundUp",
            "label": null,
            "description": "This calculation rounds up a number from the designated field.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is where the rounded up number will be displayed.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Designate one field to round up.",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "scriptlet": {
            "name": "scriptlet",
            "label": null,
            "description": "Runs the Calculation object defined in a java scriptlet and loaded into the Calculation.SCRIPTLET field.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "sendDeviceNotification": {
            "name": "sendDeviceNotification",
            "label": null,
            "description": "Sets the designated calculatedField to a field or value.",
            "requiredAttributes": [
                {
                    "name": "notificationTitle",
                    "label": null,
                    "description": "Title of notification that will be sent.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "notificationBody",
                    "label": null,
                    "description": "Body of notification that will be sent.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "The name of the field to put the result text.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "firebaseToken",
                    "label": null,
                    "description": "The device firebase auth token to use for sending the device notification.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setBlank": {
            "name": "setBlank",
            "label": null,
            "description": "Sets the calculatedField to blank.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will be set to blank.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setDateTime": {
            "name": "setDateTime",
            "label": null,
            "description": "Sets the current date/time. This calculation is usually triggered when a certain field(s) is not blank or equals a certain value. For example, automatically set a field to the date/time that a subject was dosed after the dosing field is filled in and the form is saved.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results (the date/time a specified field is set).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "studyFormat",
                    "label": null,
                    "description": "Used to pull the study level date and time format. For Study Builder, please leave this attribute blank.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "format",
                    "label": null,
                    "description": "Used to specify how the field information will be formatted.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setFromFieldLookup": {
            "name": "setFromFieldLookup",
            "label": null,
            "description": "Performs a lookup based on a field. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "The name of the field to lookup. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "lookupForm",
                    "label": null,
                    "description": "The name of the form to be used in the lookup.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "lookupField",
                    "label": null,
                    "description": "The name of the field to lookup.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setFromPatientLookup": {
            "name": "setFromPatientLookup",
            "label": null,
            "description": "Performs a lookup based on a table defined for a subject. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "primaryKey",
                    "label": null,
                    "description": "To be used if the index (i) of the row on the site form is known.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "column",
                    "label": null,
                    "description": "The column on the site table where the value should be set.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "table",
                    "label": null,
                    "description": "This is the path to the form at the site level which contains the field to be set (Ex. inventory.form.name.inventory). ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setFromSiteLookup": {
            "name": "setFromSiteLookup",
            "label": null,
            "description": "\n      Set a field to the value found in a \"table\" (form with an indexed (repeating) category) at the Site level. The keyColumn is the name of the valueKey which identifies the indexed row.\n      The attribute valueColumn is the name of the valueKey which identifies the column which contains the actual value that is being requested.  The \"key\" attribute is a field on the current form\n      which identifies the row to look up.\n      <p>\n      <br>For example:\n      <br>| key | value |\n      <br>---------------\n      <br>|  1  |   3   |\n      <br>|  B  |   6   |\n      <br>|  4  |  ABC  |\n      <br>|  3  |  316  |\n      <br>---------------\n      <p>\n      The above table represents an indexed (repeating) category containing the fields 'key' and 'value'.  Given keyColumn=\"key\" valueColumn=\"value\" key=\"fieldWithKey\", if the local field 'fieldWithKey'\n      is set to '4', the resulting calculated value would be 'ABC'.  Given 'B' the return value would be '6'.  There is no limit to the number of rows or columns.\n      For Study Builder, please contact your Prelude Project Manager for support.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results. Generally a hidden field called set_date_time is used as the field name for this calculation because the result is the date and time this calculation runs.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "table",
                    "label": null,
                    "description": "The name of the form at the site level which contains the table.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation. This field's value will populate a field/column on the designated site form. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "keyColumn",
                    "label": null,
                    "description": "The base name of the field representing the key column.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "valueColumn",
                    "label": null,
                    "description": "The base name of the field representing the value column.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "target",
                    "label": null,
                    "description": "The local field which identifies the text to find in the keyColumn.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "keyField",
                    "label": null,
                    "description": "Deprecated name for target.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "primaryKey",
                    "label": null,
                    "description": "Deprecated base name of the field representing the key column.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "column",
                    "label": null,
                    "description": "Deprecated base name of the field representing the value column.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setFromStudyLookup": {
            "name": "setFromStudyLookup",
            "label": null,
            "description": "\n      Set a field to the value found in a \"table\" (Form with an indexed (repeating) category) at the Study level. The keyColumn is the name of the valueKey which identifies the indexed row.\n      The attribute valueColumn is the name of the valueKey which identifies the column which contains the actual value that is being requested.  The \"key\" attribute is a field on the current form\n      which identifies the row to look up.  \\n\\n\n\n      For example:\\n\n      | key | value |\\n\n      ---------------\\n\n      |  1  |   3   |\\n\n      |  B  |   6   |\\n\n      |  4  |  ABC  |\\n\n      |  3  |  316  |\\n\n      ---------------\\n\n      \\n\n      The above table represents an indexed (repeating) category containing the fields 'key' and 'value'.  Given keyColumn=\"key\" valueColumn=\"value\" key=\"fieldWithKey\", if the local field 'fieldWithKey'\n      is set to '4', the resulting calculated value would be 'ABC'.  Given 'B' the return value would be '6'.  There is no limit to the number of rows or columns.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "keyColumn",
                    "label": null,
                    "description": "The base name of the field representing the key column.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "valueColumn",
                    "label": null,
                    "description": "The base name of the field representing the value column.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "keyField",
                    "label": null,
                    "description": "The local field which identifies the row being requested.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "table",
                    "label": null,
                    "description": "The name of the form at the study level which contains the table.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setFromUserLookup": {
            "name": "setFromUserLookup",
            "label": null,
            "description": "Performs a lookup based on a table defined for a User.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "matchColumn",
                    "label": null,
                    "description": "To be used if the index of the row on the site form is unknown.  Must be used in conjunction with matchFieldValue (most common) or matchValue.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "setColumn",
                    "label": null,
                    "description": "The column on the site table where the value should be set.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "matchFieldValue",
                    "label": null,
                    "description": "Used when the index on the site form is not known, but the value in one of the columns is known.  Matches the value of a field on the current form to a field in matchColumn on the site form. This one is most frequently used over using MatchValue.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "matchValue",
                    "label": null,
                    "description": "Used when the index is not known, but the value to match on the site form is known (this option will probably only be used in conjuction with a custom scriptlet. For most cases, use matchFieldValue).",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "setFieldValue",
                    "label": null,
                    "description": "A field on the current form which contains the value to set on the site form.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "setValue",
                    "label": null,
                    "description": "Used if the value to set is known, bypasses the 'setFieldAttribute' attribute.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "matchIndex",
                    "label": null,
                    "description": "To be used if the index (i) of the row on the site form is known. Use either matchIndex or Primary Key but not both.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "primaryKey",
                    "label": null,
                    "description": "To be used if the index (i) of the row on the site form is known. Use either matchIndex or Primary Key but not both.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "column",
                    "label": null,
                    "description": "The column on the site table where the value should be set.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "table",
                    "label": null,
                    "description": "The table to be used for this calculation.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setLastModifiedBy": {
            "name": "setLastModifiedBy",
            "label": null,
            "description": "Sets a field value to the user's name who last modified the form or specified field(s).",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation. If a user modifies a field in this list, the field in the \"calculatedField\" attribute will be set to this user's name. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setLastModifiedRole": {
            "name": "setLastModifiedRole",
            "label": null,
            "description": "Sets a field value to the role of the user who last modified the form or specified field(s).",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation. If a user modifies a field in this list, the field in the \"calculatedField\" attribute will be set to this user's role. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setLastModifiedTime": {
            "name": "setLastModifiedTime",
            "label": null,
            "description": "Sets a field value to the time the form or specified field(s) was last modified.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation. When a field in this list is modified, the field in the \"calculatedField\" attribute will be set to the time of the modification. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setNameFromUniqueID": {
            "name": "setNameFromUniqueID",
            "label": null,
            "description": "Sets a designated calculatedField to the name corresponding to a given unique ID and type of owner.\n      Sample arguments: calculatedField=\"name_to_set\" fields=\"unique_ID\" ownerType=\"patient\" initializeBlank=\"false\".\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "ownerType",
                    "label": null,
                    "description": "Specify one of these owners: \"patient\", \"site\", or \"user\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "setRandomizationBlinding": {
            "name": "setRandomizationBlinding",
            "label": null,
            "description": "Sets the blinding of treatment_group and treatment_group_assigned from the settings form",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field that will be populated by the result of the calculation.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "Only one field is applicable and designates the roles that are NOT blinded",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "attributeToUser",
                    "label": null,
                    "description": "Determines whether the calculated field (in the audit trail) will be attributed to the system calculation ('set from calculation') or\n        be attributed to the user that triggered that calculation. The default is 'false' which will set the entry to 'set from calculation'.\n        If 'true', then the entry will be attributed to the logged in user who triggered the calculation.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setState": {
            "name": "setState",
            "label": null,
            "description": "Sets a form state for a list of forms. Typically used to suppress forms (i.e. set their form state to N/A). For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.  Results for setState is \"stateChanged\".",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "forms",
                    "label": null,
                    "description": "This is the path to the form(s) for which the state will be set (Ex. visit.1.form.name.pe, visit.2.form.name.pe). ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The value must be exactly this: <%=com.perceptivec.form.Form.STATE_NOT_APPLICABLE%>.\n        Note: \"STATE_NOT_APPLICABLE\" can be replaced with \"STATE_IN_WORK\", \"STATE_IN_REVIEW\", \"STATE_REVIEWED\", or \"STATE_FINAL\" depending on the desired form state.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setSurvey": {
            "name": "setSurvey",
            "label": null,
            "description": "\n      Adds or otherwise updates (some fields of) an ePRO survey for this subject.\n      Creates the survey based on a surveySpec form defined at the project level.\n\n      The calculated field is populated with the survey id of the generated\n      survey. For Study Builder, please contact your Prelude Project Manager for support.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "title",
                    "label": null,
                    "description": "Title of the survey that displays in the ePro app.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "specForm",
                    "label": null,
                    "description": "The database name of the project level spec form.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "answerForm",
                    "label": null,
                    "description": "The database form name containing the answers at the subject level.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "answerCategory",
                    "label": null,
                    "description": "Should be set to \"Answers\".",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "notificationTitle",
                    "label": null,
                    "description": "Title of the notification",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "answerRowIndex",
                    "label": null,
                    "description": "\n        For table-based surveys, set the row # that corresponds to this survey. (i.e., Daily Observations where each row corresponds to a day of data entry).\n        Ignored if 'isAlwaysAvailable' is set, as the answer row is automatically generated for each survey.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "isAlwaysAvailable",
                    "label": null,
                    "description": "Indicates whether the survey is always available.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "alwaysAvailablePosition",
                    "label": null,
                    "description": "For table-based surveys where isAlwaysAvailable=true, set the order in which the survey appears in the app. (i.e., '0' will make this survey appear first in the app).",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "makeAvailableDate",
                    "label": null,
                    "description": "The database field name that contains the date on which the survey will become available.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "makeUnavailableDate",
                    "label": null,
                    "description": "The database field name that contains the date on and after which the survey will no longer be requested to the end user.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setToSiteLookup": {
            "name": "setToSiteLookup",
            "label": null,
            "description": "\n      Sets a field value from a subject level form to a field in an indexed (repeating) table on a site level form. For Study Builder, please contact your Prelude Project Manager for support.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.  Generally a hidden field called set_date_time is used as the field name for this calculation because the result is the date and time this calculation runs.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "table",
                    "label": null,
                    "description": "This is the path to the form at the site level which contains the field to be set (Ex. inventory.form.name.inventory). ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "A field on the current form which contains the value to set on the site form. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "matchIndex",
                    "label": null,
                    "description": "To be used if the index (i) of the row on the site form is known. Use either \"Primary Key\" (most common) or \"matchIndex\" but not both.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "primaryKey",
                    "label": null,
                    "description": "To be used if the index (i) of the row on the site form is known. Use either \"Primary Key\" or \"matchIndex\" but not both.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "matchColumn",
                    "label": null,
                    "description": "To be used if the index of the row on the site form is unknown.  Must be used in conjunction with \"matchFieldValue\" (most common) or \"matchValue\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "matchFieldValue",
                    "label": null,
                    "description": "Used when the index on the site form is not known, but the value in one of the columns is known.  Matches the value of a field on the current form to a field in matchColumn on the site form. This attribute is more frequently used over using \"matchValue\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "matchValue",
                    "label": null,
                    "description": "Used when the index is not known, but the value to match on the site form is known (this option will probably only be used in conjuction with a custom scriptlet. For most cases, use \"matchFieldValue\".)",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "column",
                    "label": null,
                    "description": "The column on the site table where the value should be set.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "setColumn",
                    "label": null,
                    "description": "The column on the site table where the value should be set.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "setFieldValue",
                    "label": null,
                    "description": "A field on the current subject level form which contains the value to set on the site form.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "setValue",
                    "label": null,
                    "description": "Used if the value to set is known, bypasses the 'setFieldAttribute' attribute.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setToStudyLookup": {
            "name": "setToStudyLookup",
            "label": null,
            "description": "\n      Sets a field value from a subject or site level form to a field in an indexed (repeating) table on a project (study) level form. For Study Builder, please contact your Prelude Project Manager for support.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.  Generally a hidden field called set_date_time is used as the field name for this calculation because the result is the date and time this calculation runs.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "table",
                    "label": null,
                    "description": "This is the path to the form at the project (study) level which contains the field to be set (Ex.\n        inventory.form.name.inventory).\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "A field on the current form which contains the value to set on the project form. In Study Builder, start\n        typing each field name to select the applicable field(s).\n      ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "matchIndex",
                    "label": null,
                    "description": "To be used if the index (i) of the row on the project form is known.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "matchColumn",
                    "label": null,
                    "description": "To be used if the index of the row on the project form is unknown. Must be used in conjunction with\n        \"matchFieldValue\" (most common) or \"matchValue\".\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "matchFieldValue",
                    "label": null,
                    "description": "Used when the index on the project form is unknown, but the value in one of the columns is known.\n        Matches the value of a field on the current form to a field in matchColumn on the project (study) level form.\n        This attribute is more frequently used over using \"matchValue\".\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "setColumn",
                    "label": null,
                    "description": "The column on the project table where the value should be set.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "setFieldValue",
                    "label": null,
                    "description": "A field on the current subject or site level form which contains the value to set on the project\n        form.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "setValue",
                    "label": null,
                    "description": "Used if the value to set is known, bypasses the 'setFieldAttribute' attribute.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "setValue": {
            "name": "setValue",
            "label": null,
            "description": "Sets the designated calculatedField to a specific value or to the same value as a selected field.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field that will be populated by the result of the calculation.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "If entered, the value within this field will populate the calculatedField, otherwise, the value provided below will be used to popualte the calculatedField. Only this field or value should be specified.\n        In Study Builder, start typing the field name to select the applicable field. ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The value that will populate the calculatedField. (This calculation requires either the field above or value to be set).",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "attributeToUser",
                    "label": null,
                    "description": "Determines whether the calculated field (in the audit trail) will be attributed to the system calculation ('set from calculation') or\n        be attributed to the user that triggered that calculation. The default is 'false' which will set the entry to 'set from calculation'.\n        If 'true', then the entry will be attributed to the logged in user who triggered the calculation.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "setValueRandom": {
            "name": "setValueRandom",
            "label": null,
            "description": "Sets the value in the calculatedField by picking at random from several input fields or values.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to randomly select from. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "Comma separated list of values to randomly select from.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "signPdf": {
            "name": "signPdf",
            "label": null,
            "description": "\n      Creates a new pdf with a signature page populated with relevant values\n      prepended to the contents of the original pdf\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "\n        This is the *file field* that will have the pdf with the prepended text box\n      ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "\n        The first field will be the file field with the pdf to add to.\n        The rest of the fields will provide the information to add to the pdf.\n      ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "\n        The file name of the new pdf to be generated.\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fieldsIncludeAuditInfo",
                    "label": null,
                    "description": "\n        Fields for which to include audit info as part of the signature.\n        Same format as 'fields', but only takes the field names (no field paths).\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "attributeToUser",
                    "label": null,
                    "description": "Determines whether the calculated field (in the audit trail) will be attributed to the system calculation ('set from calculation') or\n        be attributed to the user that triggered that calculation. The default is 'false' which will set the entry to 'set from calculation'.\n        If 'true', then the entry will be attributed to the logged in user who triggered the calculation.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "subString": {
            "name": "subString",
            "label": null,
            "description": "Returns the substring of a given field value. For example, if randomization_date_time is 01-Jan-2021 11:34:00 and user would like only the date, use start=0 and end=11. Or, if the user would just like the time, use start=12 and end=17.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "start",
                    "label": null,
                    "description": "Starting Point (Inclusive): Enter a number (starting at 0) as the starting point of the substring",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "end",
                    "label": null,
                    "description": "End Point (Non-Inclusive): Enter a number as the ending point of the substring",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "variable",
                    "label": null,
                    "description": "!DEPRECATED! Use Starting Point instead (Inclusive)",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "!DEPRECATED! Use End Point instead (Exclusive)",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "submitVetMetrica": {
            "name": "submitVetMetrica",
            "label": null,
            "description": "\n      Submit the form contents as a VetMetrica questionnaire,\n      populating the relevant factor fields with the results upon success.\n\n      Information can be found on the wiki: (http://wiki.preludedynamics.com/index.php/VetMetrica_API)\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "\n        The field populated with the submission status.\n      ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "animalType",
                    "label": null,
                    "description": "\n        The type of animal the questionnaire is related to.\n\n        One of: dog, cat.\n      ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "dobField",
                    "label": null,
                    "description": "\n        The field to use as the dob for the animal.\n        Expects that field to have a date formatted according to the default study date format.\n\n        Defaults to the field named 'dob' on the demographics form.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "attachments",
                    "label": null,
                    "description": "\n        Comma separated field names used in notification types that are emailed\n        to include the file that the field points to as an attachment to the email.\n        This attribute only makes sense in a type=\"notify\" and the fields only make\n        sense if they are filefields.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "icon",
                    "label": null,
                    "description": "Used to define an icon associated with notifications.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "postToSent",
                    "label": null,
                    "description": "Used to cause a Notify to be posted (if \"true\") to the sent items page - default \"false\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "alertPriority",
                    "label": null,
                    "description": "Used to define priority applied to notifications.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "ignoreIf",
                    "label": null,
                    "description": "Used to define value that if matches field, field value is to be ignored, e.g. \"ND\" = not done.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "delimiter",
                    "label": null,
                    "description": "Used in type=concatenate to know what delimiter to use between elements.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "pattern",
                    "label": null,
                    "description": "Used for date and time formatting. For Composer, please leave this attribute blank.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "studyFormat",
                    "label": null,
                    "description": "Used to pull the study level date and time format. For Composer, please leave this attribute blank.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "Field(s) to use in this calculation. In Composer, start typing each field name to select the applicable field(s). Can have special syntax to describe sets of fields.",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "id",
                    "label": null,
                    "description": "This is the ID to use for this calculation.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "case",
                    "label": null,
                    "description": "Use if you would like the calculateField to be converted to all upper case or all lower case. Enter \"upper\" or \"lower\" to specify case.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is the value to be used in this calculation.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "db",
                    "label": null,
                    "description": "This is the name of the dictionary to use ex. \"VeDDRA\".",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "expression",
                    "label": null,
                    "description": "This is the expression to be used in this calculation. Since it is custom, it can be a calculation (such as arithmetric) or text(like that used in a notification).",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "forms",
                    "label": null,
                    "description": "Used in set/reverting state and in moving fields to list the target forms.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "maximum",
                    "label": null,
                    "description": "This is the maximum possible value used in this calculation.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "format",
                    "label": null,
                    "description": "Used to specify how the field information will be formatted.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "variable",
                    "label": null,
                    "description": "",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "displayDateFormat",
                    "label": null,
                    "description": "",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "table",
                    "label": null,
                    "description": "The name of the form pulled from or pushed to.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "primaryKey",
                    "label": null,
                    "description": "To be used if the index (i) of the row on the site form is known.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "column",
                    "label": null,
                    "description": "The column on the site table where the value should be set.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Composer:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "roles",
                    "label": null,
                    "description": "Enter the letter/number/character codes corresponding to the appropriate roles.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "url",
                    "label": null,
                    "description": "The URL to be used.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "replaceThis",
                    "label": null,
                    "description": "Used by the \"replace\" calculation to know what to replace.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "replaceWith",
                    "label": null,
                    "description": "Used by the \"replace\" calculation to know what to replace with.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "scope",
                    "label": null,
                    "description": "Used by notify to override the limit of sending notices only\n        to users that can see the form with the calculation. E.g., \"site\" sends to\n        all users who are assigned to the site that the notify comes from.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "startingNumber",
                    "label": null,
                    "description": "Used to specify the starting number for NextPatientNumber, e.g., 4000.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "suppressPrefixUrl",
                    "label": null,
                    "description": "Used to suppress the prefix of a notify message and the url beneath it.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "sum": {
            "name": "sum",
            "label": null,
            "description": "Adds numeric field values.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of numeric or integer field(s) to use in this calculation. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        },
        "sumFieldsWhereOtherFieldEquals": {
            "name": "sumFieldsWhereOtherFieldEquals",
            "label": null,
            "description": "Sets a calculatedField to the sum of those fields where another field equals some value.  The 'whereField' will be\n      looked up in onDemand forms and indexed (repeating) categories. For Study Builder, please contact your Prelude Project Manager for support.\n    ",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field that will show the results of the calculation.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "These numeric or integer fields will be summed when the whereField has the indicated value. In Study Builder, start typing each field name to select the applicable field(s).",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "whereField",
                    "label": null,
                    "description": "When this field has the indicated value, the designated fields in the \"fields\" attribute will be summed.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is the value that the field in the \"whereField\" attribute must equal in order for the designated fields to be summed.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "\n        Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero.\n      ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "sumTableElementsWhereFieldEquals": {
            "name": "sumTableElementsWhereFieldEquals",
            "label": null,
            "description": "Calculates the sum of a numeric field on an indexed (repeating) table when another, associated field (in the same table row) on the index table equals a specific value. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "fields",
                    "label": null,
                    "description": "Field(s) within an indexed (repeating) table to use in this calculation. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "This is the value that the field in the \"customArg\" attribute must equal. If the \"customArg\" field equals this value, then the associated field (in the same table row) listed in \"fields\" will be included in the sum.",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "decimals",
                    "label": null,
                    "description": "Number of decimal places the result should display.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "customArg",
                    "label": null,
                    "description": "When this field has the indicated value, the designated fields in the \"fields\" attribute will be summed. This should be a field in an indexed (repeating) table.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "unhideForm": {
            "name": "unhideForm",
            "label": null,
            "description": "This calculations is used to make a form reappear after its state was set to NA. For Study Builder, please contact your Prelude Project Manager for support.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results. Results for revertFromNAState is \"RevertState\".",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "forms",
                    "label": null,
                    "description": "This is the path to the form(s) for which the state will be set (Ex. visit.1.form.name.pe,visit.2.form.name.pe). ",
                    "required": true,
                    "inputType": "string",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "upperCase": {
            "name": "upperCase",
            "label": null,
            "description": "Convert the value to all upper case.",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "fields",
                    "label": null,
                    "description": "List of field(s) to use in this calculation organized in priority order. In Study Builder, start typing each field name to select the applicable field(s). ",
                    "required": false,
                    "inputType": "field",
                    "inputOptions": null
                },
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                }
            ]
        },
        "vm": {
            "name": "vm",
            "label": null,
            "description": "",
            "requiredAttributes": [
                {
                    "name": "calculatedField",
                    "label": null,
                    "description": "This is the field which will display the calculation results.",
                    "required": true,
                    "inputType": "field",
                    "inputOptions": null
                }
            ],
            "optionalAttributes": [
                {
                    "name": "population",
                    "label": null,
                    "description": "Used to specify a list of formOwners to associate with this.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "priority",
                    "label": null,
                    "description": "Sets the order in which calculations run. Calculations run in order from lowest to highest value. If priority is left blank, it defaults to zero. ",
                    "required": false,
                    "inputType": "numeric",
                    "inputOptions": null
                },
                {
                    "name": "recalculate",
                    "label": null,
                    "description": "\n        Determines if this calculation will fire each time the form is submitted.\n        Enter \"true\" or leave blank to recalculate each time the form is submitted.\n        Enter \"false\" to only run the calculation the first time the form is submitted.\n        If \"false\", then calculations will only fire for a calculatedField that has never had a value.\n      ",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "doNotInitializeBlank",
                    "label": null,
                    "description": "When a form is saved, calculated values are set to blank before being re-calculated.  Setting this attribute to \"true\" (in Study Builder:\n        checking the check box) will preserve the original value if the calculation is not triggered (i.e. if the calculation does not need to be recalculated).",
                    "required": false,
                    "inputType": "bool",
                    "inputOptions": null
                },
                {
                    "name": "value",
                    "label": null,
                    "description": "The target value of a field to be used in conjunction with a constraint or trigger.",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                },
                {
                    "name": "vm",
                    "label": null,
                    "description": "",
                    "required": false,
                    "inputType": "string",
                    "inputOptions": null
                }
            ]
        }
    }
}
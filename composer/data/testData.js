
export default class Test{
        
    static loadForm(id){
        switch(id){
            case 'form1':
                return JSON.stringify(Test.test1());
            case 'form2':
                return JSON.stringify(Test.test2());
        }
    }

static getTestStudy(){
    return(
            {"_type": "study",
    "id": "composer_animal_study",
    "name" : "Composer Animal",
    "views":[
            {
                "_type": "view",
                "id": "patient", 
                "groups": [
                    {
                        "_type": "group",
                        "id": "group1",
                        "label": "Group 1",
                        "formRefs": [{
                                "_type": "formRef",
                                "id" : "form1",
                                "label": "Form 1"
                        },{
                                "_type": "formRef",
                                "id" : "form2",
                                "label": "Form 2"
                        }]
                    },
                    {
                        "_type": "group",
                        "id": "group2",
                        "label": "Group 2",
                        "formRefs": [{
                                "_type": "formRef",
                                "id" : "form3",
                                "label": "Form 3"
                        },{
                                "_type": "formRef",
                                "id" : "form4",
                                "label": "Form 4"
                        }]
                    }
                ]
            },
            {
                "_type": "view",
                "id": "site",
                "groups": []
            }
    ]} 
    );
}
        
static getTestForm(){
    return this.test2();
}
static test2(){
    return({
  "id": "form1",
  "_type" : "form",
  "formName": "cbpi",
  "fileName": "cbpi",
  "formLabel": "Form 1",
  "groupId": "",
  "hasFiles": "true",
  "lastPublished": "1498051228010",
  "lastPublishedBy": "Karina Loyo",
  "lastUpdated": "1498050859120",
  "lastUpdatedBy": "Karina Loyo",
  "sections": [
    {
      "id": "section_0",
      "_type" : "section",
      "sectionName": "CBPI_Title",
      "sectionLabel": "Canine Brief Pain Inventory (CBPI) Assessment Form",
      "rows": [
        {
          "id": "row_0",
          "_type" : "row",
          "rowName": "",
          "rowLabel": "",
          "tables": [
            {
              "id": "table0",
              "_type" : "table",
              "numRows": "1",
              "numCols": "1",
              "width": "100%",
              "alignment": "tableLeft",
              "autoNumber": false,
              "showBorders": false,
              "columnHeaders": null,
              "columnWidths": [],
              "tableRows": [
                {
                  "id": "table0_row0",
                  "_type" : "tableRow",
                  "cells": [
                    {
                      "id": "table0_row0_cell0",
                      "_type" : "tableCell",
                      "align": "center",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_0",
                          "_type" : "field",
                          "fieldName": "date",
                          "fieldLabel": "Date:",
                          "fieldType": "set.today",
                          "fieldPlaceholder": "dd-MMM-yyyy",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelLeft",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                }
              ],
              "indexed": false
            }
          ]
        }
      ],
      "controlDisplayField": "",
      "controlDisplayValue": ""
    }]

});
}

static test3(){
    return({
  "id": "form2",
  "_type" : "form",
  "formName": "cbpi",
  "fileName": "cbpi",
  "formLabel": "Form 2",
  "groupId": "",
  "hasFiles": "true",
  "lastPublished": "1498051228010",
  "lastPublishedBy": "Karina Loyo",
  "lastUpdated": "1498050859120",
  "lastUpdatedBy": "Karina Loyo",
  "sections": [
    {
      "id": "section_0",
      "_type" : "section",
      "sectionName": "CBPI_Title",
      "sectionLabel": "Canine Brief Pain Inventory (CBPI) Assessment Form",
      "rows": [
        {
          "id": "row_0",
          "_type" : "row",
          "rowName": "",
          "rowLabel": "",
          "tables": [
            {
              "id": "table0",
              "_type" : "table",
              "numRows": "1",
              "numCols": "1",
              "width": "100%",
              "alignment": "tableLeft",
              "autoNumber": false,
              "showBorders": false,
              "columnHeaders": null,
              "columnWidths": [],
              "tableRows": [
                {
                  "id": "table0_row0",
                  "_type" : "tableRow",
                  "cells": [
                    {
                      "id": "table0_row0_cell0",
                      "_type" : "tableCell",
                      "align": "center",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_0",
                          "_type" : "field",
                          "fieldName": "date",
                          "fieldLabel": "Date:",
                          "fieldType": "set.today",
                          "fieldPlaceholder": "dd-MMM-yyyy",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelLeft",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                }
              ],
              "indexed": false
            }
          ]
        }
      ],
      "controlDisplayField": "",
      "controlDisplayValue": ""
    }]

});
}

static test1(){
        return({
  "id": "cbpi",
  "formName": "cbpi",
  "fileName": "cbpi",
  "formLabel": "CBPI",
  "groupId": "",
  "hasFiles": "true",
  "lastPublished": "1498051228010",
  "lastPublishedBy": "Karina Loyo",
  "lastUpdated": "1498050859120",
  "lastUpdatedBy": "Karina Loyo",
  "sections": [
    {
      "id": "section_0",
      "sectionName": "CBPI_Title",
      "sectionLabel": "Canine Brief Pain Inventory (CBPI) Assessment Form",
      "rows": [
        {
          "id": "row_0",
          "rowName": "",
          "rowLabel": "",
          "tables": [
            {
              "id": "table0",
              "numRows": "1",
              "numCols": "1",
              "width": "100%",
              "alignment": "tableLeft",
              "autoNumber": false,
              "showBorders": false,
              "columnHeaders": null,
              "columnWidths": [],
              "tableRows": [
                {
                  "id": "table0_row0",
                  "cells": [
                    {
                      "id": "table0_row0_cell0",
                      "align": "center",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_0",
                          "fieldName": "date",
                          "fieldLabel": "Date:",
                          "fieldType": "set.today",
                          "fieldPlaceholder": "dd-MMM-yyyy",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelLeft",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                }
              ],
              "indexed": false
            }
          ]
        }
      ],
      "controlDisplayField": "",
      "controlDisplayValue": ""
    },
    {
      "id": "section_1",
      "sectionName": "Description_of_Pain",
      "sectionLabel": "Description of Pain",
      "rows": [
        {
          "id": "row_1",
          "rowName": "",
          "rowLabel": "",
          "tables": [
            {
              "id": "table1",
              "numRows": 5,
              "numCols": 2,
              "width": "100%",
              "alignment": "tableLeft",
              "autoNumber": false,
              "showBorders": false,
              "columnHeaders": null,
              "columnWidths": [],
              "tableRows": [
                {
                  "id": "table1_row0",
                  "cells": [
                    {
                      "id": "table1_row0_cell0",
                      "align": "left",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_1",
                          "fieldName": "field_2",
                          "fieldLabel": "Rate your dog's pain.",
                          "fieldType": "label",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelTop",
                          "labelColor": "#1525b7",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    },
                    {
                      "id": "table1_row0_cell1",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": []
                    }
                  ]
                },
                {
                  "id": "table1_row1",
                  "cells": [
                    {
                      "id": "table1_row1_cell0",
                      "align": "left",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_2",
                          "fieldName": "field_3",
                          "fieldLabel": "1. Fill in the circle (�) next to the one number that best describes the pain at its worst in the last 7 days.",
                          "fieldType": "label",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    },
                    {
                      "id": "table1_row1_cell1",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_3",
                          "fieldName": "q1_pain",
                          "fieldLabel": "",
                          "fieldType": "radio",
                          "fieldPlaceholder": "",
                          "fieldOptions": [
                            {
                              "label": "0 No pain",
                              "value": "0"
                            },
                            {
                              "label": "1",
                              "value": "1"
                            },
                            {
                              "label": "2",
                              "value": "2"
                            },
                            {
                              "label": "3",
                              "value": "3"
                            },
                            {
                              "label": "4",
                              "value": "4"
                            },
                            {
                              "label": "5",
                              "value": "5"
                            },
                            {
                              "label": "6",
                              "value": "6"
                            },
                            {
                              "label": "7",
                              "value": "7"
                            },
                            {
                              "label": "8",
                              "value": "8"
                            },
                            {
                              "label": "9",
                              "value": "9"
                            },
                            {
                              "label": "10 Extreme Pain",
                              "value": "10"
                            }
                          ],
                          "fieldOptionsClass": "radiosHorizontal",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": true,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "table1_row2",
                  "cells": [
                    {
                      "id": "table1_row2_cell0",
                      "align": "left",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_4",
                          "fieldName": "field_5",
                          "fieldLabel": "2. Fill in the circle (�) next to the one number that best describes the pain at its least in the last 7 days.",
                          "fieldType": "label",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    },
                    {
                      "id": "table1_row2_cell1",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_7",
                          "fieldName": "q2_pain",
                          "fieldLabel": "",
                          "fieldType": "radio",
                          "fieldPlaceholder": "",
                          "fieldOptions": [
                            {
                              "label": "0 No Pain",
                              "value": "0"
                            },
                            {
                              "label": "1",
                              "value": "1"
                            },
                            {
                              "label": "2",
                              "value": "2"
                            },
                            {
                              "label": "3",
                              "value": "3"
                            },
                            {
                              "label": "4",
                              "value": "4"
                            },
                            {
                              "label": "5",
                              "value": "5"
                            },
                            {
                              "label": "6",
                              "value": "6"
                            },
                            {
                              "label": "7",
                              "value": "7"
                            },
                            {
                              "label": "8",
                              "value": "8"
                            },
                            {
                              "label": "9",
                              "value": "9"
                            },
                            {
                              "label": "10 Extreme Pain",
                              "value": "10"
                            }
                          ],
                          "fieldOptionsClass": "radiosHorizontal",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": true,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "table1_row3",
                  "cells": [
                    {
                      "id": "table1_row3_cell0",
                      "align": "left",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_5",
                          "fieldName": "field_6",
                          "fieldLabel": "3. Fill in the circle (�) next to the one number that best describes the pain at its average in the last 7 days.",
                          "fieldType": "label",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    },
                    {
                      "id": "table1_row3_cell1",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_8",
                          "fieldName": "q3_pain",
                          "fieldLabel": "",
                          "fieldType": "radio",
                          "fieldPlaceholder": "",
                          "fieldOptions": [
                            {
                              "label": "0 No Pain",
                              "value": "0"
                            },
                            {
                              "label": "1",
                              "value": "1"
                            },
                            {
                              "label": "2",
                              "value": "2"
                            },
                            {
                              "label": "3",
                              "value": "3"
                            },
                            {
                              "label": "4",
                              "value": "4"
                            },
                            {
                              "label": "5",
                              "value": "5"
                            },
                            {
                              "label": "6",
                              "value": "6"
                            },
                            {
                              "label": "7",
                              "value": "7"
                            },
                            {
                              "label": "8",
                              "value": "8"
                            },
                            {
                              "label": "9",
                              "value": "9"
                            },
                            {
                              "label": "10 Extreme Pain",
                              "value": "10"
                            }
                          ],
                          "fieldOptionsClass": "radiosHorizontal",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": true,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "table1_row4",
                  "cells": [
                    {
                      "id": "table1_row4_cell0",
                      "align": "left",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_6",
                          "fieldName": "field_7",
                          "fieldLabel": "4. Fill in the circle (�) next to the one number that best describes the pain as it is right now.",
                          "fieldType": "label",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    },
                    {
                      "id": "table1_row4_cell1",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_9",
                          "fieldName": "q4_pain",
                          "fieldLabel": "",
                          "fieldType": "radio",
                          "fieldPlaceholder": "",
                          "fieldOptions": [
                            {
                              "label": "0 No Pain",
                              "value": "0"
                            },
                            {
                              "label": "1",
                              "value": "1"
                            },
                            {
                              "label": "2",
                              "value": "2"
                            },
                            {
                              "label": "3",
                              "value": "3"
                            },
                            {
                              "label": "4",
                              "value": "4"
                            },
                            {
                              "label": "5",
                              "value": "5"
                            },
                            {
                              "label": "6",
                              "value": "6"
                            },
                            {
                              "label": "7",
                              "value": "7"
                            },
                            {
                              "label": "8",
                              "value": "8"
                            },
                            {
                              "label": "9",
                              "value": "9"
                            },
                            {
                              "label": "10 Extreme Pain",
                              "value": "10"
                            }
                          ],
                          "fieldOptionsClass": "radiosHorizontal",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": true,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                }
              ],
              "indexed": false,
              "controlDisplayField": "",
              "controlDisplayValue": ""
            }
          ]
        }
      ],
      "controlDisplayField": "",
      "controlDisplayValue": ""
    },
    {
      "id": "section_2",
      "sectionName": "Function",
      "sectionLabel": "Description of Function",
      "rows": [
        {
          "id": "row_2",
          "rowName": "",
          "rowLabel": "",
          "tables": [
            {
              "id": "table2",
              "numRows": "1",
              "numCols": "1",
              "width": "100%",
              "alignment": "tableLeft",
              "autoNumber": false,
              "showBorders": false,
              "columnHeaders": null,
              "columnWidths": [],
              "tableRows": [
                {
                  "id": "table2_row0",
                  "cells": [
                    {
                      "id": "table2_row0_cell0",
                      "align": "left",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_10",
                          "fieldName": "field_11",
                          "fieldLabel": "Fill in the circle (�) next to the one number that best describes how during the last 7 days pain has interfered with your dog's:",
                          "fieldType": "label",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                }
              ],
              "indexed": false
            }
          ]
        },
        {
          "id": "row_3",
          "rowName": "",
          "rowLabel": "",
          "tables": [
            {
              "id": "table3",
              "numRows": 6,
              "numCols": 2,
              "width": "100%",
              "alignment": "tableLeft",
              "autoNumber": false,
              "showBorders": false,
              "columnHeaders": null,
              "columnWidths": [],
              "tableRows": [
                {
                  "id": "table3_row0",
                  "cells": [
                    {
                      "id": "table3_row0_cell0",
                      "align": "left",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_11",
                          "fieldName": "field_12",
                          "fieldLabel": "5. General Activity",
                          "fieldType": "label",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    },
                    {
                      "id": "table3_row0_cell1",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_17",
                          "fieldName": "q5_function",
                          "fieldLabel": "",
                          "fieldType": "radio",
                          "fieldPlaceholder": "",
                          "fieldOptions": [
                            {
                              "label": "0 Does not Interfere",
                              "value": "0"
                            },
                            {
                              "label": "1",
                              "value": "1"
                            },
                            {
                              "label": "2",
                              "value": "2"
                            },
                            {
                              "label": "3",
                              "value": "3"
                            },
                            {
                              "label": "4",
                              "value": "4"
                            },
                            {
                              "label": "5",
                              "value": "5"
                            },
                            {
                              "label": "6",
                              "value": "6"
                            },
                            {
                              "label": "7",
                              "value": "7"
                            },
                            {
                              "label": "8",
                              "value": "8"
                            },
                            {
                              "label": "9",
                              "value": "9"
                            },
                            {
                              "label": "10 Completely Interferes",
                              "value": "10"
                            }
                          ],
                          "fieldOptionsClass": "radiosHorizontal",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": true,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "table3_row1",
                  "cells": [
                    {
                      "id": "table3_row1_cell0",
                      "align": "left",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_12",
                          "fieldName": "field_13",
                          "fieldLabel": "6. Enjoyment of Life",
                          "fieldType": "label",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    },
                    {
                      "id": "table3_row1_cell1",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_18",
                          "fieldName": "q6_function",
                          "fieldLabel": "",
                          "fieldType": "radio",
                          "fieldPlaceholder": "",
                          "fieldOptions": [
                            {
                              "label": "0 Does not Interfere",
                              "value": "0"
                            },
                            {
                              "label": "1",
                              "value": "1"
                            },
                            {
                              "label": "2",
                              "value": "2"
                            },
                            {
                              "label": "3",
                              "value": "3"
                            },
                            {
                              "label": "4",
                              "value": "4"
                            },
                            {
                              "label": "5",
                              "value": "5"
                            },
                            {
                              "label": "6",
                              "value": "6"
                            },
                            {
                              "label": "7",
                              "value": "7"
                            },
                            {
                              "label": "8",
                              "value": "8"
                            },
                            {
                              "label": "9",
                              "value": "9"
                            },
                            {
                              "label": "10 Completely Interferes",
                              "value": "10"
                            }
                          ],
                          "fieldOptionsClass": "radiosHorizontal",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": true,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "table3_row2",
                  "cells": [
                    {
                      "id": "table3_row2_cell0",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_13",
                          "fieldName": "field_14",
                          "fieldLabel": "7. Ability to Rise to Standing from Lying Down",
                          "fieldType": "label",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    },
                    {
                      "id": "table3_row2_cell1",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_19",
                          "fieldName": "q7_function",
                          "fieldLabel": "",
                          "fieldType": "radio",
                          "fieldPlaceholder": "",
                          "fieldOptions": [
                            {
                              "label": "0 Does not Interfere",
                              "value": "0"
                            },
                            {
                              "label": "1",
                              "value": "1"
                            },
                            {
                              "label": "2",
                              "value": "2"
                            },
                            {
                              "label": "3",
                              "value": "3"
                            },
                            {
                              "label": "4",
                              "value": "4"
                            },
                            {
                              "label": "5",
                              "value": "5"
                            },
                            {
                              "label": "6",
                              "value": "6"
                            },
                            {
                              "label": "7",
                              "value": "7"
                            },
                            {
                              "label": "8",
                              "value": "8"
                            },
                            {
                              "label": "9",
                              "value": "9"
                            },
                            {
                              "label": "10 Completely Interferes",
                              "value": "10"
                            }
                          ],
                          "fieldOptionsClass": "radiosHorizontal",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": true,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "table3_row3",
                  "cells": [
                    {
                      "id": "table3_row3_cell0",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_14",
                          "fieldName": "field_15",
                          "fieldLabel": "8. Ability to Walk",
                          "fieldType": "label",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    },
                    {
                      "id": "table3_row3_cell1",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_20",
                          "fieldName": "q8_function",
                          "fieldLabel": "",
                          "fieldType": "radio",
                          "fieldPlaceholder": "",
                          "fieldOptions": [
                            {
                              "label": "0 Does not Interfere",
                              "value": "0"
                            },
                            {
                              "label": "1",
                              "value": "1"
                            },
                            {
                              "label": "2",
                              "value": "2"
                            },
                            {
                              "label": "3",
                              "value": "3"
                            },
                            {
                              "label": "4",
                              "value": "4"
                            },
                            {
                              "label": "5",
                              "value": "5"
                            },
                            {
                              "label": "6",
                              "value": "6"
                            },
                            {
                              "label": "7",
                              "value": "7"
                            },
                            {
                              "label": "8",
                              "value": "8"
                            },
                            {
                              "label": "9",
                              "value": "9"
                            },
                            {
                              "label": "10 Completely Interferes",
                              "value": "10"
                            }
                          ],
                          "fieldOptionsClass": "radiosHorizontal",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": true,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "table3_row4",
                  "cells": [
                    {
                      "id": "table3_row4_cell0",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_15",
                          "fieldName": "field_16",
                          "fieldLabel": "9. Ability to Run",
                          "fieldType": "label",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    },
                    {
                      "id": "table3_row4_cell1",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_21",
                          "fieldName": "q9_function",
                          "fieldLabel": "",
                          "fieldType": "radio",
                          "fieldPlaceholder": "",
                          "fieldOptions": [
                            {
                              "label": "0 Does not Interfere",
                              "value": "0"
                            },
                            {
                              "label": "1",
                              "value": "1"
                            },
                            {
                              "label": "2",
                              "value": "2"
                            },
                            {
                              "label": "3",
                              "value": "3"
                            },
                            {
                              "label": "4",
                              "value": "4"
                            },
                            {
                              "label": "5",
                              "value": "5"
                            },
                            {
                              "label": "6",
                              "value": "6"
                            },
                            {
                              "label": "7",
                              "value": "7"
                            },
                            {
                              "label": "8",
                              "value": "8"
                            },
                            {
                              "label": "9",
                              "value": "9"
                            },
                            {
                              "label": "10 Completely Interferes",
                              "value": "10"
                            }
                          ],
                          "fieldOptionsClass": "radiosHorizontal",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": true,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "table3_row5",
                  "cells": [
                    {
                      "id": "table3_row5_cell0",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_16",
                          "fieldName": "field_17",
                          "fieldLabel": "10. Ability to Climb Stairs, Curbs, Doorsteps, etc.",
                          "fieldType": "label",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    },
                    {
                      "id": "table3_row5_cell1",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_22",
                          "fieldName": "q10_function",
                          "fieldLabel": "",
                          "fieldType": "radio",
                          "fieldPlaceholder": "",
                          "fieldOptions": [
                            {
                              "label": "0 Does not Interfere",
                              "value": "0"
                            },
                            {
                              "label": "1",
                              "value": "1"
                            },
                            {
                              "label": "2",
                              "value": "2"
                            },
                            {
                              "label": "3",
                              "value": "3"
                            },
                            {
                              "label": "4",
                              "value": "4"
                            },
                            {
                              "label": "5",
                              "value": "5"
                            },
                            {
                              "label": "6",
                              "value": "6"
                            },
                            {
                              "label": "7",
                              "value": "7"
                            },
                            {
                              "label": "8",
                              "value": "8"
                            },
                            {
                              "label": "9",
                              "value": "9"
                            },
                            {
                              "label": "10 Completely Interferes",
                              "value": "10"
                            }
                          ],
                          "fieldOptionsClass": "radiosHorizontal",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": true,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                }
              ],
              "indexed": false,
              "controlDisplayField": "",
              "controlDisplayValue": ""
            }
          ]
        }
      ],
      "controlDisplayField": "",
      "controlDisplayValue": ""
    },
    {
      "id": "section_3",
      "sectionName": "Overall",
      "sectionLabel": "Overall Impression",
      "rows": [
        {
          "id": "row_4",
          "rowName": "",
          "rowLabel": "",
          "tables": [
            {
              "id": "table4",
              "numRows": 1,
              "numCols": 2,
              "width": "100%",
              "alignment": "tableLeft",
              "autoNumber": false,
              "showBorders": false,
              "columnHeaders": null,
              "columnWidths": [],
              "tableRows": [
                {
                  "id": "table4_row0",
                  "cells": [
                    {
                      "id": "table4_row0_cell0",
                      "align": "left",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_23",
                          "fieldName": "field_24",
                          "fieldLabel": "11. Fill in the circle (�) next to the one response best describes your dog's overall quality of life over the last 7 days.",
                          "fieldType": "label",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    },
                    {
                      "id": "table4_row0_cell1",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_24",
                          "fieldName": "overall",
                          "fieldLabel": "",
                          "fieldType": "radio",
                          "fieldPlaceholder": "",
                          "fieldOptions": [
                            {
                              "label": "Poor",
                              "value": "0"
                            },
                            {
                              "label": "Fair",
                              "value": "1"
                            },
                            {
                              "label": "Good",
                              "value": "2"
                            },
                            {
                              "label": "Very Good",
                              "value": "3"
                            },
                            {
                              "label": "Excellent",
                              "value": "4"
                            }
                          ],
                          "fieldOptionsClass": "radiosHorizontal",
                          "labelClass": "labelTop",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": true,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                }
              ],
              "indexed": false,
              "controlDisplayField": "",
              "controlDisplayValue": ""
            }
          ]
        }
      ],
      "controlDisplayField": "",
      "controlDisplayValue": ""
    },
    {
      "id": "section_4",
      "sectionName": "Upload",
      "sectionLabel": "Paper Assessment Upload",
      "rows": [
        {
          "id": "row_5",
          "rowName": "",
          "rowLabel": "",
          "tables": [
            {
              "id": "table5",
              "numRows": "1",
              "numCols": "1",
              "width": "100%",
              "alignment": "tableLeft",
              "autoNumber": false,
              "showBorders": false,
              "columnHeaders": null,
              "columnWidths": [],
              "tableRows": [
                {
                  "id": "table5_row0",
                  "cells": [
                    {
                      "id": "table5_row0_cell0",
                      "align": "center",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_25",
                          "fieldName": "file",
                          "fieldLabel": "Upload File",
                          "fieldType": "file",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelLeft",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                }
              ],
              "indexed": false
            }
          ]
        }
      ],
      "controlDisplayField": "",
      "controlDisplayValue": ""
    },
    {
      "id": "section_5",
      "sectionName": "Scores",
      "sectionLabel": "Scores",
      "rows": [
        {
          "id": "row_6",
          "rowName": "",
          "rowLabel": "",
          "tables": [
            {
              "id": "table6",
              "numRows": "1",
              "numCols": "1",
              "width": "100%",
              "alignment": "tableLeft",
              "autoNumber": false,
              "showBorders": false,
              "columnHeaders": null,
              "columnWidths": [],
              "tableRows": [
                {
                  "id": "table6_row0",
                  "cells": [
                    {
                      "id": "table6_row0_cell0",
                      "align": "left",
                      "colspan": "",
                      "rowspan": "",
                      "layoutOrientation": "vertical",
                      "fields": [
                        {
                          "id": "form_element_26",
                          "fieldName": "average_pain",
                          "fieldLabel": "Average Pain",
                          "fieldType": "numeric",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelLeft",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "7",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        },
                        {
                          "id": "form_element_27",
                          "fieldName": "average_function",
                          "fieldLabel": "Average Function",
                          "fieldType": "numeric",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelLeft",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "7",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        },
                        {
                          "id": "form_element_28",
                          "fieldName": "total_score",
                          "fieldLabel": "Total Score",
                          "fieldType": "numeric",
                          "fieldPlaceholder": "",
                          "fieldOptions": [],
                          "fieldOptionsClass": "",
                          "labelClass": "labelLeft",
                          "labelColor": "#666666",
                          "readOnly": false,
                          "cDash": "",
                          "fieldSize": "7",
                          "usingDimensions": false,
                          "absoluteOrRelativeSize": "",
                          "fieldWidth": "",
                          "fieldHeight": "",
                          "maxLength": "",
                          "usingVisibility": false,
                          "showBackground": false,
                          "controlDisplayField": "",
                          "controlDisplayValue": "",
                          "controlDisplayShowHide": ""
                        }
                      ]
                    }
                  ]
                }
              ],
              "indexed": false
            }
          ]
        }
      ],
      "controlDisplayField": "",
      "controlDisplayValue": ""
    }
  ],
  "calculations": [
    {
      "id": "calculation_0",
      "triggers": [],
      "attributes": {
        "calculatedField": "average_pain",
        "priority": "1",
        "fields": "q1_pain,q2_pain,q3_pain,q4_pain"
      },
      "type": "mean"
    },
    {
      "id": "calculation_1",
      "triggers": [],
      "attributes": {
        "calculatedField": "average_function",
        "priority": "2",
        "fields": "q5_function,q6_function,q7_function,q8_function,q9_function,q10_function"
      },
      "type": "mean"
    },
    {
      "id": "calculation_2",
      "triggers": [],
      "attributes": {
        "calculatedField": "total_score",
        "priority": "3",
        "fields": "q1_pain,q2_pain,q3_pain,q4_pain,q5_function,q6_function,q7_function,q8_function,q9_function,q10_function,overall"
      },
      "type": "sum"
    }
  ],
  "constraints": [
    {
      "id": "constraint_0",
      "type": "notBlank",
      "fields": "q1_pain,q2_pain,q3_pain,q4_pain,field_11,q5_function,q6_function,q7_function,q8_function,q9_function,q10_function,overall",
      "value": "",
      "serious": "true",
      "autoIndex": "",
      "triggers": [
        {
          "id": "constraint_0trigger_0",
          "type": "notBlank",
          "fields": "date",
          "value": ""
        }
      ]
    }
  ]
});
}
}
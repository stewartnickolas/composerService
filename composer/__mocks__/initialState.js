export default class InitialState {
  static studyData = {
    "id" : "Composer_Animal",
    "name" : "Composer - Animal",
    "_type": "study",
    "views" : [{
        "_type": "view",
        "id" : "site",
        "groups" : [{
            "_type": "group",
            "id" : "5ba2801538976bec543da542",
            "name" : "group01",
            "label" : "Group 1",
            "onDemand" : false,
            "formRefs" : [{
                "_type" : "formRef",
                "id" :"5ba2801538976bec543da546",
                "name" : "form01",
                "label" : "Form 1",
                "formStatus" : "in-work",
                "formType" : "normal",
                "refId" : "5ba2801538976bec543da544"
              }]
          }]
      }, {
        "_type": "view",
        "id" : "patient",
        "groups" : [{
            "_type": "group",
            "id" : "5ba2801538976bec543da543",
            "name" : "group01",
            "label" : "Group 1",
            "onDemand" : false,
            "formRefs" : [{
                "_type": "formRef",
                "id" : "5ba2801538976bec543da547",
                "name" : "form01",
                "label" : "Form 1",
                "formStatus" : "in-work",
                "formType" : "normal",
                "refId" : "5ba2801538976bec543da545"
              }]
          }]
      }],
    "roles" : [{
        "code" : "A",
        "name" : "role.administrator",
        "shortName" : "Admin",
        "edits" : "Admin",
        "assignToAllSites" : "true",
        "canAddFeedback" : "false",
        "canAnswerFeedback" : "false",
        "canApproveFeedback" : "false",
        "canVerifyFeedback" : "false",
        "canArchivePatients" : "true",
        "canArchiveSites" : "true",
        "canSeeSecurityQuestion" : "false",
        "canTranslate" : "false"
      }, {
        "code" : "B",
        "name" : "Biostatistician",
        "shortName" : "Stat",
        "edits" : "Stat",
        "assignToAllSites" : "false",
        "canAddFeedback" : "false",
        "canAnswerFeedback" : "false",
        "canApproveFeedback" : "false",
        "canVerifyFeedback" : "false",
        "canArchivePatients" : "false",
        "canArchiveSites" : "false",
        "canSeeSecurityQuestion" : "false",
        "canTranslate" : "false"
      }, {
        "code" : "C",
        "name" : "Coordinator",
        "shortName" : "C",
        "edits" : "C",
        "assignToAllSites" : "false",
        "canAddFeedback" : "false",
        "canAnswerFeedback" : "false",
        "canApproveFeedback" : "false",
        "canVerifyFeedback" : "false",
        "canArchivePatients" : "false",
        "canArchiveSites" : "false",
        "canSeeSecurityQuestion" : "false",
        "canTranslate" : "false"
      }],
    "studyAttributes" : [],
    "prefs" : {
      "defaultSiteCanDos" : { },
      "defaultPatientCanDos" : { }
    }
  }

 static siteFormData = {
    "_type": "form",
    "id" : "5ba2801538976bec543da544",
    "formName" : "form01",
    "formLabel" : "Form 1",
    "canView" : "",
    "canEdit" : "",
    "displayState" : true,
    "enableQueries" : true,
    "displayChanges" : true,
    "publishHistory" : [],
    "sections" : [{
        "_type" : "section",
        "id" : "section_0",
        "indexed" : false,
        "sectionName" : "section_1",
        "sectionLabel" : "Section 1",
        "rows" : [{
            "_type": 'row',
            "id" : "row_0",
            "rowName" : "",
            "rowLabel" : "",
            "tables" : [{
                "_type": "table",
                "id" : "table0",
                "numRows" : 1,
                "fixedIndex" : -1,
                "numCols" : 1,
                "width" : "100%",
                "alignment" : "tableLeft",
                "autoNumber" : false,
                "showBorders" : false,
                "columnHeaders" : [],
                "columnWidths" : [],
                "tableRows" : [{
                    "_type" : "tableRow",
                    "id" : "table0_row0",
                    "cells" : [{
                        "_type" : "tableCell",
                        "id" : "table0_row0_cell0",
                        "align" : "center",
                        "layoutOrientation" : "horizontal",
                        "fields" : []
                      }]
                  }]
              }]
          }]
      }],
    "calculations" : [],
    "constraints" : [],
  }
  
  static patientFormData = {
    "_type": "form",
    "id" : "5ba2801538976bec543da545",
    "formName" : "form01",
    "formLabel" : "Form 1",
    "canView" : "",
    "canEdit" : "",
    "displayState" : true,
    "enableQueries" : true,
    "displayChanges" : true,
    "publishHistory" : [],
    "sections" : [{
        "_type" : "section",
        "id" : "section_0",
        "indexed" : false,
        "sectionName" : "section_1",
        "sectionLabel" : "Section 1",
        "rows" : [{
            "_type": 'row',
            "id" : "row_0",
            "rowName" : "",
            "rowLabel" : "",
            "tables" : [{
                "_type": "table",
                "id" : "table0",
                "numRows" : 1,
                "fixedIndex" : -1,
                "numCols" : 1,
                "width" : "100%",
                "alignment" : "tableLeft",
                "autoNumber" : false,
                "showBorders" : false,
                "columnHeaders" : [],
                "columnWidths" : [],
                "tableRows" : [{
                    "_type" : "tableRow",
                    "id" : "table0_row0",
                    "cells" : [{
                        "_type" : "tableCell",
                        "id" : "table0_row0_cell0",
                        "align" : "center",
                        "layoutOrientation" : "horizontal",
                        "fields" : []
                      }]
                  }]
              }]
          }]
      }],
    "calculations" : [],
    "constraints" : [],
  }

  static newGroup = {
        id: 'group_01',
        label: 'label',
        name: 'group_name',
        onDemand: false
    }
}
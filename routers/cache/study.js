module.exports = {
    "id": "Prelude_Animal_Demo_Training",
    "name": "Prelude Animal Demo Training",
    "views": [
        {
            "id": "site",
            "groups": [
                {
                    "id": "62a38b5cdd51862f6851dd95",
                    "name": "demographics",
                    "label": "Demographics",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62a9f92fd68aca5edfc7a604",
                            "name": "demographics",
                            "label": "Demographics",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "62a9f92fd68aca5edfc7a604",
                            "includeInFormLibrary": false,
                            "isOriginal": null,
                            "_type": "formRef"
                        },
                        {
                            "id": "62aa09c0d68aca5edfc7a61a",
                            "name": "site.initiation.report",
                            "label": "Site Initiation Visit Report",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "62aa09c0d68aca5edfc7a619",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62b2218c874acf6399ddc755",
                    "name": "sponsor.information",
                    "label": "Sponsor Information",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62b2219a874acf6399ddc756",
                            "name": "sponsor.information",
                            "label": "Sponsor Information",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "62b2219a874acf6399ddc756",
                            "includeInFormLibrary": false,
                            "isOriginal": null,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62b21e7b874acf6399ddc751",
                    "name": "inventory",
                    "label": "Inventory",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "6307c507159fba3c40e44456",
                            "name": "inventory.list",
                            "label": "Inventory List",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "6307c507159fba3c40e44455",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "6307c513159fba3c40e44458",
                            "name": "inventory.received",
                            "label": "Inventory Received",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": true,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "6307c513159fba3c40e44457",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "6307c527159fba3c40e4445a",
                            "name": "inventory.dispensed",
                            "label": "Inventory Dispensed",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": true,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "6307c527159fba3c40e44459",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "6307c544159fba3c40e4445c",
                            "name": "inventory.reconciliation",
                            "label": "Inventory Reconciliation",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "6307c544159fba3c40e4445b",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62b21ebb874acf6399ddc752",
                    "name": "test.article",
                    "label": "Test Article",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62b21ed3874acf6399ddc754",
                            "name": "ship.to.site",
                            "label": "Ship to Site",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": false,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "62b21ed3874acf6399ddc753",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62b355fd874acf6399ddc758",
                            "name": "ship.to.sponsor",
                            "label": "Ship to Sponsor",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": false,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "62b355fd874acf6399ddc757",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62a9f95ad68aca5edfc7a605",
                    "name": "protocol.deviations",
                    "label": "Protocol Deviations",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62a9f969d68aca5edfc7a607",
                            "name": "deviations",
                            "label": "Protocol Deviations",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "62a9f969d68aca5edfc7a607",
                            "includeInFormLibrary": false,
                            "isOriginal": null,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62a9f961d68aca5edfc7a606",
                    "name": "notes.to.file",
                    "label": "Notes to File",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62a9f97ad68aca5edfc7a608",
                            "name": "note.to.file",
                            "label": "Note to File",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "62a9f97ad68aca5edfc7a608",
                            "includeInFormLibrary": false,
                            "isOriginal": null,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62aa007bd68aca5edfc7a60e",
                    "name": "site.visit.log",
                    "label": "Site Visit Log",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62aa0135d68aca5edfc7a613",
                            "name": "site.visit.log",
                            "label": "Site Visit Log",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "62aa0135d68aca5edfc7a612",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62aa023cd68aca5edfc7a616",
                    "name": "upload.subject.file",
                    "label": "Upload Subject File",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62aa03fed68aca5edfc7a618",
                            "name": "patient.data.upload",
                            "label": "Patient Data Upload",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62aa03fed68aca5edfc7a617",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62aa009bd68aca5edfc7a60f",
                    "name": "group.data.entry",
                    "label": "Group Data Entry",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "6329f366d6ccab219296488f",
                            "name": "group.data.entry",
                            "label": "Group Data Entry",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "6329f366d6ccab219296488e",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                }
            ],
            "_type": "view"
        },
        {
            "id": "patient",
            "groups": [
                {
                    "id": "62a38b5cdd51862f6851dd96",
                    "name": "animal.information",
                    "label": "Animal Information",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62a38b5ddd51862f6851dd9a",
                            "name": "demographics",
                            "label": "Demographics",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "62a38b5ddd51862f6851dd98",
                            "includeInFormLibrary": null,
                            "isOriginal": null,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62a9f2f4d68aca5edfc7a5f5",
                    "name": "screening",
                    "label": "Screening",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62ab4778e4ef9b5dc1686792",
                            "name": "physical.exam",
                            "label": "Physical Exam",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "62ab4777e4ef9b5dc1686791",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "630e349a159fba3c40e44464",
                            "name": "inclusion.exclusion",
                            "label": "Inclusion/Exclusion",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "630e349a159fba3c40e44463",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "6345bf004e501b5258c9df7a",
                            "name": "owner.profile",
                            "label": "Owner Profile",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "6345bf004e501b5258c9df79",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62a9f2fdd68aca5edfc7a5f6",
                    "name": "day.0",
                    "label": "Day 0",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62ab5bdbe4ef9b5dc1686796",
                            "name": "physical.exam",
                            "label": "Physical Exam",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "62ab4777e4ef9b5dc1686791",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62b4c26b874acf6399ddc765",
                            "name": "medical.history",
                            "label": "Medical History",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "62b4c26b874acf6399ddc765",
                            "includeInFormLibrary": false,
                            "isOriginal": null,
                            "_type": "formRef"
                        },
                        {
                            "id": "62b4c0ae874acf6399ddc763",
                            "name": "treatment.administration",
                            "label": "Treatment Administration",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "62b4c0ae874acf6399ddc762",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62b4c07f874acf6399ddc761",
                            "name": "idexx.labs",
                            "label": "IDEXX Labs",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62b4c07f874acf6399ddc760",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "63879a81be90500d173e454c",
                            "name": "idexx.labs.eu",
                            "label": "IDEXX Labs EU",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "63879a81be90500d173e454b",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62bb174e874acf6399ddc775",
                            "name": "lab.upload",
                            "label": "Lab Upload",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "62bb174e874acf6399ddc774",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "6329f4a1d6ccab2192964891",
                            "name": "animal.weight",
                            "label": "Animal Weight",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "6329f4a1d6ccab2192964890",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62ab8a18e4ef9b5dc16867a5",
                            "name": "qol.questionnaire",
                            "label": "QoL Questionnaire",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62ab8a18e4ef9b5dc16867a4",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62ab835ee4ef9b5dc168679f",
                            "name": "food.questionnaire",
                            "label": "Food Questionnaire",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62ab835ee4ef9b5dc168679e",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62cdd0fa86fdb03ad2cde18a",
                            "name": "vetmetrica.hrql.dog",
                            "label": "Vetmetrica HRQL (Dog)",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62cdd0fa86fdb03ad2cde189",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62e3ffe76c7f253cf8c16b7e",
                            "name": "vetmetrica.hrql.cat",
                            "label": "Vetmetrica HRQL (Cat)",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62e3ffe76c7f253cf8c16b7d",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62a9f303d68aca5edfc7a5f7",
                    "name": "day.7",
                    "label": "Day 7 +/- 2",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62b0ca0d874acf6399ddc74f",
                            "name": "physical.exam",
                            "label": "Physical Exam",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "62ab4777e4ef9b5dc1686791",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "6333b7766843645b044bb644",
                            "name": "treatment.administration",
                            "label": "Treatment Administration",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "62b4c0ae874acf6399ddc762",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62b4c310874acf6399ddc767",
                            "name": "idexx.labs",
                            "label": "IDEXX Labs",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62b4c310874acf6399ddc766",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "6387a01aa4c044207cc9f50b",
                            "name": "idexx.eu.labs",
                            "label": "IDEXX EU Labs",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "6387a01aa4c044207cc9f50a",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62bc6b12874acf6399ddc779",
                            "name": "lab.upload",
                            "label": "Lab Upload",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "62bb174e874acf6399ddc774",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "6329f58fd6ccab2192964892",
                            "name": "animal.weight",
                            "label": "Animal Weight",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "6329f4a1d6ccab2192964890",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62b0c9bc874acf6399ddc74b",
                            "name": "qol.questionnaire",
                            "label": "QoL Questionnaire",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62b0c9bc874acf6399ddc74a",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62ab8911e4ef9b5dc16867a1",
                            "name": "food.questionnaire",
                            "label": "Food Questionnaire",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62ab8911e4ef9b5dc16867a0",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62cee4f92ec5b12ecc41ec77",
                            "name": "vetmetrica.hrql.dog",
                            "label": "Vetmetrica HRQL (Dog)",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62cee4f92ec5b12ecc41ec76",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62e420bc3e4971741a8d3f31",
                            "name": "vetmetrica.hrql.cat",
                            "label": "Vetmetrica HRQL (Cat)",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62e420bc3e4971741a8d3f30",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62a9f30cd68aca5edfc7a5f8",
                    "name": "day.28",
                    "label": "Day 28 +/- 3",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62b0ca2a874acf6399ddc750",
                            "name": "physical.exam",
                            "label": "Physical Exam",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "62ab4777e4ef9b5dc1686791",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62b4c31a874acf6399ddc769",
                            "name": "idexx.labs",
                            "label": "IDEXX Labs",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62b4c31a874acf6399ddc768",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "6387a04ca4c044207cc9f50d",
                            "name": "idexx.eu.labs",
                            "label": "IDEXX EU Labs",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "6387a04ca4c044207cc9f50c",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62bc6b25874acf6399ddc77a",
                            "name": "lab.upload",
                            "label": "Lab Upload",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "62bb174e874acf6399ddc774",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "6329f59dd6ccab2192964893",
                            "name": "animal.weight",
                            "label": "Animal Weight",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "6329f4a1d6ccab2192964890",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62b0c9d0874acf6399ddc74d",
                            "name": "qol.questionnaire",
                            "label": "QoL Questionnaire",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62b0c9d0874acf6399ddc74c",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62ab891be4ef9b5dc16867a3",
                            "name": "food.questionnaire",
                            "label": "Food Questionnaire",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62ab891be4ef9b5dc16867a2",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62cee50f2ec5b12ecc41ec79",
                            "name": "vetmetrica.hrql.dog",
                            "label": "Vetmetrica HRQL (Dog)",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62cee50f2ec5b12ecc41ec78",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62e420c53e4971741a8d3f33",
                            "name": "vetmetrica.hrql.cat",
                            "label": "Vetmetrica HRQL (Cat)",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62e420c53e4971741a8d3f32",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62f15336c15dd71247ae50d3",
                    "name": "day.60",
                    "label": "Day 60 +/- 5",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62f15353c15dd71247ae50d4",
                            "name": "physical.exam",
                            "label": "Physical Exam",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "62ab4777e4ef9b5dc1686791",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62f15363c15dd71247ae50d6",
                            "name": "idexx.labs",
                            "label": "IDEXX Labs",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62f15363c15dd71247ae50d5",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "6387a05fa4c044207cc9f50f",
                            "name": "idexx.eu.labs",
                            "label": "IDEXX EU Labs",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "6387a05fa4c044207cc9f50e",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62f1537ec15dd71247ae50d7",
                            "name": "lab.upload",
                            "label": "Lab Upload",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "62bb174e874acf6399ddc774",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "6329f5aad6ccab2192964894",
                            "name": "animal.weight",
                            "label": "Animal Weight",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "6329f4a1d6ccab2192964890",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62f153a5c15dd71247ae50d9",
                            "name": "qol.questionnaire",
                            "label": "QoL Questionnaire",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62f153a5c15dd71247ae50d8",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62f153b6c15dd71247ae50db",
                            "name": "food.questionnaire",
                            "label": "Food Questionnaire",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62f153b6c15dd71247ae50da",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62f15415c15dd71247ae50dd",
                            "name": "vetmetrica.hrql.dog",
                            "label": "Vetmetrica HRQL (Dog)",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62f15415c15dd71247ae50dc",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62f15430c15dd71247ae50df",
                            "name": "vetmetrica.hrql.cat",
                            "label": "Vetmetrica HRQL (Cat)",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62f15430c15dd71247ae50de",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62a9f311d68aca5edfc7a5f9",
                    "name": "unscheduled.visit",
                    "label": "Unscheduled Visit",
                    "onDemand": true,
                    "formRefs": [
                        {
                            "id": "62b0c9fb874acf6399ddc74e",
                            "name": "physical.exam",
                            "label": "Physical Exam",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "shared",
                            "refId": "62ab4777e4ef9b5dc1686791",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "6345c41c4e501b5258c9df7c",
                            "name": "idexx.labs",
                            "label": "IDEXX Labs",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "6345c41c4e501b5258c9df7b",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "6387a082a4c044207cc9f511",
                            "name": "idexx.eu.labs",
                            "label": "IDEXX EU Labs",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "6387a082a4c044207cc9f510",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "6345c4384e501b5258c9df7e",
                            "name": "lab.upload",
                            "label": "Lab Upload",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "6345c4384e501b5258c9df7d",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62a9f317d68aca5edfc7a5fa",
                    "name": "pk",
                    "label": "PK",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62b4b234874acf6399ddc75f",
                            "name": "pk",
                            "label": "PK",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": true,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "62b4b234874acf6399ddc75e",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62ab5be8e4ef9b5dc1686797",
                    "name": "owner.observations",
                    "label": "Owner Observations",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62ab5c01e4ef9b5dc1686799",
                            "name": "owner.observations",
                            "label": "Owner Observations",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62ab5c01e4ef9b5dc1686798",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62a9f31ed68aca5edfc7a5fb",
                    "name": "adverse.events",
                    "label": "Adverse Events",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62b4cef5874acf6399ddc76a",
                            "name": "adverse.events",
                            "label": "Adverse Events",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "62b4cef5874acf6399ddc76a",
                            "includeInFormLibrary": false,
                            "isOriginal": null,
                            "_type": "formRef"
                        },
                        {
                            "id": "63371abd6843645b044bb649",
                            "name": "serious.adverse.events",
                            "label": "Serious Adverse Events",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": true,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "63371abd6843645b044bb648",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        },
                        {
                            "id": "62f15502c15dd71247ae50e1",
                            "name": "necropsy",
                            "label": "Necropsy",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": true,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "62f15502c15dd71247ae50e1",
                            "includeInFormLibrary": false,
                            "isOriginal": null,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62a9f327d68aca5edfc7a5fc",
                    "name": "concomitant.medications",
                    "label": "Concomitant Medications",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62b09038e4ef9b5dc16867ae",
                            "name": "concomitant.medications",
                            "label": "Concomitant Medications",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "62b09038e4ef9b5dc16867ad",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62a9f334d68aca5edfc7a5fd",
                    "name": "completion.removal",
                    "label": "Completion/ Removal",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62b0902ae4ef9b5dc16867ac",
                            "name": "completionremoval",
                            "label": "Completion/Removal",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "62b0902ae4ef9b5dc16867ab",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "62f1592fc15dd71247ae50e3",
                    "name": "signoff",
                    "label": "Signoff",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "62f15946c15dd71247ae50e5",
                            "name": "investigator.signoff",
                            "label": "Investigator Signoff",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "provided",
                            "refId": "62f15946c15dd71247ae50e4",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                },
                {
                    "id": "63c97415c34dad42c69196db",
                    "name": "protocol.deviations",
                    "label": "Protocol Deviations",
                    "onDemand": false,
                    "formRefs": [
                        {
                            "id": "63c980c4c34dad42c69196ea",
                            "name": "protocol.deviations",
                            "label": "Protocol Deviations",
                            "lastPublishedName": null,
                            "lastPublishedLabel": null,
                            "onDemand": null,
                            "formStatus": "live",
                            "formType": "normal",
                            "refId": "63c980c4c34dad42c69196e9",
                            "includeInFormLibrary": false,
                            "isOriginal": false,
                            "_type": "formRef"
                        }
                    ],
                    "_type": "group"
                }
            ],
            "_type": "view"
        }
    ],
    "roles": [
        {
            "id": null,
            "code": "-",
            "name": "undefined",
            "shortName": "-",
            "edits": "-",
            "assignToAllSites": null,
            "canViewComposerForms": null,
            "canBuildComposerForms": null,
            "canAddFeedback": null,
            "canAnswerFeedback": null,
            "canApproveFeedback": null,
            "canVerifyFeedback": null,
            "canArchivePatients": null,
            "canArchiveSites": null,
            "canSeeSecurityQuestion": null,
            "canTranslate": null,
            "canAssignTasks": null,
            "internalRole": null,
            "_type": "role"
        },
        {
            "id": null,
            "code": "A",
            "name": "role.administrator",
            "shortName": "Admin",
            "edits": "Admin",
            "assignToAllSites": "true",
            "canViewComposerForms": "false",
            "canBuildComposerForms": "true",
            "canAddFeedback": "true",
            "canAnswerFeedback": "true",
            "canApproveFeedback": "true",
            "canVerifyFeedback": "true",
            "canArchivePatients": "true",
            "canArchiveSites": "true",
            "canSeeSecurityQuestion": "true",
            "canTranslate": "false",
            "canAssignTasks": null,
            "internalRole": null,
            "_type": "role"
        },
        {
            "id": null,
            "code": "B",
            "name": "Biostatistician",
            "shortName": "Stat",
            "edits": "Stat",
            "assignToAllSites": "false",
            "canViewComposerForms": "false",
            "canBuildComposerForms": "false",
            "canAddFeedback": "false",
            "canAnswerFeedback": "false",
            "canApproveFeedback": "false",
            "canVerifyFeedback": "false",
            "canArchivePatients": "false",
            "canArchiveSites": "false",
            "canSeeSecurityQuestion": "false",
            "canTranslate": "false",
            "canAssignTasks": null,
            "internalRole": null,
            "_type": "role"
        },
        {
            "id": null,
            "code": "C",
            "name": "Coordinator",
            "shortName": "C",
            "edits": "C",
            "assignToAllSites": "false",
            "canViewComposerForms": "false",
            "canBuildComposerForms": "false",
            "canAddFeedback": "false",
            "canAnswerFeedback": "false",
            "canApproveFeedback": "false",
            "canVerifyFeedback": "false",
            "canArchivePatients": "false",
            "canArchiveSites": "false",
            "canSeeSecurityQuestion": "false",
            "canTranslate": "false",
            "canAssignTasks": null,
            "internalRole": null,
            "_type": "role"
        },
        {
            "id": null,
            "code": "D",
            "name": "Data Manager",
            "shortName": "DM",
            "edits": "DM",
            "assignToAllSites": "false",
            "canViewComposerForms": "false",
            "canBuildComposerForms": "false",
            "canAddFeedback": "false",
            "canAnswerFeedback": "false",
            "canApproveFeedback": "false",
            "canVerifyFeedback": "false",
            "canArchivePatients": "false",
            "canArchiveSites": "false",
            "canSeeSecurityQuestion": "false",
            "canTranslate": "false",
            "canAssignTasks": null,
            "internalRole": null,
            "_type": "role"
        },
        {
            "id": null,
            "code": "E",
            "name": "Medical Monitor",
            "shortName": "Med",
            "edits": "Med",
            "assignToAllSites": "false",
            "canViewComposerForms": "false",
            "canBuildComposerForms": "false",
            "canAddFeedback": "false",
            "canAnswerFeedback": "false",
            "canApproveFeedback": "false",
            "canVerifyFeedback": "false",
            "canArchivePatients": "false",
            "canArchiveSites": "false",
            "canSeeSecurityQuestion": "false",
            "canTranslate": "false",
            "canAssignTasks": null,
            "internalRole": null,
            "_type": "role"
        },
        {
            "id": null,
            "code": "I",
            "name": "Investigator",
            "shortName": "Inv",
            "edits": "Inv",
            "assignToAllSites": "false",
            "canViewComposerForms": "false",
            "canBuildComposerForms": "false",
            "canAddFeedback": "true",
            "canAnswerFeedback": "false",
            "canApproveFeedback": "false",
            "canVerifyFeedback": "false",
            "canArchivePatients": "false",
            "canArchiveSites": "false",
            "canSeeSecurityQuestion": "false",
            "canTranslate": "false",
            "canAssignTasks": null,
            "internalRole": null,
            "_type": "role"
        },
        {
            "id": null,
            "code": "L",
            "name": "Lab Technician",
            "shortName": "Lab",
            "edits": "Lab",
            "assignToAllSites": "false",
            "canViewComposerForms": "false",
            "canBuildComposerForms": "false",
            "canAddFeedback": "false",
            "canAnswerFeedback": "false",
            "canApproveFeedback": "false",
            "canVerifyFeedback": "false",
            "canArchivePatients": "false",
            "canArchiveSites": "false",
            "canSeeSecurityQuestion": "false",
            "canTranslate": "false",
            "canAssignTasks": null,
            "internalRole": null,
            "_type": "role"
        },
        {
            "id": null,
            "code": "M",
            "name": "Monitor",
            "shortName": "Mon",
            "edits": "Mon",
            "assignToAllSites": "false",
            "canViewComposerForms": "false",
            "canBuildComposerForms": "false",
            "canAddFeedback": "false",
            "canAnswerFeedback": "false",
            "canApproveFeedback": "false",
            "canVerifyFeedback": "false",
            "canArchivePatients": "false",
            "canArchiveSites": "false",
            "canSeeSecurityQuestion": "false",
            "canTranslate": "true",
            "canAssignTasks": null,
            "internalRole": null,
            "_type": "role"
        },
        {
            "id": null,
            "code": "N",
            "name": "Data Entry",
            "shortName": "DE",
            "edits": "DE",
            "assignToAllSites": "false",
            "canViewComposerForms": "false",
            "canBuildComposerForms": "false",
            "canAddFeedback": "false",
            "canAnswerFeedback": "false",
            "canApproveFeedback": "false",
            "canVerifyFeedback": "false",
            "canArchivePatients": "false",
            "canArchiveSites": "false",
            "canSeeSecurityQuestion": "false",
            "canTranslate": "false",
            "canAssignTasks": null,
            "internalRole": null,
            "_type": "role"
        },
        {
            "id": null,
            "code": "P",
            "name": "Project Manager",
            "shortName": "PM",
            "edits": "PM",
            "assignToAllSites": "true",
            "canViewComposerForms": "false",
            "canBuildComposerForms": "true",
            "canAddFeedback": "false",
            "canAnswerFeedback": "false",
            "canApproveFeedback": "false",
            "canVerifyFeedback": "false",
            "canArchivePatients": "false",
            "canArchiveSites": "false",
            "canSeeSecurityQuestion": "false",
            "canTranslate": "false",
            "canAssignTasks": null,
            "internalRole": null,
            "_type": "role"
        },
        {
            "id": null,
            "code": "Q",
            "name": "Quality Assurance",
            "shortName": "QA",
            "edits": "QA",
            "assignToAllSites": "false",
            "canViewComposerForms": "true",
            "canBuildComposerForms": "false",
            "canAddFeedback": "false",
            "canAnswerFeedback": "false",
            "canApproveFeedback": "false",
            "canVerifyFeedback": "false",
            "canArchivePatients": "false",
            "canArchiveSites": "false",
            "canSeeSecurityQuestion": "false",
            "canTranslate": "false",
            "canAssignTasks": null,
            "internalRole": null,
            "_type": "role"
        },
        {
            "id": null,
            "code": "S",
            "name": "Sponsor",
            "shortName": "S",
            "edits": "S",
            "assignToAllSites": "false",
            "canViewComposerForms": "false",
            "canBuildComposerForms": "false",
            "canAddFeedback": "false",
            "canAnswerFeedback": "false",
            "canApproveFeedback": "false",
            "canVerifyFeedback": "false",
            "canArchivePatients": "false",
            "canArchiveSites": "false",
            "canSeeSecurityQuestion": "false",
            "canTranslate": "false",
            "canAssignTasks": null,
            "internalRole": null,
            "_type": "role"
        },
        {
            "id": null,
            "code": "T",
            "name": "Treatment",
            "shortName": "TD",
            "edits": "TD",
            "assignToAllSites": "false",
            "canViewComposerForms": "false",
            "canBuildComposerForms": "false",
            "canAddFeedback": "false",
            "canAnswerFeedback": "false",
            "canApproveFeedback": "false",
            "canVerifyFeedback": "false",
            "canArchivePatients": "false",
            "canArchiveSites": "false",
            "canSeeSecurityQuestion": "false",
            "canTranslate": "false",
            "canAssignTasks": null,
            "internalRole": null,
            "_type": "role"
        },
        {
            "id": null,
            "code": "V",
            "name": "Veterinarian",
            "shortName": "V",
            "edits": "V",
            "assignToAllSites": "false",
            "canViewComposerForms": "false",
            "canBuildComposerForms": "false",
            "canAddFeedback": "false",
            "canAnswerFeedback": "false",
            "canApproveFeedback": "false",
            "canVerifyFeedback": "false",
            "canArchivePatients": "false",
            "canArchiveSites": "false",
            "canSeeSecurityQuestion": "false",
            "canTranslate": "false",
            "canAssignTasks": null,
            "internalRole": null,
            "_type": "role"
        },
        {
            "id": null,
            "code": "Z",
            "name": "Owner",
            "shortName": "Z",
            "edits": "Z",
            "assignToAllSites": "false",
            "canViewComposerForms": "false",
            "canBuildComposerForms": "false",
            "canAddFeedback": "false",
            "canAnswerFeedback": "false",
            "canApproveFeedback": "false",
            "canVerifyFeedback": "false",
            "canArchivePatients": "false",
            "canArchiveSites": "false",
            "canSeeSecurityQuestion": "false",
            "canTranslate": "false",
            "canAssignTasks": null,
            "internalRole": "patient",
            "_type": "role"
        }
    ],
    "studyAttributes": [
        {
            "id": null,
            "name": "contains.runtime.forms",
            "value": "true",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "server.name",
            "value": "qa1.preludedynamics.com",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "client.id",
            "value": "Prelude",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "form.library.clients",
            "value": "Prelude",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "form.library.studies",
            "value": "",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "logon.page",
            "value": "/web/global/logon.jsp",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "css.to.use",
            "value": "/vision/vision8.css,/vision/interface/interface.css,/vision/interface/themes/blue/blue_theme.css",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "header.patient.label.1",
            "value": "Subject ID",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "header.patient.field.1",
            "value": "animal.information.form.name.demographics/subject_id",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "header.patient.label.2",
            "value": "Gender",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "header.patient.field.2",
            "value": "animal.information.form.name.demographics/gender",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "header.patient.label.3",
            "value": "DOB",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "header.patient.field.3",
            "value": "animal.information.form.name.demographics/dob",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "header.patient.label.4",
            "value": "Breed",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "header.patient.field.4",
            "value": "animal.information.form.name.demographics/breed",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "application.resources",
            "value": "/studies/VISION_Composer/Composer_Template/ApplicationResources.properties",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "date.format",
            "value": "dd-MMM-yyyy",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "setup.nav.icon.order",
            "value": "on",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "project.icon",
            "value": "settings",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "date.format.with.time",
            "value": "dd-MMM-yyyy HH:mm z",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "force.calendar.use",
            "value": "true",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "notify.patient.added",
            "value": "",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "notify.query.generated",
            "value": "",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "notify.query.resolved",
            "value": "",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "notify.state.change",
            "value": "",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "notify.reviewed.or.final",
            "value": "",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "notify.roles.lab.upload",
            "value": "",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "email.return.address",
            "value": "Prelude-Animal-Demo-No-Reply@preludedynamics.com",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "password.pattern.rule",
            "value": "Abcde1",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "password.expires",
            "value": "90",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "logon.timeout.inactive",
            "value": "30",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "require.change.reason",
            "value": "true",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "add.patient.then.go.to.patient",
            "value": "true",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "requires.password.for.signature",
            "value": "true",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "export.short.names",
            "value": "true",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "smart.form.selection.patient",
            "value": "true",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "create.user.password",
            "value": "true",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "email.new.user",
            "value": "true",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "email.new.user.text",
            "value": "You can access the study by going to https://demos.PreludeDynamics.com/vision/. For any questions or concerns, please contact the Project Manager.",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "adjuncts.track.reviewed",
            "value": "true",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "default.sort.by.patient",
            "value": "0",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "default.sort.by.site",
            "value": "0",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "default.sort.by.user",
            "value": "1",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "can.autogenerate.srd",
            "value": "APM",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "MedDRA",
            "value": "/studies/VISION_Dictionaries/MedDRAAdverseEvents21.1.txt",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "MedDRA.class",
            "value": "MeddraAdverseEventsDB",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "VeDDRA",
            "value": "/studies/VISION_Dictionaries/VeDDRA_2021.txt",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "VeDDRA.class",
            "value": "LowLevelTermVeddraDB",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "VetAtcCodesByTerm",
            "value": "/studies/VISION_Dictionaries/2022VetAtcCodesByTerm.txt",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "VetAtcCodesByTerm.class",
            "value": "VetAtcDB",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "VetAtcTermsByCode",
            "value": "/studies/VISION_Dictionaries/2022VetAtcTermsByCode.txt",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "VetAtcTermsByCode.class",
            "value": "DB",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "study.demographics",
            "value": "info.form.name.admin",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "patient.id.field",
            "value": "subject_id",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "patient.logon",
            "value": "true",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "patient.profile.form",
            "value": "screening.form.name.owner.profile",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "final.review.form",
            "value": "",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "final.review.form.exclude",
            "value": "",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "final.review.form.blank",
            "value": "principal_inv_approval_name,principal_inv_approval_date,principal_inv_approval",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "site.demographics",
            "value": "demographics.form.name.demographics",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "patient.demographics",
            "value": "animal.information.form.name.demographics",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "notify.feedback.generated",
            "value": "A",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "notify.feedback.resolved",
            "value": "submitter",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "maximum.field.name.length",
            "value": "32",
            "_type": "studyAttribute"
        },
        {
            "id": null,
            "name": "lab_results_file.class",
            "value": "com.perceptivec.database.parser.labUpload.IDEXXEULabs",
            "_type": "studyAttribute"
        }
    ],
    "requireChangeReason": true,
    "prefs": {
        "defaultSiteCanDos": {},
        "defaultPatientCanDos": {}
    },
    "lastPublishedTime": 1674765837489,
    "lastPublishedBy": "jackie",
    "_type": "study"
}
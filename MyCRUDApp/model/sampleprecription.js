
/**
 * Created by Amit on 14-05-2016.
 */
module.exports={
    "_id": "56fba709da0855560bedee1e",
    "name": "BMMakkar Diabetic Template",
    "normalizedName": "bmmakkardiabetictemplate",
    "__v": 12,
    "botPad": 20,
    "topPad": 60,
    "leftPad": 15,
    "updatedDate": "2016-04-29T11:06:18.789Z",
    "createdDate": "2016-03-30T10:14:33.538Z",
    "tabs": [],
    "headerList": [
    "diabeticStatus",
    "personalInformation",
    "hOMedicalHistory",
    "treatmentHistory",
    "investigationMonitoring",
    "drugs"
],
    "sectionsPrintOrder": [],
    "formType": "default",
    "staticForm": false,
    "sections": [
    {
        "title": "Diabetic Status",
        "formName": "diabeticStatus",
        "rows": [

            {
                "type": "2columntextbox",
                "rowLevel": {
                    "hideRemoveButton": true
                },
                "columns": [
                    {
                        "defaultValue": "Duration of Diabetes(Yrs)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    ""
                ]
            },
            {
                "type": "2columntextbox",
                "rowLevel": {
                    "hideRemoveButton": true
                },
                "columns": [
                    {
                        "defaultValue": "Age at the time of detection(Yrs)"
                    },
                    {
                        "formula": "age - durationofdiabetesyrs",
                        "localvar": "durationofdiabetesyrs",
                        "globalvar": "age"
                    }
                ],
                "uiData": [
                    "",
                    ""
                ]
            },
            {
                "type": "3columnRadio",
                "rowLevel": {
                    "hideRemoveButton": true
                },
                "columns": [
                    {
                        "defaultValue": "Any complication of Diabetes"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "2columntextbox",
                "rowLevel": {
                    "hideRemoveButton": true
                },
                "columns": [
                    {
                        "defaultValue": "Duration of Complication"
                    },
                    {
                        "hideRemoveButton": "true"
                    }
                ],
                "uiData": [
                    "",
                    ""
                ]
            }
        ],
        "printFlag": false
    },
    {
        "title": "Complaints",
        "formName": "complaints",
        "showType": "list",
        "rows": [
            {
                "type": "3columnRadio",
                "columns": [
                    {
                        "defaultValue": "SMBG"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "PositiveNegative",
                    ""
                ]
            },
            {
                "type": "3columnRadio",
                "columns": [
                    {
                        "defaultValue": "H/O Snoring"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "PositiveNegative",
                    ""
                ]
            },
            {
                "type": "2columnDefault",
                "columns": [],
                "uiData": []
            }
        ],
        "printFlag": false
    },
    {
        "title": "Presenting Complaints At Onset",
        "formName": "presentingComplaintsAtOnset",
        "showType": "compact",
        "rows": [
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "B.Sugar at OnSet"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Frequent Urination"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Excessive Thirst"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Increased Appetite"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Body ache"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Diagnosed During Routine Checkup"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Impotence"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Lethargy"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Numbness Feet/Hand"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Weakness"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Weight Loss"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Leg Pains"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Shoulder Pain"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Genital Infection"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Skin Infection"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Non healing wounds"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Itching"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Blurring of vision"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            }
        ],
        "printFlag": false
    },
    {
        "title": "Personal Info",
        "formName": "personalInformation",
        "showType": "compact",
        "rows": [
            {
                "type": "2columnDropDown",
                "columns": [
                    {
                        "defaultValue": "Category"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "ruralUrban"
                ]
            },
            {
                "type": "3columnDefaultReadonly",
                "columns": [
                    {
                        "defaultValue": "Socio-Economic"
                    },
                    null,
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "Eating Habits"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "meal"
                ]
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "Eating Out/week"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "3columnDefaultReadonly",
                "columns": [
                    {
                        "defaultValue": "Number of Meals/day"
                    },
                    null,
                    null
                ],
                "uiData": []
            },
            {
                "type": "3columnDefaultReadonly",
                "columns": [
                    {
                        "defaultValue": "Approx Kcal"
                    },
                    null,
                    null
                ],
                "uiData": []
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Smoking"
                    },
                    {
                        "id": "personalhistorysmoking",
                        "class": "displayparent"
                    },
                    {
                        "type": "hidden"
                    }
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columntextbox",
                "rowLevel": {
                    "id": "personalhistorysmokduration",
                    "class": "deferRendering hide",
                    "displaycondition": [
                        {
                            "source": "personalhistorysmoking",
                            "operation": "equal",
                            "value": "Yes"
                        }
                    ]
                },
                "columns": [
                    {
                        "defaultValue": "Smoking",
                        "type": "hidden"
                    },
                    {
                        "defaultValue": "Duration"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columntextbox",
                "rowLevel": {
                    "id": "personalhistorysmoknoofcig",
                    "class": "deferRendering hide",
                    "displaycondition": [
                        {
                            "source": "personalhistorysmoking",
                            "operation": "equal",
                            "value": "Yes"
                        }
                    ]
                },
                "columns": [
                    {
                        "defaultValue": "Smoking",
                        "type": "hidden"
                    },
                    {
                        "defaultValue": "No of Cigarettes Per day"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Alcohol"
                    },
                    {
                        "id": "personalhistoryalcohol",
                        "class": "displayparent"
                    },
                    {
                        "type": "hidden"
                    }
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columntextbox",
                "rowLevel": {
                    "id": "personalhistoryalcoduration",
                    "class": "deferRendering hide",
                    "displaycondition": [
                        {
                            "source": "personalhistoryalcohol",
                            "operation": "equal",
                            "value": "Yes"
                        }
                    ]
                },
                "columns": [
                    {
                        "defaultValue": "Alcohol",
                        "type": "hidden"
                    },
                    {
                        "defaultValue": "Duration"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columntextbox",
                "rowLevel": {
                    "id": "personalhistoryalcoamount",
                    "class": "deferRendering hide",
                    "displaycondition": [
                        {
                            "source": "personalhistoryalcohol",
                            "operation": "equal",
                            "value": "Yes"
                        }
                    ]
                },
                "columns": [
                    {
                        "defaultValue": "Alcohol",
                        "type": "hidden"
                    },
                    {
                        "defaultValue": "Amount(ml/d)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columntextbox",
                "rowLevel": {
                    "id": "personalhistoryalcofrequency",
                    "class": "deferRendering hide",
                    "displaycondition": [
                        {
                            "source": "personalhistoryalcohol",
                            "operation": "equal",
                            "value": "Yes"
                        }
                    ]
                },
                "columns": [
                    {
                        "defaultValue": "Alcohol",
                        "type": "hidden"
                    },
                    {
                        "defaultValue": "Frequency"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Tobacco"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "Physical Activity",
                        "elementType": "groupstart"
                    }
                ],
                "uiData": []
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Sedentary"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Moderate"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Heavy"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "Regular Exercise",
                        "elementType": "groupstart"
                    }
                ],
                "uiData": []
            },
            {
                "type": "2columnDropDown",
                "columns": [
                    {
                        "defaultValue": "Do you exercise ?"
                    },
                    {
                        "id": "personalhistorydoyouexercise",
                        "class": "displayparent"
                    }
                ],
                "uiData": [
                    "",
                    "yesNo"
                ]
            },
            {
                "type": "3column1HiddentextboxCheckbox",
                "rowLevel": {
                    "id": "personalhistoryifyeshowoften",
                    "class": "deferRendering hide",
                    "displaycondition": [
                        {
                            "source": "personalhistorydoyouexercise",
                            "operation": "equal",
                            "value": "Yes"
                        }
                    ]
                },
                "columns": [
                    {
                        "defaultValue": "Do you exercise ?"
                    },
                    {
                        "defaultValue": "If yes,How often ?"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "",
                    "regularexcercisecb"
                ]
            },
            {
                "type": "3column1HiddentextboxCheckbox",
                "rowLevel": {
                    "id": "personalhistorydurationofexercise",
                    "class": "deferRendering hide",
                    "displaycondition": [
                        {
                            "source": "personalhistorydoyouexercise",
                            "operation": "equal",
                            "value": "Yes"
                        }
                    ]
                },
                "columns": [
                    {
                        "defaultValue": "Do you exercise ?"
                    },
                    {
                        "defaultValue": "Duration of exercise"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "",
                    "physicalduration"
                ]
            },
            {
                "type": "3column1HiddentextboxCheckbox",
                "rowLevel": {
                    "id": "personalhistorytypeofexercise",
                    "class": "deferRendering hide",
                    "displaycondition": [
                        {
                            "source": "personalhistorydoyouexercise",
                            "operation": "equal",
                            "value": "Yes"
                        }
                    ]
                },
                "columns": [
                    {
                        "defaultValue": "Do you exercise ?"
                    },
                    {
                        "defaultValue": "Type of Exercise"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "",
                    "typeofexercise"
                ]
            },
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "Regular Exercise",
                        "elementType": "groupend",
                        "type": "hidden"
                    }
                ],
                "uiData": []
            },
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "Physical Activity",
                        "elementType": "groupend",
                        "type": "hidden"
                    }
                ],
                "uiData": []
            }
        ],
        "printFlag": false
    },
    {
        "title": "H/O Medical Illness",
        "formName": "hOMedicalHistory",
        "showType": "compact",
        "rows": [
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Hypertension"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Heart Disease"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Diabetes"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Pulm TB"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Kidney DS"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Obesity"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Thyroid"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            }
        ],
        "printFlag": false
    },
    {
        "title": "Family History",
        "formName": "familyHistory",
        "showType": "compact",
        "rows": [
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Diabetes"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Hypertension"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Kidney DS"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Obesity"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "CAD"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Thyroid"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            }
        ],
        "printFlag": false
    },
    {
        "title": "Family History Of Diabetes",
        "formName": "familyHistoryOfDiabetes",
        "showType": "compact",
        "rows": [
            {
                "type": "2columnCheckBox",
                "columns": [
                    {
                        "defaultValue": "Family History Of Diabetes"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "FamilyData"
                ]
            },
            {
                "type": "2columnCheckBox",
                "columns": [
                    {
                        "defaultValue": "Paternal"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "PaternalData"
                ]
            },
            {
                "type": "2columnCheckBox",
                "columns": [
                    {
                        "defaultValue": "Maternal"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "MaternalData"
                ]
            },
            {
                "type": "2columnCheckBox",
                "columns": [
                    {
                        "defaultValue": "Children"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "chidrendatackb"
                ]
            },
            {
                "type": "2columnCheckBox",
                "columns": [
                    {
                        "defaultValue": "Spouse"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "SpouseData"
                ]
            }
        ],
        "printFlag": false
    },
    {
        "title": "Treatment History",
        "formName": "treatmentHistory",
        "showType": "table",
        "rows": [
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "Treatment History-Diabetes"
                    }
                ],
                "uiData": [
                    ""
                ]
            },
            {
                "type": "3column1st0shiddtextbox",
                "columns": [
                    {
                        "defaultValue": "Treatment History-Diabetes"
                    },
                    {
                        "defaultValue": "Drug 1"
                    },
                    {
                        "class": "autoSuggestElement",
                        "autosuggestname": "drugs"
                    }
                ],
                "uiData": [
                    "",
                    "",
                    ""
                ]
            },
            {
                "type": "3column1st0shiddtextbox",
                "columns": [
                    {
                        "defaultValue": "Treatment History-Diabetes"
                    },
                    {
                        "defaultValue": "Drug 2"
                    },
                    {
                        "class": "autoSuggestElement",
                        "autosuggestname": "drugs"
                    }
                ],
                "uiData": [
                    "",
                    "",
                    ""
                ]
            },
            {
                "type": "3column1st0shiddtextbox",
                "columns": [
                    {
                        "defaultValue": "Treatment History-Diabetes"
                    },
                    {
                        "defaultValue": "Drug 3"
                    },
                    {
                        "class": "autoSuggestElement",
                        "autosuggestname": "drugs"
                    }
                ],
                "uiData": [
                    "",
                    "",
                    ""
                ]
            },
            {
                "type": "3column1st0shiddtextbox",
                "columns": [
                    {
                        "defaultValue": "Treatment History-Diabetes"
                    },
                    {
                        "defaultValue": "Drug 4"
                    },
                    {
                        "class": "autoSuggestElement",
                        "autosuggestname": "drugs"
                    }
                ],
                "uiData": [
                    "",
                    "",
                    ""
                ]
            },
            {
                "type": "3column1st0shiddtextbox",
                "columns": [
                    {
                        "defaultValue": "Treatment History-Diabetes"
                    },
                    {
                        "defaultValue": "Drug 5"
                    },
                    {
                        "class": "autoSuggestElement",
                        "autosuggestname": "drugs"
                    }
                ],
                "uiData": [
                    "",
                    "",
                    ""
                ]
            },
            {
                "type": "3columnTextareaValue",
                "columns": [
                    {
                        "defaultValue": "Treatment History-Diabetes",
                        "type": "hidden"
                    },
                    {
                        "defaultValue": "More Drugs"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "",
                    ""
                ]
            },
            {
                "type": "3columnRadio",
                "columns": [
                    {
                        "defaultValue": "Insulin"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "regularIrregular",
                    ""
                ]
            },
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "Treatment Hypertension/Heart Disease"
                    }
                ],
                "uiData": [
                    ""
                ]
            },
            {
                "type": "3column1st0shiddtextbox",
                "columns": [
                    {
                        "defaultValue": "Treatment Hypertension/Heart Disease"
                    },
                    {
                        "defaultValue": "Drug"
                    },
                    {
                        "class": "autoSuggestElement",
                        "autosuggestname": "drugs"
                    }
                ],
                "uiData": [
                    "",
                    "",
                    ""
                ]
            },
            {
                "type": "3columnRadio",
                "columns": [
                    {
                        "defaultValue": "Oral Drugs"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "regularIrregular",
                    ""
                ]
            },
            {
                "type": "3columnRadio",
                "columns": [
                    {
                        "defaultValue": "Alternative Treatment"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "regularIrregular",
                    ""
                ]
            }
        ],
        "printFlag": false
    },
    {
        "title": "Examination",
        "formName": "examinationNonMonitoring",
        "showType": "compact",
        "rows": [
            {
                "type": "3columnRadio",
                "columns": [
                    {
                        "defaultValue": " Pallor"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadio",
                "columns": [
                    {
                        "defaultValue": "Oedema"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadio",
                "columns": [
                    {
                        "defaultValue": "Cyanosis"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadio",
                "columns": [
                    {
                        "defaultValue": "Icterus"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadio",
                "columns": [
                    {
                        "defaultValue": "Acanthosis"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadio",
                "columns": [
                    {
                        "defaultValue": "Skin Tags"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columnRadio",
                "columns": [
                    {
                        "defaultValue": "Buffalo Hump"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck",
                    ""
                ]
            },
            {
                "type": "3columntextboxRadio",
                "columns": [
                    {
                        "defaultValue": "Pulse/Min"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "",
                    "regularIrregular"
                ]
            },
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "Peripheral Pulses"
                    }
                ],
                "uiData": [
                    ""
                ]
            },
            {
                "type": "3columnRadioTextbox",
                "columns": [
                    {
                        "defaultValue": "Radials"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "presentabsent",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextbox",
                "columns": [
                    {
                        "defaultValue": "Brachials"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "presentabsent",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextbox",
                "columns": [
                    {
                        "defaultValue": "Carotids"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "presentabsent",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextbox",
                "columns": [
                    {
                        "defaultValue": "Femorals"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "presentabsent",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextbox",
                "columns": [
                    {
                        "defaultValue": "Popliteals"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "presentabsent",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextbox",
                "columns": [
                    {
                        "defaultValue": "Post tibials"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "presentabsent",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextbox",
                "columns": [
                    {
                        "defaultValue": "D.Pedis"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "presentabsent",
                    ""
                ]
            },
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "BP(mm Hg)",
                        "elementType": "groupstart"
                    }
                ],
                "uiData": [
                    ""
                ]
            },
            {
                "type": "tableColumnMonofilament",
                "columns": [
                    {
                        "defaultValue": "BP(mm Hg)",
                        "type": "hidden"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "bpinmmhg"
                ]
            },
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "BP(mm Hg)",
                        "elementType": "groupend",
                        "type": "hidden"
                    }
                ],
                "uiData": [
                    ""
                ]
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "Pupils(R)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "normalAbnormal"
                ]
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "Pupils(L)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "normalAbnormal"
                ]
            },
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "Systemic Examination"
                    }
                ],
                "uiData": []
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "ABD"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "normalAbnormal",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Chest"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "normalAbnormal",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "CVS"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "normalAbnormal",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "CNS"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "normalAbnormal",
                    ""
                ]
            },
            {
                "type": "3columnRadioTextarea",
                "columns": [
                    {
                        "defaultValue": "Skin"
                    },
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "normalAbnormal",
                    ""
                ]
            },
            {
                "type": "tableColumnDtr",
                "columns": [
                    null,
                    null
                ],
                "uiData": [
                    "",
                    "DTRtbl"
                ]
            },
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "Foot Exam"
                    }
                ],
                "uiData": []
            },
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "10mg Monofilament"
                    }
                ],
                "uiData": []
            },
            {
                "type": "tableColumnMonofilament",
                "columns": [
                    {
                        "defaultValue": "Foot Exam",
                        "type": "hidden"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "footExam"
                ]
            },
            {
                "type": "3columntextboxCheckbox",
                "columns": [
                    {
                        "defaultValue": "NSS"
                    },
                    {
                        "defaultValue": "Burning/Numbness or tingling"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "",
                    "ZeroTwo"
                ]
            },
            {
                "type": "3column1HiddentextboxCheckbox",
                "columns": [
                    {
                        "defaultValue": "NSS"
                    },
                    {
                        "defaultValue": "Fatigue,Cramping or Aching"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "",
                    "ZeroOne"
                ]
            },
            {
                "type": "3column1HiddentextboxCheckbox",
                "columns": [
                    {
                        "defaultValue": "NSS"
                    },
                    {
                        "defaultValue": "Nocturnal Exacerbation"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "",
                    "ZeroTwo"
                ]
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "Ankle(R)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "ZeroOneTwo"
                ]
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "Ankle(L)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "ZeroOneTwo"
                ]
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "Vibration(R)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "ZeroOne"
                ]
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "Vibration(L)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "ZeroOne"
                ]
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "MF(R)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "ZeroOne"
                ]
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "MF(L)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "ZeroOne"
                ]
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "Temperature(R)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "ZeroOne"
                ]
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "Temperature(L)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "ZeroOne"
                ]
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "Pain(R)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "ZeroOne"
                ]
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "Pain(L)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "ZeroOne"
                ]
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "Sharp(R)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "ZeroOne"
                ]
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "Sharp(L)"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "ZeroOne"
                ]
            }
        ],
        "printFlag": false
    },
    {
        "title": "Investigations",
        "formName": "investigationMonitoring",
        "showType": "compact",
        "rows": [
            {
                "type": "2columnDate",
                "columns": [
                    {
                        "defaultValue": "Date"
                    },
                    {
                        "defaultValue": "empty"
                    }
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "HB A 1C"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "Urine Microalb"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "BUN"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "B.Urea"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "Creat"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "eGFR"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "Uric Acid"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "Mau:Creat"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "Na/K"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "S.Insulin"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "hsCRP"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "CHOL"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "LDL"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "HDL"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "TG"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "VLDL"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "TOT/HDL"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "Hb"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "TLC/DLC"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "ESR"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "SGOT"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "SGPT"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "T3"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "T4"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "TSH"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "GTT-FBS"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "GTT-1st Hr"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "GTT-2nd Hr"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "X-Ray Chest"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "Vit D25"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "Vit B12"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": " Urine R/m"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "ECG"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "TMT"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "Echocardiography"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "BCA-Body Fat(%)"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "BCA-Fat Mass(Kg)"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "BCA-Muscle Mass(KG)"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "BCA-Bone Mass(KG)"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "3columnDefaultHidden",
                "columns": [
                    {
                        "defaultValue": "Fundus"
                    },
                    null,
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "VPT(R)"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "VPT(L)"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "tableColumnDtr",
                "columns": [
                    {
                        "defaultValue": "NCV"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "NCVdata"
                ]
            },
            {
                "type": "tableColumnDtr",
                "columns": [
                    {
                        "defaultValue": "Vascular Profile"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "footdopplertbl"
                ]
            },
            {
                "type": "2columnSmall",
                "columns": [
                    {
                        "defaultValue": "Pwvcf"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "Dyanasys"
                    }
                ],
                "uiData": []
            },
            {
                "type": "2columnSmall",
                "columns": [
                    {
                        "defaultValue": "Auto Dysf(%)"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columnSmall",
                "columns": [
                    {
                        "defaultValue": "DAN/CAN"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "CAN"
                    }
                ],
                "uiData": []
            },
            {
                "type": "2columnSmall",
                "columns": [
                    {
                        "defaultValue": "RHR"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columnSmall",
                "columns": [
                    {
                        "defaultValue": "E:I"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columnSmall",
                "columns": [
                    {
                        "defaultValue": "30:15"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columnSmall",
                "columns": [
                    {
                        "defaultValue": "Val R"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columnSmall",
                "columns": [
                    {
                        "defaultValue": "Falling SBP"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columnSmall",
                "columns": [
                    {
                        "defaultValue": " Rising DBP"
                    },
                    null
                ],
                "uiData": []
            }
        ],
        "printFlag": false
    },
    {
        "title": "LSM",
        "formName": "lsm",
        "rows": [
            {
                "type": "2columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "Diet"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "Physical Activity"
                    },
                    null
                ],
                "uiData": []
            }
        ],
        "printFlag": true
    },
    {
        "title": "Monitoring",
        "formName": "monitoring",
        "rows": [
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "BP(mm Hg)",
                        "elementType": "groupstart"
                    }
                ],
                "uiData": [
                    ""
                ]
            },
            {
                "type": "3columntextbox",
                "columns": [
                    {
                        "defaultValue": "BP(mm Hg)",
                        "type": "hidden"
                    },
                    {
                        "defaultValue": "Systolic"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "3columntextbox",
                "columns": [
                    {
                        "defaultValue": "BP(mm Hg)",
                        "type": "hidden"
                    },
                    {
                        "defaultValue": "Diastolic"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "1columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "BP(mm Hg)",
                        "elementType": "groupend",
                        "type": "hidden"
                    }
                ],
                "uiData": [
                    ""
                ]
            },
            {
                "type": "2columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "Weight(Kg)"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "FBS(mg/dl)"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "RBS(mg/dl)"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "P/R(Per min)"
                    },
                    null
                ],
                "uiData": []
            }
        ],
        "printFlag": true
    },
    {
        "title": "Monitoring Data",
        "formName": "monitoringdata",
        "showType": "compact",
        "rows": [
            {
                "type": "2columnDate",
                "columns": [
                    {
                        "defaultValue": "Date"
                    },
                    {
                        "defaultValue": "empty"
                    }
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "Neck Circumference"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "Height(cm)"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "Weight(Kg)"
                    },
                    {
                        "placeholder": "Enter Value (in kg)"
                    }
                ],
                "uiData": []
            },
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "Waist(cm)"
                    },
                    {
                        "placeholder": "Enter Value(in cms)"
                    }
                ],
                "uiData": []
            },
            {
                "type": "3columnDefaultReadonly",
                "columns": [
                    {
                        "defaultValue": "Hip"
                    },
                    null,
                    null
                ],
                "uiData": []
            },
            {
                "type": "3columnDefaultReadonly",
                "columns": [
                    {
                        "defaultValue": "WHR"
                    },
                    {
                        "formula": "(waistcm/heightcm)",
                        "localvar": "waistcm,heightcm"
                    },
                    {
                        "type": "hidden"
                    }
                ],
                "uiData": []
            },
            {
                "type": "3columnDefaultReadonly",
                "columns": [
                    {
                        "defaultValue": "BMI"
                    },
                    {
                        "formula": "(weightkg/(heightcm^2))*10000",
                        "localvar": "weightkg,heightcm"
                    },
                    {
                        "type": "hidden"
                    }
                ],
                "uiData": []
            },
            {
                "type": "3columnDefaultReadonly",
                "columns": [
                    {
                        "defaultValue": "FBS"
                    },
                    null,
                    null
                ],
                "uiData": []
            },
            {
                "type": "3columnDefaultReadonly",
                "columns": [
                    {
                        "defaultValue": "BS-PP"
                    },
                    null,
                    null
                ],
                "uiData": []
            },
            {
                "type": "3columnDefaultReadonly",
                "columns": [
                    {
                        "defaultValue": "BS-Pre Lunch"
                    },
                    null,
                    null
                ],
                "uiData": []
            },
            {
                "type": "3columnDefaultReadonly",
                "columns": [
                    {
                        "defaultValue": "BS-Post Lunch"
                    },
                    null,
                    null
                ],
                "uiData": []
            },
            {
                "type": "3columnDefaultReadonly",
                "columns": [
                    {
                        "defaultValue": "BS-Pre Dinner"
                    },
                    null,
                    null
                ],
                "uiData": []
            },
            {
                "type": "3columnDefaultReadonly",
                "columns": [
                    {
                        "defaultValue": "RBS"
                    },
                    null,
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "Fundus"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "2columntextboxreadonly",
                "columns": [
                    {
                        "defaultValue": "Other Investigations"
                    },
                    null
                ],
                "uiData": []
            }
        ],
        "printFlag": false
    },
    {
        "title": "Diagnosis",
        "formName": "diagnosis",
        "showType": "compact",
        "rows": [
            {
                "type": "2columnDefault",
                "columns": [],
                "uiData": []
            }
        ],
        "printFlag": true
    },
    {
        "title": "Drugs",
        "formName": "drugs",
        "showType": "table",
        "rows": [
            {
                "type": "2columntextbox",
                "columns": [
                    {
                        "defaultValue": "No. of Days"
                    },
                    null
                ],
                "uiData": []
            },
            {
                "type": "5columnDrug",
                "columns": [],
                "uiData": []
            }
        ],
        "printFlag": true
    },
    {
        "title": "Advise",
        "formName": "advise",
        "showType": "list",
        "rows": [
            {
                "type": "2columnCheckBox",
                "columns": [
                    {
                        "defaultValue": "Blood Sugar"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "fpppredinnercb"
                ]
            },
            {
                "type": "2columnRadio",
                "columns": [
                    {
                        "defaultValue": "Hypoglycaimia Explained"
                    },
                    null
                ],
                "uiData": [
                    "",
                    "yesNoCheck"
                ]
            },
            {
                "type": "1columnDefault",
                "columns": [],
                "uiData": []
            },
            {
                "type": "2columnDate",
                "columns": [
                    {
                        "defaultValue": "Next Visit On"
                    },
                    {
                        "sectionvar": "drugs:noofdays",
                        "formula": "addDate",
                        "allowfuturedate": "true",
                        "defaultValue": "empty"
                    }
                ],
                "uiData": []
            }
        ],
        "printFlag": true
    }
],
    "hideTemplate": false,
    "doctorIds": [
    "570de4b1c8fb0729407c51e3"
]
}
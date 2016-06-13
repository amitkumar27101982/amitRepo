/**
 * Created by Amit on 14-05-2016.
 */
module.exports={
    "name":"sample prescription",
    "headerList":["section1","section2"],
    "sections":[
        {
            "title":"Section 1",
            "formName":"section1",
            "rows":[
                {
                    "type": "2columntextbox",

                    "columns": [
                        {
                            "defaultValue": "Test 1"
                        },
                        {}


                    ],
                    "uiData":["",""]
                },
                {
                    "type": "2columntextbox",

                    "columns": [
                        {
                            "defaultValue": "Test 2"
                        },
                        {}


                    ],
                    "uiData":["",""]
                }
            ]

        },
        {
            "title":"Section 2",
            "formName":"section2",
            "rows":[

                {
                    "type": "3columnRadio",
                    "columns": [
                        {
                            "defaultValue": "Are you hungry"
                        },
                        {},
                        {}
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
                            "defaultValue": "had your lunch"
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
            ]
        }
    ]
}
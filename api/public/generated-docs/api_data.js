define({ "api": [
  {
    "type": "get",
    "url": "/api/devices",
    "title": "AllDevices An array of all devices",
    "group": "Device",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [\n      {   \"_id\": \"dsohsdohsdofhsofhosfhsofh\",\n          \"name\": \"Mary's iPhone\",\n          \"user\": \"mary\",\n           \"sensorData\":[\n            {       \n             \"ts\": \"1529542230\",   \n              \"temp\": 12,*      \n              \"loc\": { \n                \"lat\": -37.84674,\n                \"lon\": 145.115113*        \n            }\n      },    \n      {   \n              \"ts\": \"1529572230\",\n              \"temp\": 17,\n              \"loc\": {\n                 \"lat\": -37.850026,\n                 \"lon\": 145.117683      \n            }\n      }\n           \"id\": 2,\n           \"name\": \"Sam's iPhone\",\n           \"user\": \"sam\",\n           \"sensorData\": [\n            {\n             \"ts\": \"1529572230\",\n              \"temp\": 14,\n               \"loc\": {\n                  \"lat\": -37.850026,\n                  \"lon\": 145.117683\n                 }\n             }\n      {\n               \"id\":4\n              \"name\": \"Bob's Samsung Galaxy\",\n              \"user\": \"bob\",\n              \"sensorData\": [\n             {\n               \"ts\": \"1529545935\",\n                \"temp\": 14,\n                \"loc\": {\n                   \"lat\": -37.839587,\n                   \"lon\": 145.101386\n             }\n       }\n\n      }\n      ] \n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "{\n   \"User does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.js",
    "groupTitle": "Device",
    "name": "GetApiDevices"
  }
] });

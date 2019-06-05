define({ "api": [
  {
    "type": "post",
    "url": "/heroAcademia/history",
    "title": "Create",
    "version": "0.0.1",
    "name": "Create",
    "group": "history",
    "description": "<p>Creates new history data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n    {\n    \"angerLevel\": \"19029\",\n    \"optimismLevel\": \"18207\",\n    \"enemyDefeat\": \"44292\",\n    \"archNemesis\": \"Natoque pharetra suscipit elit dui.\",\n    \"battleGroundDefeat\": \"27481\",\n    \"enemyCapture\": \"55181\",\n    \"alive\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "angerLevel",
            "description": "<ul> <li>angerLevel</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "optimismLevel",
            "description": "<ul> <li>optimismLevel</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "enemyDefeat",
            "description": "<ul> <li>enemyDefeat</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "archNemesis",
            "description": "<ul> <li>archNemesis</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "battleGroundDefeat",
            "description": "<ul> <li>battleGroundDefeat</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "enemyCapture",
            "description": "<ul> <li>enemyCapture</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "alive",
            "description": "<ul> <li>alive</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "angerLevel",
            "description": "<ul> <li>angerLevel</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "optimismLevel",
            "description": "<ul> <li>optimismLevel</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "enemyDefeat",
            "description": "<ul> <li>enemyDefeat</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "archNemesis",
            "description": "<ul> <li>archNemesis</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "battleGroundDefeat",
            "description": "<ul> <li>battleGroundDefeat</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "enemyCapture",
            "description": "<ul> <li>enemyCapture</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "alive",
            "description": "<ul> <li>alive</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "__v",
            "description": "<ul> <li>Version</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>Id</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstModified",
            "description": "<ul> <li>First modified</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastModified",
            "description": "<ul> <li>Last modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n    {\n    \"angerLevel\": \"19029\",\n    \"optimismLevel\": \"18207\",\n    \"enemyDefeat\": \"44292\",\n    \"archNemesis\": \"Natoque pharetra suscipit elit dui.\",\n    \"battleGroundDefeat\": \"27481\",\n    \"enemyCapture\": \"55181\",\n    \"alive\": true,\n    \"__v\": \"26\",\n    \"firstModified\": \"2019-06-05T14:42:59.587Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.587Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267ac5\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/history"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/history.js",
    "groupTitle": "history"
  },
  {
    "type": "delete",
    "url": "/heroAcademia/history",
    "title": "Delete",
    "version": "0.0.1",
    "name": "Delete",
    "group": "history",
    "description": "<p>Deletes history data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "angerLevel",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "optimismLevel",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "enemyDefeat",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "archNemesis",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "battleGroundDefeat",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "enemyCapture",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "alive",
            "defaultValue": "undefined",
            "description": "<ul> <li>Boolean</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully deleted</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/history"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/history.js",
    "groupTitle": "history"
  },
  {
    "type": "get",
    "url": "/heroAcademia/history",
    "title": "Get",
    "version": "0.0.1",
    "name": "Get",
    "group": "history",
    "description": "<p>Retrieves history data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<ul> <li>Page Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "id",
            "description": "<ul> <li>Sort order by</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "lean",
            "defaultValue": "false",
            "description": "<ul> <li>Lean</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<ul> <li>Offset</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "12",
            "description": "<ul> <li>Limit of return</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "angerLevel",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "optimismLevel",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "enemyDefeat",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "archNemesis",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "battleGroundDefeat",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "enemyCapture",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "alive",
            "defaultValue": "undefined",
            "description": "<ul> <li>Boolean</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "docs",
            "description": "<ul> <li>Documents array result</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<ul> <li>Total number of retrieved results</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<ul> <li>Limit of a single return</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<ul> <li>Offset</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n        \"docs\": [\n\n    {\n    \"angerLevel\": \"10871\",\n    \"optimismLevel\": \"62837\",\n    \"enemyDefeat\": \"67267\",\n    \"archNemesis\": \"Cursus condimentum elit eti massa.\",\n    \"battleGroundDefeat\": \"72703\",\n    \"enemyCapture\": \"94067\",\n    \"alive\": true,\n    \"__v\": \"84\",\n    \"firstModified\": \"2019-06-05T14:42:59.589Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.589Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267ac6\"\n},\n    {\n    \"angerLevel\": \"4738\",\n    \"optimismLevel\": \"12350\",\n    \"enemyDefeat\": \"63532\",\n    \"archNemesis\": \"Quis dignissim sed in elit.\",\n    \"battleGroundDefeat\": \"32540\",\n    \"enemyCapture\": \"42790\",\n    \"alive\": false,\n    \"__v\": \"70\",\n    \"firstModified\": \"2019-06-05T14:42:59.591Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.591Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267ac7\"\n},\n    {\n    \"angerLevel\": \"60446\",\n    \"optimismLevel\": \"36115\",\n    \"enemyDefeat\": \"10367\",\n    \"archNemesis\": \"Aliquam bibendum lacinia adipiscing sagittis.\",\n    \"battleGroundDefeat\": \"52731\",\n    \"enemyCapture\": \"86470\",\n    \"alive\": true,\n    \"__v\": \"22\",\n    \"firstModified\": \"2019-06-05T14:42:59.592Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.592Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267ac8\"\n}\n            \n        ],\n        \"total\": 12,\n        \"limit\": 3,\n        \"offset\": 0\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/history"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/history.js",
    "groupTitle": "history"
  },
  {
    "type": "put",
    "url": "/heroAcademia/history",
    "title": "Update",
    "version": "0.0.1",
    "name": "Update",
    "group": "history",
    "description": "<p>Updates new history data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n    {\n    \"angerLevel\": \"99810\",\n    \"optimismLevel\": \"35616\",\n    \"enemyDefeat\": \"37972\",\n    \"archNemesis\": \"Lorem risus hendrerit laoreet pharetra.\",\n    \"battleGroundDefeat\": \"90293\",\n    \"enemyCapture\": \"72646\",\n    \"alive\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "angerLevel",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "optimismLevel",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "enemyDefeat",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "archNemesis",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "battleGroundDefeat",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "enemyCapture",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "alive",
            "defaultValue": "undefined",
            "description": "<ul> <li>Boolean</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nModified",
            "description": "<ul> <li>Number of objects modified based on query</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"nModified\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/history"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/history.js",
    "groupTitle": "history"
  },
  {
    "type": "post",
    "url": "/heroAcademia/student",
    "title": "Create",
    "version": "0.0.1",
    "name": "Create",
    "group": "student",
    "description": "<p>Creates new student data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n    {\n    \"name\": \"Theo\",\n    \"age\": \"77\",\n    \"gender\": \"Vel in eros accumsan hendrerit.\",\n    \"powerClass\": \"Curabitur purus mi lacinia sodales.\",\n    \"superPower\": \"Mollis blandit diam nam eget.\",\n    \"costume\": \"Bibendum blandit pulvinar turpis vehicula.\",\n    \"powerGrade\": \"Ipsum scelerisque leo massa vitae.\",\n    \"tournament\": \"5cf7d4e4e619986d4a267ab8\",\n    \"history\": \"5cf7d4e4e619986d4a267ab8\",\n    \"wins\": \"34154\",\n    \"loss\": \"82217\",\n    \"draw\": \"25497\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>name</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<ul> <li>age</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<ul> <li>gender</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "powerClass",
            "description": "<ul> <li>powerClass</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "superPower",
            "description": "<ul> <li>superPower</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "costume",
            "description": "<ul> <li>costume</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "powerGrade",
            "description": "<ul> <li>powerGrade</li> </ul>"
          },
          {
            "group": "Body",
            "type": "ObjectId",
            "optional": false,
            "field": "tournament",
            "description": "<ul> <li>tournament</li> </ul>"
          },
          {
            "group": "Body",
            "type": "ObjectId",
            "optional": false,
            "field": "history",
            "description": "<ul> <li>history</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "wins",
            "description": "<ul> <li>wins</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "loss",
            "description": "<ul> <li>loss</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "draw",
            "description": "<ul> <li>draw</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>name</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<ul> <li>age</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<ul> <li>gender</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "powerClass",
            "description": "<ul> <li>powerClass</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "superPower",
            "description": "<ul> <li>superPower</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "costume",
            "description": "<ul> <li>costume</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "powerGrade",
            "description": "<ul> <li>powerGrade</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "tournament",
            "description": "<ul> <li>tournament</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "history",
            "description": "<ul> <li>history</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "wins",
            "description": "<ul> <li>wins</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "loss",
            "description": "<ul> <li>loss</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "draw",
            "description": "<ul> <li>draw</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "__v",
            "description": "<ul> <li>Version</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>Id</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstModified",
            "description": "<ul> <li>First modified</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastModified",
            "description": "<ul> <li>Last modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n    {\n    \"name\": \"Theo\",\n    \"age\": \"77\",\n    \"gender\": \"Vel in eros accumsan hendrerit.\",\n    \"powerClass\": \"Curabitur purus mi lacinia sodales.\",\n    \"superPower\": \"Mollis blandit diam nam eget.\",\n    \"costume\": \"Bibendum blandit pulvinar turpis vehicula.\",\n    \"powerGrade\": \"Ipsum scelerisque leo massa vitae.\",\n    \"tournament\": \"5cf7d4e4e619986d4a267ab8\",\n    \"history\": \"5cf7d4e4e619986d4a267ab8\",\n    \"wins\": \"34154\",\n    \"loss\": \"82217\",\n    \"draw\": \"25497\",\n    \"__v\": \"42\",\n    \"firstModified\": \"2019-06-05T14:42:59.553Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.553Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267abd\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/student"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/student.js",
    "groupTitle": "student"
  },
  {
    "type": "delete",
    "url": "/heroAcademia/student",
    "title": "Delete",
    "version": "0.0.1",
    "name": "Delete",
    "group": "student",
    "description": "<p>Deletes student data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "age",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "gender",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "powerClass",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "superPower",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "costume",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "powerGrade",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "ObjectId",
            "optional": true,
            "field": "tournament",
            "defaultValue": "undefined",
            "description": "<ul> <li>ObjectId</li> </ul>"
          },
          {
            "group": "Query",
            "type": "ObjectId",
            "optional": true,
            "field": "history",
            "defaultValue": "undefined",
            "description": "<ul> <li>ObjectId</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "wins",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "loss",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "draw",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully deleted</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/student"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/student.js",
    "groupTitle": "student"
  },
  {
    "type": "get",
    "url": "/heroAcademia/student",
    "title": "Get",
    "version": "0.0.1",
    "name": "Get",
    "group": "student",
    "description": "<p>Retrieves student data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<ul> <li>Page Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "id",
            "description": "<ul> <li>Sort order by</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "lean",
            "defaultValue": "false",
            "description": "<ul> <li>Lean</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<ul> <li>Offset</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "12",
            "description": "<ul> <li>Limit of return</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "age",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "gender",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "powerClass",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "superPower",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "costume",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "powerGrade",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "ObjectId",
            "optional": true,
            "field": "tournament",
            "defaultValue": "undefined",
            "description": "<ul> <li>ObjectId</li> </ul>"
          },
          {
            "group": "Query",
            "type": "ObjectId",
            "optional": true,
            "field": "history",
            "defaultValue": "undefined",
            "description": "<ul> <li>ObjectId</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "wins",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "loss",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "draw",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "docs",
            "description": "<ul> <li>Documents array result</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<ul> <li>Total number of retrieved results</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<ul> <li>Limit of a single return</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<ul> <li>Offset</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n        \"docs\": [\n\n    {\n    \"name\": \"Jenna\",\n    \"age\": \"69\",\n    \"gender\": \"Mattis ut purus tempus eu.\",\n    \"powerClass\": \"Nunc eti quis velit nibh.\",\n    \"superPower\": \"Leo ligula at dolor au.\",\n    \"costume\": \"Hendrerit sed laoreet facilisis laoreet.\",\n    \"powerGrade\": \"Mauris nam at aenean ante.\",\n    \"tournament\": \"5cf7d4e4e619986d4a267ab8\",\n    \"history\": \"5cf7d4e4e619986d4a267ab8\",\n    \"wins\": \"37146\",\n    \"loss\": \"28446\",\n    \"draw\": \"43939\",\n    \"__v\": \"30\",\n    \"firstModified\": \"2019-06-05T14:42:59.558Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.558Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267abe\"\n},\n    {\n    \"name\": \"Florance\",\n    \"age\": \"62\",\n    \"gender\": \"Porttitor blandit dignissim elit diam.\",\n    \"powerClass\": \"Lectus in commodo aliquet aliquam.\",\n    \"superPower\": \"Auctor rhoncus fringilla natoque aliquam.\",\n    \"costume\": \"Pellentesque facilisis scelerisque adipiscing elit.\",\n    \"powerGrade\": \"Lorem dictum imperdiet massa lectus.\",\n    \"tournament\": \"5cf7d4e4e619986d4a267ab8\",\n    \"history\": \"5cf7d4e4e619986d4a267ab8\",\n    \"wins\": \"33498\",\n    \"loss\": \"97013\",\n    \"draw\": \"26962\",\n    \"__v\": \"74\",\n    \"firstModified\": \"2019-06-05T14:42:59.563Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.563Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267abf\"\n},\n    {\n    \"name\": \"Jason\",\n    \"age\": \"28\",\n    \"gender\": \"Ultricies risus ex nisl pharetra.\",\n    \"powerClass\": \"E aliquet diam viverra au.\",\n    \"superPower\": \"Natoque mattis vulputate maecenas blandit.\",\n    \"costume\": \"Faucibus imperdiet eti est ipsum.\",\n    \"powerGrade\": \"Suscipit ipsum natoque eget enim.\",\n    \"tournament\": \"5cf7d4e4e619986d4a267ab8\",\n    \"history\": \"5cf7d4e4e619986d4a267ab8\",\n    \"wins\": \"99793\",\n    \"loss\": \"19859\",\n    \"draw\": \"33825\",\n    \"__v\": \"47\",\n    \"firstModified\": \"2019-06-05T14:42:59.565Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.565Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267ac0\"\n}\n            \n        ],\n        \"total\": 12,\n        \"limit\": 3,\n        \"offset\": 0\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/student"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/student.js",
    "groupTitle": "student"
  },
  {
    "type": "put",
    "url": "/heroAcademia/student",
    "title": "Update",
    "version": "0.0.1",
    "name": "Update",
    "group": "student",
    "description": "<p>Updates new student data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n    {\n    \"name\": \"Jenette\",\n    \"age\": \"56\",\n    \"gender\": \"Pharetra eti tortor vestibulum quis.\",\n    \"powerClass\": \"Ipsum natoque dictum eros lobortis.\",\n    \"superPower\": \"Vitae lobortis ac natoque est.\",\n    \"costume\": \"Cras aliquet placerat augue quisque.\",\n    \"powerGrade\": \"Ornare finibus arcu aliquam eros.\",\n    \"tournament\": \"5cf7d4e4e619986d4a267ab8\",\n    \"history\": \"5cf7d4e4e619986d4a267ab8\",\n    \"wins\": \"95374\",\n    \"loss\": \"34808\",\n    \"draw\": \"34679\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "age",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "gender",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "powerClass",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "superPower",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "costume",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "powerGrade",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "ObjectId",
            "optional": true,
            "field": "tournament",
            "defaultValue": "undefined",
            "description": "<ul> <li>ObjectId</li> </ul>"
          },
          {
            "group": "Query",
            "type": "ObjectId",
            "optional": true,
            "field": "history",
            "defaultValue": "undefined",
            "description": "<ul> <li>ObjectId</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "wins",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "loss",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "draw",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nModified",
            "description": "<ul> <li>Number of objects modified based on query</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"nModified\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/student"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/student.js",
    "groupTitle": "student"
  },
  {
    "type": "post",
    "url": "/heroAcademia/teacher",
    "title": "Create",
    "version": "0.0.1",
    "name": "Create",
    "group": "teacher",
    "description": "<p>Creates new teacher data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n    {\n    \"name\": \"Jason\",\n    \"age\": \"81\",\n    \"gender\": \"Sapien mi bibendum cras dolor.\",\n    \"followers\": [\n        \"Dictum.\",\n        \"A.\",\n        \"Arcu.\",\n        \"Vestibulum.\"\n    ],\n    \"superPower\": \"Ultrices etiam orci vulputate vehicula.\",\n    \"costume\": \"Elementum elementum justo condimentum ultricies.\",\n    \"powerGrade\": \"Tempor auctor at ornare risus.\",\n    \"tournament\": \"5cf7d4e4e619986d4a267ab8\",\n    \"history\": \"5cf7d4e4e619986d4a267ab8\",\n    \"angerLevel\": \"52729\",\n    \"optimismLevel\": \"6499\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>name</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<ul> <li>age</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<ul> <li>gender</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "followers",
            "description": "<ul> <li>followers</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "superPower",
            "description": "<ul> <li>superPower</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "costume",
            "description": "<ul> <li>costume</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "powerGrade",
            "description": "<ul> <li>powerGrade</li> </ul>"
          },
          {
            "group": "Body",
            "type": "ObjectId",
            "optional": false,
            "field": "tournament",
            "description": "<ul> <li>tournament</li> </ul>"
          },
          {
            "group": "Body",
            "type": "ObjectId",
            "optional": false,
            "field": "history",
            "description": "<ul> <li>history</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "angerLevel",
            "description": "<ul> <li>angerLevel</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "optimismLevel",
            "description": "<ul> <li>optimismLevel</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>name</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<ul> <li>age</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<ul> <li>gender</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "followers",
            "description": "<ul> <li>followers</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "superPower",
            "description": "<ul> <li>superPower</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "costume",
            "description": "<ul> <li>costume</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "powerGrade",
            "description": "<ul> <li>powerGrade</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "tournament",
            "description": "<ul> <li>tournament</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "history",
            "description": "<ul> <li>history</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "angerLevel",
            "description": "<ul> <li>angerLevel</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "optimismLevel",
            "description": "<ul> <li>optimismLevel</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "__v",
            "description": "<ul> <li>Version</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>Id</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstModified",
            "description": "<ul> <li>First modified</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastModified",
            "description": "<ul> <li>Last modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n    {\n    \"name\": \"Jason\",\n    \"age\": \"81\",\n    \"gender\": \"Sapien mi bibendum cras dolor.\",\n    \"followers\": [\n        \"Dictum.\",\n        \"A.\",\n        \"Arcu.\",\n        \"Vestibulum.\"\n    ],\n    \"superPower\": \"Ultrices etiam orci vulputate vehicula.\",\n    \"costume\": \"Elementum elementum justo condimentum ultricies.\",\n    \"powerGrade\": \"Tempor auctor at ornare risus.\",\n    \"tournament\": \"5cf7d4e4e619986d4a267ab8\",\n    \"history\": \"5cf7d4e4e619986d4a267ab8\",\n    \"angerLevel\": \"52729\",\n    \"optimismLevel\": \"6499\",\n    \"__v\": \"60\",\n    \"firstModified\": \"2019-06-05T14:42:59.519Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.519Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267ab9\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/teacher"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/teacher.js",
    "groupTitle": "teacher"
  },
  {
    "type": "delete",
    "url": "/heroAcademia/teacher",
    "title": "Delete",
    "version": "0.0.1",
    "name": "Delete",
    "group": "teacher",
    "description": "<p>Deletes teacher data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "age",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "gender",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Array",
            "optional": true,
            "field": "followers",
            "defaultValue": "undefined",
            "description": "<ul> <li>Array</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "superPower",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "costume",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "powerGrade",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "ObjectId",
            "optional": true,
            "field": "tournament",
            "defaultValue": "undefined",
            "description": "<ul> <li>ObjectId</li> </ul>"
          },
          {
            "group": "Query",
            "type": "ObjectId",
            "optional": true,
            "field": "history",
            "defaultValue": "undefined",
            "description": "<ul> <li>ObjectId</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "angerLevel",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "optimismLevel",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully deleted</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/teacher"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/teacher.js",
    "groupTitle": "teacher"
  },
  {
    "type": "get",
    "url": "/heroAcademia/teacher",
    "title": "Get",
    "version": "0.0.1",
    "name": "Get",
    "group": "teacher",
    "description": "<p>Retrieves teacher data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<ul> <li>Page Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "id",
            "description": "<ul> <li>Sort order by</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "lean",
            "defaultValue": "false",
            "description": "<ul> <li>Lean</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<ul> <li>Offset</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "12",
            "description": "<ul> <li>Limit of return</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "age",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "gender",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Array",
            "optional": true,
            "field": "followers",
            "defaultValue": "undefined",
            "description": "<ul> <li>Array</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "superPower",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "costume",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "powerGrade",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "ObjectId",
            "optional": true,
            "field": "tournament",
            "defaultValue": "undefined",
            "description": "<ul> <li>ObjectId</li> </ul>"
          },
          {
            "group": "Query",
            "type": "ObjectId",
            "optional": true,
            "field": "history",
            "defaultValue": "undefined",
            "description": "<ul> <li>ObjectId</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "angerLevel",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "optimismLevel",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "docs",
            "description": "<ul> <li>Documents array result</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<ul> <li>Total number of retrieved results</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<ul> <li>Limit of a single return</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<ul> <li>Offset</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n        \"docs\": [\n\n    {\n    \"name\": \"Eleanore\",\n    \"age\": \"42\",\n    \"gender\": \"Et ante ante erat tortor.\",\n    \"followers\": [\n        \"Proin.\",\n        \"Facilisis.\",\n        \"Euismod.\",\n        \"Aliquet.\"\n    ],\n    \"superPower\": \"Proin nam in dolor aliquet.\",\n    \"costume\": \"Ornare ut rhoncus adipiscing erat.\",\n    \"powerGrade\": \"Nulla metus gravida adipiscing vitae.\",\n    \"tournament\": \"5cf7d4e4e619986d4a267ab8\",\n    \"history\": \"5cf7d4e4e619986d4a267ab8\",\n    \"angerLevel\": \"13373\",\n    \"optimismLevel\": \"34852\",\n    \"__v\": \"65\",\n    \"firstModified\": \"2019-06-05T14:42:59.524Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.524Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267aba\"\n},\n    {\n    \"name\": \"Richelle\",\n    \"age\": \"62\",\n    \"gender\": \"Nunc a cursus condimentum etiam.\",\n    \"followers\": [\n        \"Ante.\",\n        \"Consectetur.\",\n        \"Mauris.\",\n        \"Laoreet.\"\n    ],\n    \"superPower\": \"Sapien lacinia adipiscing quisque amet.\",\n    \"costume\": \"Orci mollis placerat lobortis imperdiet.\",\n    \"powerGrade\": \"Risus ex lacinia commodo dictum.\",\n    \"tournament\": \"5cf7d4e4e619986d4a267ab8\",\n    \"history\": \"5cf7d4e4e619986d4a267ab8\",\n    \"angerLevel\": \"99535\",\n    \"optimismLevel\": \"12948\",\n    \"__v\": \"73\",\n    \"firstModified\": \"2019-06-05T14:42:59.527Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.527Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267abb\"\n},\n    {\n    \"name\": \"Cecilia\",\n    \"age\": \"29\",\n    \"gender\": \"Nam quis placerat pretium augue.\",\n    \"followers\": [\n        \"Neque.\",\n        \"Aliquam.\",\n        \"Eti.\",\n        \"Tristique.\"\n    ],\n    \"superPower\": \"Iaculis lectus pellentesque dignissim gravida.\",\n    \"costume\": \"Eros commodo pretium porttitor maximus.\",\n    \"powerGrade\": \"Ex cursus pulvinar faucibus mi.\",\n    \"tournament\": \"5cf7d4e4e619986d4a267ab8\",\n    \"history\": \"5cf7d4e4e619986d4a267ab8\",\n    \"angerLevel\": \"53434\",\n    \"optimismLevel\": \"29844\",\n    \"__v\": \"26\",\n    \"firstModified\": \"2019-06-05T14:42:59.532Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.532Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267abc\"\n}\n            \n        ],\n        \"total\": 12,\n        \"limit\": 3,\n        \"offset\": 0\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/teacher"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/teacher.js",
    "groupTitle": "teacher"
  },
  {
    "type": "put",
    "url": "/heroAcademia/teacher",
    "title": "Update",
    "version": "0.0.1",
    "name": "Update",
    "group": "teacher",
    "description": "<p>Updates new teacher data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n    {\n    \"name\": \"Michael\",\n    \"age\": \"30\",\n    \"gender\": \"Turpis lacinia auctor mauris eget.\",\n    \"followers\": [\n        \"Amet.\",\n        \"Amet.\",\n        \"Enim.\",\n        \"Purus.\"\n    ],\n    \"superPower\": \"Accumsan quis adipiscing etiam pretium.\",\n    \"costume\": \"Donec vestibulum ultricies arcu in.\",\n    \"powerGrade\": \"Euismod lacus metus nam maximus.\",\n    \"tournament\": \"5cf7d4e4e619986d4a267ab8\",\n    \"history\": \"5cf7d4e4e619986d4a267ab8\",\n    \"angerLevel\": \"45594\",\n    \"optimismLevel\": \"63294\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "age",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "gender",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Array",
            "optional": true,
            "field": "followers",
            "defaultValue": "undefined",
            "description": "<ul> <li>Array</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "superPower",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "costume",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "powerGrade",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "ObjectId",
            "optional": true,
            "field": "tournament",
            "defaultValue": "undefined",
            "description": "<ul> <li>ObjectId</li> </ul>"
          },
          {
            "group": "Query",
            "type": "ObjectId",
            "optional": true,
            "field": "history",
            "defaultValue": "undefined",
            "description": "<ul> <li>ObjectId</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "angerLevel",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "optimismLevel",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nModified",
            "description": "<ul> <li>Number of objects modified based on query</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"nModified\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/teacher"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/teacher.js",
    "groupTitle": "teacher"
  },
  {
    "type": "post",
    "url": "/heroAcademia/tournament",
    "title": "Create",
    "version": "0.0.1",
    "name": "Create",
    "group": "tournament",
    "description": "<p>Creates new tournament data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n    {\n    \"name\": \"Rickey\",\n    \"wins\": \"92927\",\n    \"loss\": \"41061\",\n    \"draw\": \"12165\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>name</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "wins",
            "description": "<ul> <li>wins</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "loss",
            "description": "<ul> <li>loss</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "draw",
            "description": "<ul> <li>draw</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>name</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "wins",
            "description": "<ul> <li>wins</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "loss",
            "description": "<ul> <li>loss</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "draw",
            "description": "<ul> <li>draw</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "__v",
            "description": "<ul> <li>Version</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>Id</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstModified",
            "description": "<ul> <li>First modified</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastModified",
            "description": "<ul> <li>Last modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n    {\n    \"name\": \"Rickey\",\n    \"wins\": \"92927\",\n    \"loss\": \"41061\",\n    \"draw\": \"12165\",\n    \"__v\": \"72\",\n    \"firstModified\": \"2019-06-05T14:42:59.571Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.571Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267ac1\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/tournament"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/tournament.js",
    "groupTitle": "tournament"
  },
  {
    "type": "delete",
    "url": "/heroAcademia/tournament",
    "title": "Delete",
    "version": "0.0.1",
    "name": "Delete",
    "group": "tournament",
    "description": "<p>Deletes tournament data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "wins",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "loss",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "draw",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully deleted</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/tournament"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/tournament.js",
    "groupTitle": "tournament"
  },
  {
    "type": "get",
    "url": "/heroAcademia/tournament",
    "title": "Get",
    "version": "0.0.1",
    "name": "Get",
    "group": "tournament",
    "description": "<p>Retrieves tournament data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<ul> <li>Page Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "id",
            "description": "<ul> <li>Sort order by</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "lean",
            "defaultValue": "false",
            "description": "<ul> <li>Lean</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<ul> <li>Offset</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "12",
            "description": "<ul> <li>Limit of return</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "wins",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "loss",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "draw",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "docs",
            "description": "<ul> <li>Documents array result</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<ul> <li>Total number of retrieved results</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<ul> <li>Limit of a single return</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<ul> <li>Offset</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n        \"docs\": [\n\n    {\n    \"name\": \"Cedric\",\n    \"wins\": \"26155\",\n    \"loss\": \"83309\",\n    \"draw\": \"75999\",\n    \"__v\": \"72\",\n    \"firstModified\": \"2019-06-05T14:42:59.573Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.573Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267ac2\"\n},\n    {\n    \"name\": \"Warren\",\n    \"wins\": \"32536\",\n    \"loss\": \"57726\",\n    \"draw\": \"38503\",\n    \"__v\": \"48\",\n    \"firstModified\": \"2019-06-05T14:42:59.575Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.575Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267ac3\"\n},\n    {\n    \"name\": \"Roselyn\",\n    \"wins\": \"47392\",\n    \"loss\": \"61177\",\n    \"draw\": \"86555\",\n    \"__v\": \"68\",\n    \"firstModified\": \"2019-06-05T14:42:59.581Z\",\n    \"lastModified\": \"2019-06-05T14:42:59.581Z\",\n    \"_id\": \"5cf7d4f3e619986d4a267ac4\"\n}\n            \n        ],\n        \"total\": 12,\n        \"limit\": 3,\n        \"offset\": 0\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/tournament"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/tournament.js",
    "groupTitle": "tournament"
  },
  {
    "type": "put",
    "url": "/heroAcademia/tournament",
    "title": "Update",
    "version": "0.0.1",
    "name": "Update",
    "group": "tournament",
    "description": "<p>Updates new tournament data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n    {\n    \"name\": \"Jenna\",\n    \"wins\": \"47048\",\n    \"loss\": \"9709\",\n    \"draw\": \"72380\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "wins",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "loss",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "draw",
            "defaultValue": "undefined",
            "description": "<ul> <li>Number</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nModified",
            "description": "<ul> <li>Number of objects modified based on query</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"nModified\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3300/heroAcademia/tournament"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "routes/tournament.js",
    "groupTitle": "tournament"
  }
] });

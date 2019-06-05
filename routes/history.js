/**
 * @author              Young Midoria
 * @name                heroAcademia
 * @module              history.js
 * @description         Route for history
 * @kind                Router
 * @copyright           Copyright : 2018
 */

let
    express = require('express'),
    router = express.Router(),
    controller = require('../controller/history');

/**
 * @api             {post} /heroAcademia/history     Create
 * @apiVersion      0.0.1
 * @apiName         Create
 * @apiGroup        history
 * @apiDescription  Creates new history data
 *
 * @apiPermission     All
 *
 *  
 *
 * @apiParamExample Body
 *
    {
    "angerLevel": "19029",
    "optimismLevel": "18207",
    "enemyDefeat": "44292",
    "archNemesis": "Natoque pharetra suscipit elit dui.",
    "battleGroundDefeat": "27481",
    "enemyCapture": "55181",
    "alive": true
}
 *  
 *
    * @apiParam    (Body)  {Number }    angerLevel     - angerLevel
    * @apiParam    (Body)  {Number }    optimismLevel     - optimismLevel
    * @apiParam    (Body)  {Number }    enemyDefeat     - enemyDefeat
    * @apiParam    (Body)  {String }    archNemesis     - archNemesis
    * @apiParam    (Body)  {Number }    battleGroundDefeat     - battleGroundDefeat
    * @apiParam    (Body)  {Number }    enemyCapture     - enemyCapture
    * @apiParam    (Body)  {Boolean }    alive     - alive
    * @apiSuccess      {Number}    angerLevel     - angerLevel
    * @apiSuccess      {Number}    optimismLevel     - optimismLevel
    * @apiSuccess      {Number}    enemyDefeat     - enemyDefeat
    * @apiSuccess      {String}    archNemesis     - archNemesis
    * @apiSuccess      {Number}    battleGroundDefeat     - battleGroundDefeat
    * @apiSuccess      {Number}    enemyCapture     - enemyCapture
    * @apiSuccess      {Boolean}    alive     - alive
    * @apiSuccess     {String}    __v           - Version
    * @apiSuccess     {String}    _id           - Id
    * @apiSuccess     {String}    firstModified - First modified
    * @apiSuccess     {String}    lastModified  - Last modified
 *  
 *
 * @apiSuccessExample Body
 *
    {
    "angerLevel": "19029",
    "optimismLevel": "18207",
    "enemyDefeat": "44292",
    "archNemesis": "Natoque pharetra suscipit elit dui.",
    "battleGroundDefeat": "27481",
    "enemyCapture": "55181",
    "alive": true,
    "__v": "26",
    "firstModified": "2019-06-05T14:42:59.587Z",
    "lastModified": "2019-06-05T14:42:59.587Z",
    "_id": "5cf7d4f3e619986d4a267ac5"
}
 *  
 *
 * @apiSampleRequest http://localhost:3300/heroAcademia/history
 *
 * @apiError    (400)       {Object}    AUTHENTICATION_NOT_SET              - Authentication values are not set.
 * @apiError    (400)       {Object}    AUTHENTICATION_TYPE_NOT_ACCORD      - Authentication type is not according to constants.
 * @apiError    (400)       {Object}    AUTHENTICATION_VALUE_NOT_SET        - Authentication values are not set.
 * @apiError    (401)       {Object}    UNAUTHORIZED_ACCESS                 - Token is not authorized to access this route..
 * @apiError    (401)       {Object}    TOKEN_REVOKED                       - Token is revoked.
 * @apiError    (401)       {Object}    TOKEN_EXPIRED                       - Token has expired.
 * @apiError    (401)       {Object}    AUTHORIZED_SERVICE_ACCESS_DENIED    - Service has no been granted access.
 *
 * @apiError    (400)       {Object}    CAST_ERROR                          - Possible casting error.
 * @apiError    (400)       {Object}    NO_QUERY_DATA                       - No proper or no query data has been provided.Mainly could be caused by using wrong key in url.
 * @apiError    (400)       {Object}    NO_DATA_FOUND                       - No data found in query.
 */
router.post('/'     , controller.create);

/**
 * @api             {get} /heroAcademia/history     Get
 * @apiVersion      0.0.1
 * @apiName         Get
 * @apiGroup        history
 * @apiDescription  Retrieves history data
 *
 * @apiPermission     All
 *
 * @apiParam (Query)        {Number}    [page = 1]                          - Page Number
 * @apiParam (Query)        {String}    [sort = id]                         - Sort order by
 * @apiParam (Query)        {Boolean}   [lean = false]                      - Lean
 * @apiParam (Query)        {Number}    [offset = 0]                        - Offset
 * @apiParam (Query)        {Number}    [limit = 12]            - Limit of return
 *
    * @apiParam (Query)   {Number} [ angerLevel = undefined ]  - Number
    * @apiParam (Query)   {Number} [ optimismLevel = undefined ]  - Number
    * @apiParam (Query)   {Number} [ enemyDefeat = undefined ]  - Number
    * @apiParam (Query)   {String} [ archNemesis = undefined ]  - String
    * @apiParam (Query)   {Number} [ battleGroundDefeat = undefined ]  - Number
    * @apiParam (Query)   {Number} [ enemyCapture = undefined ]  - Number
    * @apiParam (Query)   {Boolean} [ alive = undefined ]  - Boolean
 *  
 *
 * @apiSuccess              {array}     docs                                - Documents array result
 * @apiSuccess              {Number}    total                               - Total number of retrieved results
 * @apiSuccess              {Number}    limit                               - Limit of a single return
 * @apiSuccess              {Number}    offset                              - Offset
 *
 * @apiSuccessExample Body
 *
 * {
        "docs": [

    {
    "angerLevel": "10871",
    "optimismLevel": "62837",
    "enemyDefeat": "67267",
    "archNemesis": "Cursus condimentum elit eti massa.",
    "battleGroundDefeat": "72703",
    "enemyCapture": "94067",
    "alive": true,
    "__v": "84",
    "firstModified": "2019-06-05T14:42:59.589Z",
    "lastModified": "2019-06-05T14:42:59.589Z",
    "_id": "5cf7d4f3e619986d4a267ac6"
},
    {
    "angerLevel": "4738",
    "optimismLevel": "12350",
    "enemyDefeat": "63532",
    "archNemesis": "Quis dignissim sed in elit.",
    "battleGroundDefeat": "32540",
    "enemyCapture": "42790",
    "alive": false,
    "__v": "70",
    "firstModified": "2019-06-05T14:42:59.591Z",
    "lastModified": "2019-06-05T14:42:59.591Z",
    "_id": "5cf7d4f3e619986d4a267ac7"
},
    {
    "angerLevel": "60446",
    "optimismLevel": "36115",
    "enemyDefeat": "10367",
    "archNemesis": "Aliquam bibendum lacinia adipiscing sagittis.",
    "battleGroundDefeat": "52731",
    "enemyCapture": "86470",
    "alive": true,
    "__v": "22",
    "firstModified": "2019-06-05T14:42:59.592Z",
    "lastModified": "2019-06-05T14:42:59.592Z",
    "_id": "5cf7d4f3e619986d4a267ac8"
}
            
        ],
        "total": 12,
        "limit": 3,
        "offset": 0
    }
 *
 * @apiSampleRequest http://localhost:3300/heroAcademia/history
 *
 * @apiError    (400)       {Object}    AUTHENTICATION_NOT_SET              - Authentication values are not set.
 * @apiError    (400)       {Object}    AUTHENTICATION_TYPE_NOT_ACCORD      - Authentication type is not according to constants.
 * @apiError    (400)       {Object}    AUTHENTICATION_VALUE_NOT_SET        - Authentication values are not set.
 * @apiError    (401)       {Object}    UNAUTHORIZED_ACCESS                 - Token is not authorized to access this route..
 * @apiError    (401)       {Object}    TOKEN_REVOKED                       - Token is revoked.
 * @apiError    (401)       {Object}    TOKEN_EXPIRED                       - Token has expired.
 * @apiError    (401)       {Object}    AUTHORIZED_SERVICE_ACCESS_DENIED    - Service has no been granted access.
 *
 * @apiError    (400)       {Object}    CAST_ERROR                          - Possible casting error.
 * @apiError    (400)       {Object}    NO_QUERY_DATA                       - No proper or no query data has been provided.Mainly could be caused by using wrong key in url.
 * @apiError    (400)       {Object}    NO_DATA_FOUND                       - No data found in query.
 */
router.get('/'      , controller.find);


/**
 * @api             {put} /heroAcademia/history     Update
 * @apiVersion      0.0.1
 * @apiName         Update
 * @apiGroup        history
 * @apiDescription  Updates new history data
 *
 * @apiPermission     All
 *
 * @apiParamExample Body
 *
    {
    "angerLevel": "99810",
    "optimismLevel": "35616",
    "enemyDefeat": "37972",
    "archNemesis": "Lorem risus hendrerit laoreet pharetra.",
    "battleGroundDefeat": "90293",
    "enemyCapture": "72646",
    "alive": true
}
 *  
 *
 *
    * @apiParam (Query)   {Number} [ angerLevel = undefined ]  - Number
    * @apiParam (Query)   {Number} [ optimismLevel = undefined ]  - Number
    * @apiParam (Query)   {Number} [ enemyDefeat = undefined ]  - Number
    * @apiParam (Query)   {String} [ archNemesis = undefined ]  - String
    * @apiParam (Query)   {Number} [ battleGroundDefeat = undefined ]  - Number
    * @apiParam (Query)   {Number} [ enemyCapture = undefined ]  - Number
    * @apiParam (Query)   {Boolean} [ alive = undefined ]  - Boolean
 *  
 *
 * @apiSuccess              {String}    n                                   - Number of objects manipulated
 * @apiSuccess              {String}    nModified                           - Number of objects modified based on query
 * @apiSuccess              {String}    ok                                  - Number of objects successfully modified
 *
 * @apiSuccessExample Body
 *
 *  {
      "n" : "1",
      "nModified" : "1",
      "ok" : "1"
    }
 *
 *
 * @apiSampleRequest http://localhost:3300/heroAcademia/history
 *
 * @apiError    (400)       {Object}    AUTHENTICATION_NOT_SET              - Authentication values are not set.
 * @apiError    (400)       {Object}    AUTHENTICATION_TYPE_NOT_ACCORD      - Authentication type is not according to constants.
 * @apiError    (400)       {Object}    AUTHENTICATION_VALUE_NOT_SET        - Authentication values are not set.
 * @apiError    (401)       {Object}    UNAUTHORIZED_ACCESS                 - Token is not authorized to access this route..
 * @apiError    (401)       {Object}    TOKEN_REVOKED                       - Token is revoked.
 * @apiError    (401)       {Object}    TOKEN_EXPIRED                       - Token has expired.
 * @apiError    (401)       {Object}    AUTHORIZED_SERVICE_ACCESS_DENIED    - Service has no been granted access.
 *
 * @apiError    (400)       {Object}    CAST_ERROR                          - Possible casting error.
 * @apiError    (400)       {Object}    NO_QUERY_DATA                       - No proper or no query data has been provided.Mainly could be caused by using wrong key in url.
 * @apiError    (400)       {Object}    NO_DATA_FOUND                       - No data found in query.
 */
router.put('/'      , controller.update);

/**
 * @api             {delete} /heroAcademia/history     Delete
 * @apiVersion      0.0.1
 * @apiName         Delete
 * @apiGroup        history
 * @apiDescription  Deletes history data
 *
 * @apiPermission     All
 *
    * @apiParam (Query)   {Number} [ angerLevel = undefined ]  - Number
    * @apiParam (Query)   {Number} [ optimismLevel = undefined ]  - Number
    * @apiParam (Query)   {Number} [ enemyDefeat = undefined ]  - Number
    * @apiParam (Query)   {String} [ archNemesis = undefined ]  - String
    * @apiParam (Query)   {Number} [ battleGroundDefeat = undefined ]  - Number
    * @apiParam (Query)   {Number} [ enemyCapture = undefined ]  - Number
    * @apiParam (Query)   {Boolean} [ alive = undefined ]  - Boolean
 *  
 *
 * @apiSuccess              {String}    n                                   - Number of objects manipulated
 * @apiSuccess              {String}    ok                                  - Number of objects successfully deleted
 *
 * @apiSuccessExample Body
 *
 *  {
      "n" : "1",
      "ok" : "1"
    }
 *
 * @apiSampleRequest http://localhost:3300/heroAcademia/history
 *
 * @apiError    (400)       {Object}    AUTHENTICATION_NOT_SET              - Authentication values are not set.
 * @apiError    (400)       {Object}    AUTHENTICATION_TYPE_NOT_ACCORD      - Authentication type is not according to constants.
 * @apiError    (400)       {Object}    AUTHENTICATION_VALUE_NOT_SET        - Authentication values are not set.
 * @apiError    (401)       {Object}    UNAUTHORIZED_ACCESS                 - Token is not authorized to access this route..
 * @apiError    (401)       {Object}    TOKEN_REVOKED                       - Token is revoked.
 * @apiError    (401)       {Object}    TOKEN_EXPIRED                       - Token has expired.
 * @apiError    (401)       {Object}    AUTHORIZED_SERVICE_ACCESS_DENIED    - Service has no been granted access.
 *
 * @apiError    (400)       {Object}    CAST_ERROR                          - Possible casting error.
 * @apiError    (400)       {Object}    NO_QUERY_DATA                       - No proper or no query data has been provided.Mainly could be caused by using wrong key in url.
 * @apiError    (400)       {Object}    NO_DATA_FOUND                       - No data found in query.
 */
router.delete('/'   , controller.remove);

module.exports = router;

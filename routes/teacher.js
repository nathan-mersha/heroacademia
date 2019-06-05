/**
 * @author              Young Midoria
 * @name                heroAcademia
 * @module              teacher.js
 * @description         Route for teacher
 * @kind                Router
 * @copyright           Copyright : 2018
 */

let
    express = require('express'),
    router = express.Router(),
    controller = require('../controller/teacher');

/**
 * @api             {post} /heroAcademia/teacher     Create
 * @apiVersion      0.0.1
 * @apiName         Create
 * @apiGroup        teacher
 * @apiDescription  Creates new teacher data
 *
 * @apiPermission     All
 *
 *  
 *
 * @apiParamExample Body
 *
    {
    "name": "Jason",
    "age": "81",
    "gender": "Sapien mi bibendum cras dolor.",
    "followers": [
        "Dictum.",
        "A.",
        "Arcu.",
        "Vestibulum."
    ],
    "superPower": "Ultrices etiam orci vulputate vehicula.",
    "costume": "Elementum elementum justo condimentum ultricies.",
    "powerGrade": "Tempor auctor at ornare risus.",
    "tournament": "5cf7d4e4e619986d4a267ab8",
    "history": "5cf7d4e4e619986d4a267ab8",
    "angerLevel": "52729",
    "optimismLevel": "6499"
}
 *  
 *
    * @apiParam    (Body)  {String }    name     - name
    * @apiParam    (Body)  {Number }    age     - age
    * @apiParam    (Body)  {String }    gender     - gender
    * @apiParam    (Body)  {Array }    followers     - followers
    * @apiParam    (Body)  {String }    superPower     - superPower
    * @apiParam    (Body)  {String }    costume     - costume
    * @apiParam    (Body)  {String }    powerGrade     - powerGrade
    * @apiParam    (Body)  {ObjectId }    tournament     - tournament
    * @apiParam    (Body)  {ObjectId }    history     - history
    * @apiParam    (Body)  {Number }    angerLevel     - angerLevel
    * @apiParam    (Body)  {Number }    optimismLevel     - optimismLevel
    * @apiSuccess      {String}    name     - name
    * @apiSuccess      {Number}    age     - age
    * @apiSuccess      {String}    gender     - gender
    * @apiSuccess      {Array}    followers     - followers
    * @apiSuccess      {String}    superPower     - superPower
    * @apiSuccess      {String}    costume     - costume
    * @apiSuccess      {String}    powerGrade     - powerGrade
    * @apiSuccess      {ObjectId}    tournament     - tournament
    * @apiSuccess      {ObjectId}    history     - history
    * @apiSuccess      {Number}    angerLevel     - angerLevel
    * @apiSuccess      {Number}    optimismLevel     - optimismLevel
    * @apiSuccess     {String}    __v           - Version
    * @apiSuccess     {String}    _id           - Id
    * @apiSuccess     {String}    firstModified - First modified
    * @apiSuccess     {String}    lastModified  - Last modified
 *  
 *
 * @apiSuccessExample Body
 *
    {
    "name": "Jason",
    "age": "81",
    "gender": "Sapien mi bibendum cras dolor.",
    "followers": [
        "Dictum.",
        "A.",
        "Arcu.",
        "Vestibulum."
    ],
    "superPower": "Ultrices etiam orci vulputate vehicula.",
    "costume": "Elementum elementum justo condimentum ultricies.",
    "powerGrade": "Tempor auctor at ornare risus.",
    "tournament": "5cf7d4e4e619986d4a267ab8",
    "history": "5cf7d4e4e619986d4a267ab8",
    "angerLevel": "52729",
    "optimismLevel": "6499",
    "__v": "60",
    "firstModified": "2019-06-05T14:42:59.519Z",
    "lastModified": "2019-06-05T14:42:59.519Z",
    "_id": "5cf7d4f3e619986d4a267ab9"
}
 *  
 *
 * @apiSampleRequest http://localhost:3300/heroAcademia/teacher
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
 * @api             {get} /heroAcademia/teacher     Get
 * @apiVersion      0.0.1
 * @apiName         Get
 * @apiGroup        teacher
 * @apiDescription  Retrieves teacher data
 *
 * @apiPermission     All
 *
 * @apiParam (Query)        {Number}    [page = 1]                          - Page Number
 * @apiParam (Query)        {String}    [sort = id]                         - Sort order by
 * @apiParam (Query)        {Boolean}   [lean = false]                      - Lean
 * @apiParam (Query)        {Number}    [offset = 0]                        - Offset
 * @apiParam (Query)        {Number}    [limit = 12]            - Limit of return
 *
    * @apiParam (Query)   {String} [ name = undefined ]  - String
    * @apiParam (Query)   {Number} [ age = undefined ]  - Number
    * @apiParam (Query)   {String} [ gender = undefined ]  - String
    * @apiParam (Query)   {Array} [ followers = undefined ]  - Array
    * @apiParam (Query)   {String} [ superPower = undefined ]  - String
    * @apiParam (Query)   {String} [ costume = undefined ]  - String
    * @apiParam (Query)   {String} [ powerGrade = undefined ]  - String
    * @apiParam (Query)   {ObjectId} [ tournament = undefined ]  - ObjectId
    * @apiParam (Query)   {ObjectId} [ history = undefined ]  - ObjectId
    * @apiParam (Query)   {Number} [ angerLevel = undefined ]  - Number
    * @apiParam (Query)   {Number} [ optimismLevel = undefined ]  - Number
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
    "name": "Eleanore",
    "age": "42",
    "gender": "Et ante ante erat tortor.",
    "followers": [
        "Proin.",
        "Facilisis.",
        "Euismod.",
        "Aliquet."
    ],
    "superPower": "Proin nam in dolor aliquet.",
    "costume": "Ornare ut rhoncus adipiscing erat.",
    "powerGrade": "Nulla metus gravida adipiscing vitae.",
    "tournament": "5cf7d4e4e619986d4a267ab8",
    "history": "5cf7d4e4e619986d4a267ab8",
    "angerLevel": "13373",
    "optimismLevel": "34852",
    "__v": "65",
    "firstModified": "2019-06-05T14:42:59.524Z",
    "lastModified": "2019-06-05T14:42:59.524Z",
    "_id": "5cf7d4f3e619986d4a267aba"
},
    {
    "name": "Richelle",
    "age": "62",
    "gender": "Nunc a cursus condimentum etiam.",
    "followers": [
        "Ante.",
        "Consectetur.",
        "Mauris.",
        "Laoreet."
    ],
    "superPower": "Sapien lacinia adipiscing quisque amet.",
    "costume": "Orci mollis placerat lobortis imperdiet.",
    "powerGrade": "Risus ex lacinia commodo dictum.",
    "tournament": "5cf7d4e4e619986d4a267ab8",
    "history": "5cf7d4e4e619986d4a267ab8",
    "angerLevel": "99535",
    "optimismLevel": "12948",
    "__v": "73",
    "firstModified": "2019-06-05T14:42:59.527Z",
    "lastModified": "2019-06-05T14:42:59.527Z",
    "_id": "5cf7d4f3e619986d4a267abb"
},
    {
    "name": "Cecilia",
    "age": "29",
    "gender": "Nam quis placerat pretium augue.",
    "followers": [
        "Neque.",
        "Aliquam.",
        "Eti.",
        "Tristique."
    ],
    "superPower": "Iaculis lectus pellentesque dignissim gravida.",
    "costume": "Eros commodo pretium porttitor maximus.",
    "powerGrade": "Ex cursus pulvinar faucibus mi.",
    "tournament": "5cf7d4e4e619986d4a267ab8",
    "history": "5cf7d4e4e619986d4a267ab8",
    "angerLevel": "53434",
    "optimismLevel": "29844",
    "__v": "26",
    "firstModified": "2019-06-05T14:42:59.532Z",
    "lastModified": "2019-06-05T14:42:59.532Z",
    "_id": "5cf7d4f3e619986d4a267abc"
}
            
        ],
        "total": 12,
        "limit": 3,
        "offset": 0
    }
 *
 * @apiSampleRequest http://localhost:3300/heroAcademia/teacher
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
 * @api             {put} /heroAcademia/teacher     Update
 * @apiVersion      0.0.1
 * @apiName         Update
 * @apiGroup        teacher
 * @apiDescription  Updates new teacher data
 *
 * @apiPermission     All
 *
 * @apiParamExample Body
 *
    {
    "name": "Michael",
    "age": "30",
    "gender": "Turpis lacinia auctor mauris eget.",
    "followers": [
        "Amet.",
        "Amet.",
        "Enim.",
        "Purus."
    ],
    "superPower": "Accumsan quis adipiscing etiam pretium.",
    "costume": "Donec vestibulum ultricies arcu in.",
    "powerGrade": "Euismod lacus metus nam maximus.",
    "tournament": "5cf7d4e4e619986d4a267ab8",
    "history": "5cf7d4e4e619986d4a267ab8",
    "angerLevel": "45594",
    "optimismLevel": "63294"
}
 *  
 *
 *
    * @apiParam (Query)   {String} [ name = undefined ]  - String
    * @apiParam (Query)   {Number} [ age = undefined ]  - Number
    * @apiParam (Query)   {String} [ gender = undefined ]  - String
    * @apiParam (Query)   {Array} [ followers = undefined ]  - Array
    * @apiParam (Query)   {String} [ superPower = undefined ]  - String
    * @apiParam (Query)   {String} [ costume = undefined ]  - String
    * @apiParam (Query)   {String} [ powerGrade = undefined ]  - String
    * @apiParam (Query)   {ObjectId} [ tournament = undefined ]  - ObjectId
    * @apiParam (Query)   {ObjectId} [ history = undefined ]  - ObjectId
    * @apiParam (Query)   {Number} [ angerLevel = undefined ]  - Number
    * @apiParam (Query)   {Number} [ optimismLevel = undefined ]  - Number
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
 * @apiSampleRequest http://localhost:3300/heroAcademia/teacher
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
 * @api             {delete} /heroAcademia/teacher     Delete
 * @apiVersion      0.0.1
 * @apiName         Delete
 * @apiGroup        teacher
 * @apiDescription  Deletes teacher data
 *
 * @apiPermission     All
 *
    * @apiParam (Query)   {String} [ name = undefined ]  - String
    * @apiParam (Query)   {Number} [ age = undefined ]  - Number
    * @apiParam (Query)   {String} [ gender = undefined ]  - String
    * @apiParam (Query)   {Array} [ followers = undefined ]  - Array
    * @apiParam (Query)   {String} [ superPower = undefined ]  - String
    * @apiParam (Query)   {String} [ costume = undefined ]  - String
    * @apiParam (Query)   {String} [ powerGrade = undefined ]  - String
    * @apiParam (Query)   {ObjectId} [ tournament = undefined ]  - ObjectId
    * @apiParam (Query)   {ObjectId} [ history = undefined ]  - ObjectId
    * @apiParam (Query)   {Number} [ angerLevel = undefined ]  - Number
    * @apiParam (Query)   {Number} [ optimismLevel = undefined ]  - Number
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
 * @apiSampleRequest http://localhost:3300/heroAcademia/teacher
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

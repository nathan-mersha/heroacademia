/**
 * @author              Young Midoria
 * @name                heroAcademia
 * @module              student.js
 * @description         Route for student
 * @kind                Router
 * @copyright           Copyright : 2018
 */

let
    express = require('express'),
    router = express.Router(),
    controller = require('../controller/student');

/**
 * @api             {post} /heroAcademia/student     Create
 * @apiVersion      0.0.1
 * @apiName         Create
 * @apiGroup        student
 * @apiDescription  Creates new student data
 *
 * @apiPermission     All
 *
 *  
 *
 * @apiParamExample Body
 *
    {
    "name": "Theo",
    "age": "77",
    "gender": "Vel in eros accumsan hendrerit.",
    "powerClass": "Curabitur purus mi lacinia sodales.",
    "superPower": "Mollis blandit diam nam eget.",
    "costume": "Bibendum blandit pulvinar turpis vehicula.",
    "powerGrade": "Ipsum scelerisque leo massa vitae.",
    "tournament": "5cf7d4e4e619986d4a267ab8",
    "history": "5cf7d4e4e619986d4a267ab8",
    "wins": "34154",
    "loss": "82217",
    "draw": "25497"
}
 *  
 *
    * @apiParam    (Body)  {String }    name     - name
    * @apiParam    (Body)  {Number }    age     - age
    * @apiParam    (Body)  {String }    gender     - gender
    * @apiParam    (Body)  {String }    powerClass     - powerClass
    * @apiParam    (Body)  {String }    superPower     - superPower
    * @apiParam    (Body)  {String }    costume     - costume
    * @apiParam    (Body)  {String }    powerGrade     - powerGrade
    * @apiParam    (Body)  {ObjectId }    tournament     - tournament
    * @apiParam    (Body)  {ObjectId }    history     - history
    * @apiParam    (Body)  {Number }    wins     - wins
    * @apiParam    (Body)  {Number }    loss     - loss
    * @apiParam    (Body)  {Number }    draw     - draw
    * @apiSuccess      {String}    name     - name
    * @apiSuccess      {Number}    age     - age
    * @apiSuccess      {String}    gender     - gender
    * @apiSuccess      {String}    powerClass     - powerClass
    * @apiSuccess      {String}    superPower     - superPower
    * @apiSuccess      {String}    costume     - costume
    * @apiSuccess      {String}    powerGrade     - powerGrade
    * @apiSuccess      {ObjectId}    tournament     - tournament
    * @apiSuccess      {ObjectId}    history     - history
    * @apiSuccess      {Number}    wins     - wins
    * @apiSuccess      {Number}    loss     - loss
    * @apiSuccess      {Number}    draw     - draw
    * @apiSuccess     {String}    __v           - Version
    * @apiSuccess     {String}    _id           - Id
    * @apiSuccess     {String}    firstModified - First modified
    * @apiSuccess     {String}    lastModified  - Last modified
 *  
 *
 * @apiSuccessExample Body
 *
    {
    "name": "Theo",
    "age": "77",
    "gender": "Vel in eros accumsan hendrerit.",
    "powerClass": "Curabitur purus mi lacinia sodales.",
    "superPower": "Mollis blandit diam nam eget.",
    "costume": "Bibendum blandit pulvinar turpis vehicula.",
    "powerGrade": "Ipsum scelerisque leo massa vitae.",
    "tournament": "5cf7d4e4e619986d4a267ab8",
    "history": "5cf7d4e4e619986d4a267ab8",
    "wins": "34154",
    "loss": "82217",
    "draw": "25497",
    "__v": "42",
    "firstModified": "2019-06-05T14:42:59.553Z",
    "lastModified": "2019-06-05T14:42:59.553Z",
    "_id": "5cf7d4f3e619986d4a267abd"
}
 *  
 *
 * @apiSampleRequest http://localhost:3300/heroAcademia/student
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
 * @api             {get} /heroAcademia/student     Get
 * @apiVersion      0.0.1
 * @apiName         Get
 * @apiGroup        student
 * @apiDescription  Retrieves student data
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
    * @apiParam (Query)   {String} [ powerClass = undefined ]  - String
    * @apiParam (Query)   {String} [ superPower = undefined ]  - String
    * @apiParam (Query)   {String} [ costume = undefined ]  - String
    * @apiParam (Query)   {String} [ powerGrade = undefined ]  - String
    * @apiParam (Query)   {ObjectId} [ tournament = undefined ]  - ObjectId
    * @apiParam (Query)   {ObjectId} [ history = undefined ]  - ObjectId
    * @apiParam (Query)   {Number} [ wins = undefined ]  - Number
    * @apiParam (Query)   {Number} [ loss = undefined ]  - Number
    * @apiParam (Query)   {Number} [ draw = undefined ]  - Number
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
    "name": "Jenna",
    "age": "69",
    "gender": "Mattis ut purus tempus eu.",
    "powerClass": "Nunc eti quis velit nibh.",
    "superPower": "Leo ligula at dolor au.",
    "costume": "Hendrerit sed laoreet facilisis laoreet.",
    "powerGrade": "Mauris nam at aenean ante.",
    "tournament": "5cf7d4e4e619986d4a267ab8",
    "history": "5cf7d4e4e619986d4a267ab8",
    "wins": "37146",
    "loss": "28446",
    "draw": "43939",
    "__v": "30",
    "firstModified": "2019-06-05T14:42:59.558Z",
    "lastModified": "2019-06-05T14:42:59.558Z",
    "_id": "5cf7d4f3e619986d4a267abe"
},
    {
    "name": "Florance",
    "age": "62",
    "gender": "Porttitor blandit dignissim elit diam.",
    "powerClass": "Lectus in commodo aliquet aliquam.",
    "superPower": "Auctor rhoncus fringilla natoque aliquam.",
    "costume": "Pellentesque facilisis scelerisque adipiscing elit.",
    "powerGrade": "Lorem dictum imperdiet massa lectus.",
    "tournament": "5cf7d4e4e619986d4a267ab8",
    "history": "5cf7d4e4e619986d4a267ab8",
    "wins": "33498",
    "loss": "97013",
    "draw": "26962",
    "__v": "74",
    "firstModified": "2019-06-05T14:42:59.563Z",
    "lastModified": "2019-06-05T14:42:59.563Z",
    "_id": "5cf7d4f3e619986d4a267abf"
},
    {
    "name": "Jason",
    "age": "28",
    "gender": "Ultricies risus ex nisl pharetra.",
    "powerClass": "E aliquet diam viverra au.",
    "superPower": "Natoque mattis vulputate maecenas blandit.",
    "costume": "Faucibus imperdiet eti est ipsum.",
    "powerGrade": "Suscipit ipsum natoque eget enim.",
    "tournament": "5cf7d4e4e619986d4a267ab8",
    "history": "5cf7d4e4e619986d4a267ab8",
    "wins": "99793",
    "loss": "19859",
    "draw": "33825",
    "__v": "47",
    "firstModified": "2019-06-05T14:42:59.565Z",
    "lastModified": "2019-06-05T14:42:59.565Z",
    "_id": "5cf7d4f3e619986d4a267ac0"
}
            
        ],
        "total": 12,
        "limit": 3,
        "offset": 0
    }
 *
 * @apiSampleRequest http://localhost:3300/heroAcademia/student
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
 * @api             {put} /heroAcademia/student     Update
 * @apiVersion      0.0.1
 * @apiName         Update
 * @apiGroup        student
 * @apiDescription  Updates new student data
 *
 * @apiPermission     All
 *
 * @apiParamExample Body
 *
    {
    "name": "Jenette",
    "age": "56",
    "gender": "Pharetra eti tortor vestibulum quis.",
    "powerClass": "Ipsum natoque dictum eros lobortis.",
    "superPower": "Vitae lobortis ac natoque est.",
    "costume": "Cras aliquet placerat augue quisque.",
    "powerGrade": "Ornare finibus arcu aliquam eros.",
    "tournament": "5cf7d4e4e619986d4a267ab8",
    "history": "5cf7d4e4e619986d4a267ab8",
    "wins": "95374",
    "loss": "34808",
    "draw": "34679"
}
 *  
 *
 *
    * @apiParam (Query)   {String} [ name = undefined ]  - String
    * @apiParam (Query)   {Number} [ age = undefined ]  - Number
    * @apiParam (Query)   {String} [ gender = undefined ]  - String
    * @apiParam (Query)   {String} [ powerClass = undefined ]  - String
    * @apiParam (Query)   {String} [ superPower = undefined ]  - String
    * @apiParam (Query)   {String} [ costume = undefined ]  - String
    * @apiParam (Query)   {String} [ powerGrade = undefined ]  - String
    * @apiParam (Query)   {ObjectId} [ tournament = undefined ]  - ObjectId
    * @apiParam (Query)   {ObjectId} [ history = undefined ]  - ObjectId
    * @apiParam (Query)   {Number} [ wins = undefined ]  - Number
    * @apiParam (Query)   {Number} [ loss = undefined ]  - Number
    * @apiParam (Query)   {Number} [ draw = undefined ]  - Number
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
 * @apiSampleRequest http://localhost:3300/heroAcademia/student
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
 * @api             {delete} /heroAcademia/student     Delete
 * @apiVersion      0.0.1
 * @apiName         Delete
 * @apiGroup        student
 * @apiDescription  Deletes student data
 *
 * @apiPermission     All
 *
    * @apiParam (Query)   {String} [ name = undefined ]  - String
    * @apiParam (Query)   {Number} [ age = undefined ]  - Number
    * @apiParam (Query)   {String} [ gender = undefined ]  - String
    * @apiParam (Query)   {String} [ powerClass = undefined ]  - String
    * @apiParam (Query)   {String} [ superPower = undefined ]  - String
    * @apiParam (Query)   {String} [ costume = undefined ]  - String
    * @apiParam (Query)   {String} [ powerGrade = undefined ]  - String
    * @apiParam (Query)   {ObjectId} [ tournament = undefined ]  - ObjectId
    * @apiParam (Query)   {ObjectId} [ history = undefined ]  - ObjectId
    * @apiParam (Query)   {Number} [ wins = undefined ]  - Number
    * @apiParam (Query)   {Number} [ loss = undefined ]  - Number
    * @apiParam (Query)   {Number} [ draw = undefined ]  - Number
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
 * @apiSampleRequest http://localhost:3300/heroAcademia/student
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

/**
 * @author              Young Midoria
 * @name                heroAcademia
 * @module              tournament.js
 * @description         Route for tournament
 * @kind                Router
 * @copyright           Copyright : 2018
 */

let
    express = require('express'),
    router = express.Router(),
    controller = require('../controller/tournament');

/**
 * @api             {post} /heroAcademia/tournament     Create
 * @apiVersion      0.0.1
 * @apiName         Create
 * @apiGroup        tournament
 * @apiDescription  Creates new tournament data
 *
 * @apiPermission     All
 *
 *  
 *
 * @apiParamExample Body
 *
    {
    "name": "Rickey",
    "wins": "92927",
    "loss": "41061",
    "draw": "12165"
}
 *  
 *
    * @apiParam    (Body)  {String }    name     - name
    * @apiParam    (Body)  {Number }    wins     - wins
    * @apiParam    (Body)  {Number }    loss     - loss
    * @apiParam    (Body)  {Number }    draw     - draw
    * @apiSuccess      {String}    name     - name
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
    "name": "Rickey",
    "wins": "92927",
    "loss": "41061",
    "draw": "12165",
    "__v": "72",
    "firstModified": "2019-06-05T14:42:59.571Z",
    "lastModified": "2019-06-05T14:42:59.571Z",
    "_id": "5cf7d4f3e619986d4a267ac1"
}
 *  
 *
 * @apiSampleRequest http://localhost:3300/heroAcademia/tournament
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
 * @api             {get} /heroAcademia/tournament     Get
 * @apiVersion      0.0.1
 * @apiName         Get
 * @apiGroup        tournament
 * @apiDescription  Retrieves tournament data
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
    "name": "Cedric",
    "wins": "26155",
    "loss": "83309",
    "draw": "75999",
    "__v": "72",
    "firstModified": "2019-06-05T14:42:59.573Z",
    "lastModified": "2019-06-05T14:42:59.573Z",
    "_id": "5cf7d4f3e619986d4a267ac2"
},
    {
    "name": "Warren",
    "wins": "32536",
    "loss": "57726",
    "draw": "38503",
    "__v": "48",
    "firstModified": "2019-06-05T14:42:59.575Z",
    "lastModified": "2019-06-05T14:42:59.575Z",
    "_id": "5cf7d4f3e619986d4a267ac3"
},
    {
    "name": "Roselyn",
    "wins": "47392",
    "loss": "61177",
    "draw": "86555",
    "__v": "68",
    "firstModified": "2019-06-05T14:42:59.581Z",
    "lastModified": "2019-06-05T14:42:59.581Z",
    "_id": "5cf7d4f3e619986d4a267ac4"
}
            
        ],
        "total": 12,
        "limit": 3,
        "offset": 0
    }
 *
 * @apiSampleRequest http://localhost:3300/heroAcademia/tournament
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
 * @api             {put} /heroAcademia/tournament     Update
 * @apiVersion      0.0.1
 * @apiName         Update
 * @apiGroup        tournament
 * @apiDescription  Updates new tournament data
 *
 * @apiPermission     All
 *
 * @apiParamExample Body
 *
    {
    "name": "Jenna",
    "wins": "47048",
    "loss": "9709",
    "draw": "72380"
}
 *  
 *
 *
    * @apiParam (Query)   {String} [ name = undefined ]  - String
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
 * @apiSampleRequest http://localhost:3300/heroAcademia/tournament
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
 * @api             {delete} /heroAcademia/tournament     Delete
 * @apiVersion      0.0.1
 * @apiName         Delete
 * @apiGroup        tournament
 * @apiDescription  Deletes tournament data
 *
 * @apiPermission     All
 *
    * @apiParam (Query)   {String} [ name = undefined ]  - String
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
 * @apiSampleRequest http://localhost:3300/heroAcademia/tournament
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

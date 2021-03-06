/**
 * @author              Young Midoria
 * @name                heroAcademia
 * @module              controllerHelper.js
 * @description         Controller helpers.
 * @kind                Lib
 * @copyright           Copyright : 2018
 */

let
    debug       = require('debug')('heroAcademia/lib/helper/others/controllerHelper'),
    util        = require('util'),
    constant    = require('../../constant'),
    errorCodes  = constant.errorCodes;

/**
 * @name                    - Query response handler
 * @description             - Handles possible error and empty data return upon query, create, remove or update.
 * @param err               - Error (Possible)
 * @param data              - Data  (Possible)
 * @param res               - Response object
 * @param callback          - Callback function (error,data)
 */
exports.queryResponseHandler    = function queryResponseHandler(err,data,res,callback)      {
    debug("Query response handler init...");

    if(err){ // Possible error while querying.
        // todo Handle errors by type and assign 4** or 5**
         debug(`Error : ${err.toString()}`);
         let errMsg = errorCodes.SEC.QUERY_ERROR;
         errMsg.hint = err;
         res.status(400);
         res.json(errMsg);
    }else { // No Error.
        callback(err,data);
    }
};

/**
 * @name                    - Data validator
 * @description             - Checks if the provided data attributes is present in the request body
 * @param paramVariables    - The param variables to check
 * @param req               - The request object to check from
 * @param res               - The response body to respond with any error messages if the provided request object fails to fulfill the param values.
 * @param callback          - Passes on with null as an error if every thing is up to order.
 */
exports.dataValidator           = function dataValidator(paramVariables,req,res,callback)   {
    debug(`Data validator init...`);

    paramVariables.forEach(function (variable) {
        req.checkBody(variable)
            .notEmpty().withMessage(`${variable} must not be empty`);
    });

    let validationError = req.validationErrors();

    if(validationError){ // caught validation error.
        debug(`Validation Error`);

        let errCode = errorCodes.SEC.VALIDATION_ERROR;
        errCode.detail = validationError;

        res.status(400);
        res.json(errCode);
    }else{ // validation has passed
        debug(`Validation Passed`);
        callback(null);
    }
};

/**
 * @name                    - Pick update data
 * @description             - Picks valid update data from the request body
 * @param pickFields        - List of fields that are valid to update.
 * @param req               - Request object
 * @param callback          - Callback function (error,validUpdateData)
 */
exports.pickUpdateData          = function pickUpdateData(pickFields,req,callback)          {
    debug("Pick update data init...");

    let updateData = {};
    pickFields.forEach(function (field,index) { // Looping through the valid update data fields
        if(! util.isNullOrUndefined(req.body[field])) { // check if the field exists on the query
            updateData[field] = req.body[field];
        }
        if(index+1 === pickFields.length) { // Looped through the final element.
            callback(null,updateData);
        }
    });
};

/**
 * @name                    - Query filter
 * @description             - Filters valid query from request
 * @param req               - Request object
 * @param lookingFor        - Query looking for
 * @return {{}}             - Valid queries.
 */
exports.queryFilter             = function queryFilter(req, lookingFor)                     {
    let query = {};
    lookingFor.forEach(function (element) {
        if(! util.isNullOrUndefined(req.query[element])){
            query[element] = req.query[element]
        }
    });
    return query;
};
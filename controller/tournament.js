/**
 * @author              Young Midoria
 * @name                heroAcademia
 * @module              tournament.js
 * @description         Controller for tournament
 * @kind                Controller
 * @copyright           Copyright : 2018
 */

let
    tournamentDAL        = require('../dal/tournament'),
    constants               = require('../lib/constant'),
    errorCodes              = constants.errorCodes,
    config                  = require('../config'),
    helper                  = require('../lib/helper/'),
    controllerHelper        = helper.controllerHelper,
    queryResponseHandler    = controllerHelper.queryResponseHandler,

    debug                   = require('debug')('heroAcademia/controller/tournament'),
    util                    = require('util'),

    log                     = require('../lib/helper/others/logger'),
                        
    async                   = require('async');


/**
 * @name                - Create
 * @description         - Creates tournament data
 * @param req           - Request object
 * @param res           - Response object
 * @param next          - Next
 */
exports.create          = function (req, res, next) {
    debug('Create init...');

    let body = req.body;
    async.waterfall([
        validateData,
        createData
    ],function () {
        debug('Create completed.');
    });

    /**
     * @name                - Validate data
     * @description         - Validates if the body contains the require field.
     * @param callback      - Callback function (error)
     */
    function validateData (callback) {
        debug('Validate data init...');

        controllerHelper.dataValidator([],req,res,callback);
    }
    
    /**
     * @name                - Create data
     * @description         - Creates tournament data
     * @param callback      - Callback function (error)
     */
    function createData (callback) {
        debug('Create data init...');
        
        tournamentDAL.create(body,function (err, data) { // Creating tournament data
            queryResponseHandler(err,data,res,function (err, data) {
                if(data){ // tournament data successfully created
                    res.status(201);
                    res.json(data);
                    callback(null);
                }else {
                    let errMsg = errorCodes.SEC.NO_DATA_FOUND;
                    errMsg.detail = 'tournament data could not be found (Failed to create tournament data)';
                    res.status(500);
                    res.json(errMsg);
                }
            });
        });
    }
};

/**
 * @name                - Find
 * @description         - Retrieves private, public and paginated data based on query construct
 * @param req           - Request object
 * @param res           - Response object
 * @param next          - Next
 */
exports.find            = function (req, res, next) {
    debug('Find init.');

    if(! util.isNullOrUndefined(req.query._id)) {
        if(util.isNullOrUndefined(req.query.private) === "true") {
            // todo insert authentication middle ware here
            getPrivate(req, res, next);
        }else{
            getPublic(req, res, next);
        }
    }else{
        let option = {
            page     : util.isNullOrUndefined(req.query.page)   ? 1                             : Number(req.query.page),   // assigns default page value, if not specified.
            sort     : util.isNullOrUndefined(req.query.sort)   ? {_id : -1}                    : req.query.sort,           // assigns default sort param value, if not specified.
            lean     : util.isNullOrUndefined(req.query.lean)   ? false                         : req.query.lean,           // assigns default lean value, if not specified.
            limit    : util.isNullOrUndefined(req.query.limit)  ? config.COLLECTION_RETURN_SIZE : Number(req.query.limit),   // assigns default limit value (passed to the config), if not specified.
            select   : "name wins loss draw firstModified lastModified"
        };

        let query = controllerHelper.queryFilter(req,["name","wins","loss","draw" , "_id", "__v"]);
        // get collection paginated invoked
        tournamentDAL.getCollectionsPaginated(query,option,function (err,data) {
            queryResponseHandler(err,data,res,function (err, data) { // Possible errors are handled.
                if(data){ // Data found.
                    debug("Found data");

                    res.status(200);
                    res.json(data);
                }else if(!data){ // No data found.
                    debug(`Found no data`);

                    let errMsg = errorCodes.SEC.NO_DATA_FOUND;
                    errMsg.detail = "No tournament data found."; // Adding detailed data.
                    res.status(404);
                    res.json(errMsg);
                }
            });
        });
    }


    
};

/**
 * @name                - Update Many
 * @description         - Updates all tournament data that matches query
 * @param req           - Request object
 * @param res           - Response object
 * @param next          - Next
 */
exports.update          = function (req, res, next) {
    debug(`Update many init.`);

    let query = controllerHelper.queryFilter(req,["name","wins","loss","draw", "_id", "__v"]);

    async.waterfall([
        pickUpdateData,
        updateData
    ],function () {
        debug("Update completed.");
    });

    /**
     * @name                - Pick update data
     * @description         - Picks up valid update data.
     * @param callback      - Callback function (error,validUpdateData)
     */
    function pickUpdateData (callback)                  {
        debug("Pick update data init...");

        controllerHelper.pickUpdateData(["name","wins","loss","draw"],req,function (err,validUpdateData) { // Picking up valid update data.
            if(Object.keys(validUpdateData).length === 0){ // No valid update data found.
                let errMsg = errorCodes.SEC.IMPROPER_DATA;
                errMsg.detail = "Valid update data not found in heroAcademia data update.";
                res.status(400);
                res.json(errMsg);
            }else if(Object.keys(validUpdateData).length > 0){callback(null,validUpdateData);} // Valid update data found.

        });
    }

    /**
     * @name                        - Update service
     * @description                 - Updates service data.
     * @param validUpdateData       - Valid update data.
     * @param callback              - Callback function (error)
     */
    function updateData (validUpdateData,callback)  {
        debug("Update service init...");

        if(Object.keys(query).length === 0){
                let errMsg = errorCodes.SEC.NO_DATA_FOUND;
                errMsg.detail = "No query data found.";
                res.status(400);
                res.json(errMsg)
        }else{
             tournamentDAL.updateMany(query,validUpdateData,function (err,data) {   // handling update.
                 queryResponseHandler(err,data,res,function (err, data) {    // Possible errors are handled.
                     res.status(200);
                     res.send(data);
                     callback(null);
                 });
             });
        }
    }
};

/**
 * @name                - Remove Many
 * @description         - Removes all tournament data that matches query
 * @param req           - Request object
 * @param res           - Response object
 * @param next          - Next
 */
exports.remove          = function (req, res, next) {
    debug('Remove many init.');

    let query = controllerHelper.queryFilter(req,["name","wins","loss","draw", "_id", "__v"]);

    if(Object.keys(query).length === 0){
            let errMsg = errorCodes.SEC.NO_DATA_FOUND;
            errMsg.detail = "No query data found.";
            res.status(400);
            res.json(errMsg)
    }else{
           tournamentDAL.removeMany(query,function (err,data) {   // handling update.
               queryResponseHandler(err,data,res,function (err, data) {   // Possible errors are handled.
                   res.status(200);
                   res.send(data);
               });
           });
    }
};


/**
 *
 * @name                - Find public
 * @description         - Find tournament data by id visible only fields that are public.
 * @param req           - Request object
 * @param res           - Response object
 * @param next          - Next
 */
function getPublic  (req, res, next) {
    debug('Find public init...');

    let
        tournamentId   = req.query._id,
        query       = {_id: tournamentId}; // query construction.

    tournamentDAL.getPublic(query,function (err,data) { // retrieve tournament public data (with out the value)
        queryResponseHandler(err,data,res,function (err, data) { // Error handled.
            if(!data){ // No tournament value could be found
                res.status(404);
                res.json(errorCodes.SEC.NO_DATA_FOUND);
            }else if(data){ // Found tournament data
                res.status(200);
                res.send(data);
            }
        });
    });
}

/**
 * @name                - Find private
 * @description         - Find tournament data by id visible only fields that are private.
 * @param req           - Request object
 * @param res           - Response object
 * @param next          - Next
 */
function getPrivate (req, res, next) {
    debug('Find private init...');

    let
        tournamentId = req.query._id,
        query = {_id: tournamentId}; // query construction.

    tournamentDAL.getPrivate(query,function (err,data) { // retrieve tournament public data (with out the value)
        queryResponseHandler(err,data,res,function (err, data) { // Error handled.
            if(!data){ // No tournament value could be found
                res.status(404);
                res.json(errorCodes.SEC.NO_DATA_FOUND);
            }else if(data){ // Found tournament data
                res.status(200);
                res.send(data);
            }
        });
    });
}
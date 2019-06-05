/**
 * @author              Young Midoria
 * @name                heroAcademia
 * @module              app.js
 * @description         Starting point for heroAcademia service.
 * @kind                Init
 * @copyright           Copyright : 2018
 */

let
    path        = require('path'),
    dotEnv      = require('dotenv').config({path: path.resolve(__dirname, '.env')}),
    express     = require('express'),
    app         = express(),
    parser      = require('body-parser').json(),
    validator   = require('express-validator')(),
    config      = require('./config'),
    route       = require('./routes'),
    mongoose    = require('mongoose'),
    unless      = require('express-unless'),
    debug       = require('debug')('heroAcademia'),
    helmet      = require('helmet'),
    constants   = require('./lib/constant'),
    errorCodes  = constants.errorCodes,
    constant    = constants.constant,
    dbCFailure  = 0,
    initializer = require('./lib/middleware/initializer');

/**
 * @description     - Connecting to mongodb
 */
mongoose.connect(config.MONGODB_URL, {useNewUrlParser: true});


/**
 * @description     - Defines successful mongodb connection
 */
mongoose.connection.on('connected',function () {
    debug(`Mongodb successfully Connected to : ${config.MONGODB_URL}`);
});

/**
 * @description     - Handling mongoose db connection error.
 */
mongoose.connection.on('error',function (err) {
    dbCFailure++;
    debug(`Error While Connecting to Mongodb at : ${config.MONGODB_URL}`);
    debug(`Connection Error is : ${err.toString()}`);
    if(dbCFailure < 10) {
            debug(`Retrying Connection ...`);
            mongoose.connect(config.MONGODB_URL);
    }
});

/**
 * @description     - Provides multiple securities.
 */
app.use(helmet());

/**
 * @description     - Defining mode and access control
 */
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', config.MODE === constant.RUNNING_MODES.PRODUCTION_MODE ? config.REVERSE_PROXY : "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/heroAcademia/apidoc'    ,express.static(path.join(__dirname,'./apidocs')));
app.use('/heroAcademia/coverage'  ,express.static(path.join(__dirname,'./coverage/lcov-report')));
app.use('/heroAcademia/test'      ,express.static(path.join(__dirname,'./report')));

/**
 * @description     - Passing third party middle wares, Data validator and json parser.
 */
app.use(validator);
app.use(parser);

/**
 * @name        - Ping dependent services
 * @description - Pings the services that this service is depended on for resilient functionality
 */
(function pingDependentServices() {
    debug("Passed pinger");
    initializer.pinger([
 // Begin dependant service list
     "http://hero_league.com",
    "http://villain_league.com",
// End dependant service list
        ],
        {abortIfFail: false}, function (err,allServicesUp) {
            if(allServicesUp){
                app.listen(config.HTTP_PORT,function () {
                    debug(`Server created at port : ${config.HTTP_PORT}`);
                });
            }else{
                debug(`Some dependent services may be down, quiting init sequence`);
            }
        });
})();

/**
 * @description     - Routing app.
 */
route(app);

/**
 * @description     - Request handler for unmatched endpoints.
 */
app.use(function (req, res, next) {
    if(req.url === "/") {
        res.redirect('http://localhost:3300/heroAcademia/apidoc');
        res.status(200);
    }else{
        debug("Un-matched endpoint");

        res.status(400);
        res.json(errorCodes.SEC.UN_MATCHED_ENDPOINT);
        next();
    }
});

/**
 * @description     - Exporting app for testing purposes. TODO remove when in production or dockerization
 */
module.exports = app;

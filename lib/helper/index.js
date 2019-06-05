/**
 * @author              Young Midoria
 * @name                heroAcademia
 * @module              index.js
 * @description         Index file for helper libraries
 * @kind                Lib
 * @copyright           Copyright : 2018
 */


let
    api  = require('./api'),
    controllerHelper = require('./others/controllerHelper');

/**
 * @name            - Index
 * @description     - Index for helper libraries
 * @type {}
 */
module.exports = {
    api                 : api,
    controllerHelper    : controllerHelper
};
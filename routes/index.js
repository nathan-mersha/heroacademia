/**
 * @author             Young Midoria
 * @name               heroAcademia
 * @description        Route index for heroAcademia
 * @kind               Route
 * @module             Route index
 * @copyright          Copyright : 2018
 */

// Begin route var declaration here
let
    teacher = require('./teacher'),
    student = require('./student'),
    tournament = require('./tournament'),
    history = require('./history');
// End route var declaration here

/**
 * @description     - Defines the first routing mechanism
 * @param app       - The router object
 */
module.exports = function (app) {
// Begin routing definition here
    app.use('/heroAcademia/teacher', teacher);
    app.use('/heroAcademia/student', student);
    app.use('/heroAcademia/tournament', tournament);
    app.use('/heroAcademia/history', history);
// End Routing definition here
};

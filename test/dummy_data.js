/**
 * @author              Young Midoria
 * @name                heroAcademia
 * @description         Test for heroAcademia __modelName__ service.
 * @kind                Test
 * @copyright           Copyright : 2018
 */

let
    dummyJSON = require('dummy-json'),
    mongoose = require('mongoose');

const customMock = {
    objectId : new mongoose.Types.ObjectId,
    buffer   : new mongoose.Types.Buffer,
    dates : new Date()
};

/**
 * @name        Dummy data
 * @description     Dummy data for service heroAcademia
 * @type {{create: {success: null, validationError: null}, get: {success: null, wrongIdFormat: string}, update: {success: *, invalidData: {invalidKey: string}}, delete: {success: null, dataNotFound: null}}}
 */
module.exports = {
    // Dummy data for service test begins here
        
                /**
                 * @name            - teacher
                 * @description     - Dummy data for teacher
                 */
                teacher : {
                    create  : {
                        success         : JSON.parse(dummyJSON.parse(' { "name" : "{{firstName}}" , "age" : "{{int 16 99}}" , "gender" : "{{lorem 5}}" , "followers" : [ {{#repeat 4}} "{{lorem 1}}" {{/repeat}} ] , "superPower" : "{{lorem 5}}" , "costume" : "{{lorem 5}}" , "powerGrade" : "{{lorem 5}}" , "tournament" : "{{objectId}}" , "history" : "{{objectId}}" , "angerLevel" : "{{int 10 99999}}" , "optimismLevel" : "{{int 10 99999}}" } ', {mockdata : customMock})),
                        validationError : { invalidKey : 'invalidValue' }
                    },
                    get    : {
                        success         : null,
                        wrongIdFormat   : 'wrongIdFormat'
                    },
                    update  : {  
                        success         : JSON.parse(dummyJSON.parse(' { "name" : "{{firstName}}" , "age" : "{{int 16 99}}" , "gender" : "{{lorem 5}}" , "followers" : [ {{#repeat 4}} "{{lorem 1}}" {{/repeat}} ] , "superPower" : "{{lorem 5}}" , "costume" : "{{lorem 5}}" , "powerGrade" : "{{lorem 5}}" , "tournament" : "{{objectId}}" , "history" : "{{objectId}}" , "angerLevel" : "{{int 10 99999}}" , "optimismLevel" : "{{int 10 99999}}" } ', {mockdata : customMock})),
                        invalidData     : { invalidKey : 'invalidValue'},
                    },
                    delete  : {
                        success         : null,
                        dataNotFound    : null
                    }
                },  
            
    
                /**
                 * @name            - student
                 * @description     - Dummy data for student
                 */
                student : {
                    create  : {
                        success         : JSON.parse(dummyJSON.parse(' { "name" : "{{firstName}}" , "age" : "{{int 16 99}}" , "gender" : "{{lorem 5}}" , "powerClass" : "{{lorem 5}}" , "superPower" : "{{lorem 5}}" , "costume" : "{{lorem 5}}" , "powerGrade" : "{{lorem 5}}" , "tournament" : "{{objectId}}" , "history" : "{{objectId}}" , "wins" : "{{int 10 99999}}" , "loss" : "{{int 10 99999}}" , "draw" : "{{int 10 99999}}" } ', {mockdata : customMock})),
                        validationError : { invalidKey : 'invalidValue' }
                    },
                    get    : {
                        success         : null,
                        wrongIdFormat   : 'wrongIdFormat'
                    },
                    update  : {  
                        success         : JSON.parse(dummyJSON.parse(' { "name" : "{{firstName}}" , "age" : "{{int 16 99}}" , "gender" : "{{lorem 5}}" , "powerClass" : "{{lorem 5}}" , "superPower" : "{{lorem 5}}" , "costume" : "{{lorem 5}}" , "powerGrade" : "{{lorem 5}}" , "tournament" : "{{objectId}}" , "history" : "{{objectId}}" , "wins" : "{{int 10 99999}}" , "loss" : "{{int 10 99999}}" , "draw" : "{{int 10 99999}}" } ', {mockdata : customMock})),
                        invalidData     : { invalidKey : 'invalidValue'},
                    },
                    delete  : {
                        success         : null,
                        dataNotFound    : null
                    }
                },  
            
    
                /**
                 * @name            - tournament
                 * @description     - Dummy data for tournament
                 */
                tournament : {
                    create  : {
                        success         : JSON.parse(dummyJSON.parse(' { "name" : "{{firstName}}" , "wins" : "{{int 10 99999}}" , "loss" : "{{int 10 99999}}" , "draw" : "{{int 10 99999}}" } ', {mockdata : customMock})),
                        validationError : { invalidKey : 'invalidValue' }
                    },
                    get    : {
                        success         : null,
                        wrongIdFormat   : 'wrongIdFormat'
                    },
                    update  : {  
                        success         : JSON.parse(dummyJSON.parse(' { "name" : "{{firstName}}" , "wins" : "{{int 10 99999}}" , "loss" : "{{int 10 99999}}" , "draw" : "{{int 10 99999}}" } ', {mockdata : customMock})),
                        invalidData     : { invalidKey : 'invalidValue'},
                    },
                    delete  : {
                        success         : null,
                        dataNotFound    : null
                    }
                },  
            
    
                /**
                 * @name            - history
                 * @description     - Dummy data for history
                 */
                history : {
                    create  : {
                        success         : JSON.parse(dummyJSON.parse(' { "angerLevel" : "{{int 10 99999}}" , "optimismLevel" : "{{int 10 99999}}" , "enemyDefeat" : "{{int 10 99999}}" , "archNemesis" : "{{lorem 5}}" , "battleGroundDefeat" : "{{int 10 99999}}" , "enemyCapture" : "{{int 10 99999}}" , "alive" : {{boolean}} } ', {mockdata : customMock})),
                        validationError : { invalidKey : 'invalidValue' }
                    },
                    get    : {
                        success         : null,
                        wrongIdFormat   : 'wrongIdFormat'
                    },
                    update  : {  
                        success         : JSON.parse(dummyJSON.parse(' { "angerLevel" : "{{int 10 99999}}" , "optimismLevel" : "{{int 10 99999}}" , "enemyDefeat" : "{{int 10 99999}}" , "archNemesis" : "{{lorem 5}}" , "battleGroundDefeat" : "{{int 10 99999}}" , "enemyCapture" : "{{int 10 99999}}" , "alive" : {{boolean}} } ', {mockdata : customMock})),
                        invalidData     : { invalidKey : 'invalidValue'},
                    },
                    delete  : {
                        success         : null,
                        dataNotFound    : null
                    }
                },  
            
// Dummy data for service test ends here
};
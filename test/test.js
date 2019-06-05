/**
 * @author              Young Midoria
 * @name                heroAcademia
 * @description         Test for heroAcademia service.
 * @kind                Test
 * @copyright           Copyright : 2018
 */

let
    request     = require('supertest'),
    mongoose    = require('mongoose'),
    objectId    = mongoose.Types.ObjectId,
    expect      = require('chai').expect,

    app         = require('../app'),
    constants   = require('../lib/constant'),
    url         = require('./url_generator'),
    errorCodes  = constants.errorCodes,
    dummyData   = require('./dummy_data');

/**
 * @name                - Send request
 * @description         - Abstracts test requests.
 * @param urlPath       - Url path
 * @param method        - Method
 * @param body          - Body if any
 * @param expectCode    - Code to expect
 * @param callback      - Callback function (error,response)
 */
function sendRequest(urlPath,method,body,expectCode,callback) {
    request(app)[method](urlPath)
        .send(body)
        .expect(expectCode)
        .end(callback);
}

/**
 * @name                - Is error response
 * @description         - Checks if body is an error response.
 * @param body          - Body to check.
 */
function isErrorResponse(body){
    expect(body).to.be.an('object').that.includes.all.keys('errorCode','errorName','errorMessage','hint');
    expect(body.errorCode,body.errorName,body.errorMessage,body.hint).to.be.a('string');
}

/**
 * @name                - Is paginated response
 * @description         - Checks if body is paginated response
 * @param body          - Body to check.
 */
function isPaginatedResponse(body){
    expect(body).to.be.an('object').that.has.all.keys('docs','total','limit','page','pages');
    expect(body.docs).to.be.an('array');
    expect(body.total,body.limit,body.page,body.pages).to.be.a('number');
}

/**
 * @name                - Is update response
 * @description         - Evaluates if body is update response
 * @param body          - Body to evaluate
 */
function isUpdateResponse(body) {
    expect(body).to.be.an('object').that.has.all.keys('n', 'nModified', 'ok');
}

/**
 * @name                - Is update response
 * @description         - Evaluates if body is update response
 * @param body          - Body to evaluate
 */
function isRemoveResponse(body) {
    expect(body).to.be.an('object').that.has.all.keys('n', 'ok');
}

// Begin inserting test validation here
    
        describe("teacher",function () {
        
            /**
             * @name            - is__modelName__Public
             * @param body      - Body to evaluate
             * @param private   - If true then body will be evaluate it's private fields as well
             * @description     - Validates if the provided data is __modelName__ public data
             */
             function isteacher(body, private = false) {
                 if(private) {
// Begin body expected evaluation here for model : teacher (private)
    expect(body).to.be.an('object').that.has.all.keys('__v', '_id', 'firstModified', 'lastModified', 'name', 'age', 'gender', 'followers', 'superPower', 'costume', 'powerGrade', 'tournament', 'history', 'angerLevel', 'optimismLevel');
    expect(body.name,body.gender,body.superPower,body.costume,body.powerGrade).to.be.a('String');
    expect(body.age,body.angerLevel,body.optimismLevel).to.be.a('Number');
    expect(body.followers).to.be.a('Array');
    expect(new objectId(body.tournament,body.history)).to.be.an.instanceof(objectId);
// End body expected evaluation here for model : teacher (private)
                 }else{
// Begin body expected evaluation here for model : teacher (public)
    expect(body).to.be.an('object').that.has.all.keys('__v', '_id', 'firstModified', 'lastModified', 'name', 'age', 'gender', 'followers', 'superPower', 'costume', 'powerGrade', 'tournament', 'history', 'angerLevel', 'optimismLevel');
    expect(body.name,body.gender,body.superPower,body.costume,body.powerGrade).to.be.a('String');
    expect(body.age,body.angerLevel,body.optimismLevel).to.be.a('Number');
    expect(body.followers).to.be.a('Array');
    expect(new objectId(body.tournament,body.history)).to.be.an.instanceof(objectId);
// End body expected evaluation here for model : teacher (public)
                 }
        
                expect(new Date(body.lastModified),new Date(body.firstModified)).to.be.an.instanceOf(Date);
                expect(new objectId(body._id)).to.be.an.instanceOf(objectId);
            }
            
            describe("Create" ,function () {
                
                this.timeout(10000);
                it("Should successfully create teacher" ,function (done) {
                    sendRequest(url.teacher.create(),'post',dummyData.teacher.create.success,201,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isteacher(body, true);
                        dummyData.teacher.get.success = body;
                        done();
                    });
                });
               
            });
        
            describe("Find" ,function () {
            
                this.timeout(10000);
                it("Should successfully retrieve teacher data (public)" ,function (done) {
                    sendRequest(url.teacher.findByIdPublic(dummyData.teacher.get.success._id),'get',null,200,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        expect(body._id).to.equal(dummyData.teacher.get.success._id);
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should successfully retrieve teacher data (private)" ,function (done) {
                    sendRequest(url.teacher.findByIdPrivate(dummyData.teacher.get.success._id),'get',null,200,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        expect(body._id).to.equal(dummyData.teacher.get.success._id);
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should fail to retrieve teacher data ( Id wrong format )" ,function (done) {
                    sendRequest(url.teacher.findByIdPublic(dummyData.teacher.get.wrongIdFormat),'get',null,400,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        expect(body.errorCode).to.equal(errorCodes.SEC.QUERY_ERROR.errorCode); 
                        done();
                    });
                });
            });
        
            describe("Find paginated" ,function () {
            
                this.timeout(10000);
                it("Should successfully retrieve teacher paginated data" ,function (done) {
                    let validQuery = '__validQuery__';
                    sendRequest(url.teacher.findPaginated(validQuery),'get',null,200,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isPaginatedResponse(body); 
                        done();
                    });
                });
            });
        
            describe("Update" ,function () {
            
                this.timeout(10000);
                it("Should successfully update teacher data" ,function (done) {
                    
                    let query = `_id=${dummyData.teacher.get.success._id}`;
                    sendRequest(url.teacher.update(query),'put',dummyData.teacher.update.success,200,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isUpdateResponse(body); 
                        expect(body.nModified).to.be.at.least(1); 
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should fail to update teacher data (Query not found)" ,function (done) {
                    let query = '';
                    sendRequest(url.teacher.update(query),'put',dummyData.teacher.update.success,400,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        done();
                    });
                });
        
                this.timeout(10000);
                it("Should fail to update teacher data (Invalid update data)",function (done) {
                    let query = `_id=${dummyData.teacher.get.success._id}`;
                    sendRequest(url.teacher.update(query),'put',dummyData.teacher.update.invalidData,400,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        expect(body.errorCode).to.equal(errorCodes.SEC.IMPROPER_DATA.errorCode);
                        done();
                    });
                });
            });
        
            describe("Remove" ,function () {
            
                this.timeout(10000);
                it("Should successfully remove teacher data" ,function (done) {
                    let query = `_id=${dummyData.teacher.get.success._id}`;
                    sendRequest(url.teacher.remove(query),'del',null,200,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isRemoveResponse(body); 
                        expect(body.n).to.be.at.least(1); 
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should fail remove teacher data (Query not found)" ,function (done) {
                    let query = '';
                    sendRequest(url.teacher.remove(query),'del',null,400,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        done();
                });
            });
            });
        });
    
    
        describe("student",function () {
        
            /**
             * @name            - is__modelName__Public
             * @param body      - Body to evaluate
             * @param private   - If true then body will be evaluate it's private fields as well
             * @description     - Validates if the provided data is __modelName__ public data
             */
             function isstudent(body, private = false) {
                 if(private) {
// Begin body expected evaluation here for model : student (private)
    expect(body).to.be.an('object').that.has.all.keys('__v', '_id', 'firstModified', 'lastModified', 'name', 'age', 'gender', 'powerClass', 'superPower', 'costume', 'powerGrade', 'tournament', 'history', 'wins', 'loss', 'draw');
    expect(body.name,body.gender,body.powerClass,body.superPower,body.costume,body.powerGrade).to.be.a('String');
    expect(body.age,body.wins,body.loss,body.draw).to.be.a('Number');
    expect(new objectId(body.tournament,body.history)).to.be.an.instanceof(objectId);
// End body expected evaluation here for model : student (private)
                 }else{
// Begin body expected evaluation here for model : student (public)
    expect(body).to.be.an('object').that.has.all.keys('__v', '_id', 'firstModified', 'lastModified', 'name', 'age', 'gender', 'powerClass', 'superPower', 'costume', 'powerGrade', 'tournament', 'history', 'wins', 'loss', 'draw');
    expect(body.name,body.gender,body.powerClass,body.superPower,body.costume,body.powerGrade).to.be.a('String');
    expect(body.age,body.wins,body.loss,body.draw).to.be.a('Number');
    expect(new objectId(body.tournament,body.history)).to.be.an.instanceof(objectId);
// End body expected evaluation here for model : student (public)
                 }
        
                expect(new Date(body.lastModified),new Date(body.firstModified)).to.be.an.instanceOf(Date);
                expect(new objectId(body._id)).to.be.an.instanceOf(objectId);
            }
            
            describe("Create" ,function () {
                
                this.timeout(10000);
                it("Should successfully create student" ,function (done) {
                    sendRequest(url.student.create(),'post',dummyData.student.create.success,201,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isstudent(body, true);
                        dummyData.student.get.success = body;
                        done();
                    });
                });
               
            });
        
            describe("Find" ,function () {
            
                this.timeout(10000);
                it("Should successfully retrieve student data (public)" ,function (done) {
                    sendRequest(url.student.findByIdPublic(dummyData.student.get.success._id),'get',null,200,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        expect(body._id).to.equal(dummyData.student.get.success._id);
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should successfully retrieve student data (private)" ,function (done) {
                    sendRequest(url.student.findByIdPrivate(dummyData.student.get.success._id),'get',null,200,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        expect(body._id).to.equal(dummyData.student.get.success._id);
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should fail to retrieve student data ( Id wrong format )" ,function (done) {
                    sendRequest(url.student.findByIdPublic(dummyData.student.get.wrongIdFormat),'get',null,400,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        expect(body.errorCode).to.equal(errorCodes.SEC.QUERY_ERROR.errorCode); 
                        done();
                    });
                });
            });
        
            describe("Find paginated" ,function () {
            
                this.timeout(10000);
                it("Should successfully retrieve student paginated data" ,function (done) {
                    let validQuery = '__validQuery__';
                    sendRequest(url.student.findPaginated(validQuery),'get',null,200,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isPaginatedResponse(body); 
                        done();
                    });
                });
            });
        
            describe("Update" ,function () {
            
                this.timeout(10000);
                it("Should successfully update student data" ,function (done) {
                    
                    let query = `_id=${dummyData.student.get.success._id}`;
                    sendRequest(url.student.update(query),'put',dummyData.student.update.success,200,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isUpdateResponse(body); 
                        expect(body.nModified).to.be.at.least(1); 
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should fail to update student data (Query not found)" ,function (done) {
                    let query = '';
                    sendRequest(url.student.update(query),'put',dummyData.student.update.success,400,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        done();
                    });
                });
        
                this.timeout(10000);
                it("Should fail to update student data (Invalid update data)",function (done) {
                    let query = `_id=${dummyData.student.get.success._id}`;
                    sendRequest(url.student.update(query),'put',dummyData.student.update.invalidData,400,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        expect(body.errorCode).to.equal(errorCodes.SEC.IMPROPER_DATA.errorCode);
                        done();
                    });
                });
            });
        
            describe("Remove" ,function () {
            
                this.timeout(10000);
                it("Should successfully remove student data" ,function (done) {
                    let query = `_id=${dummyData.student.get.success._id}`;
                    sendRequest(url.student.remove(query),'del',null,200,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isRemoveResponse(body); 
                        expect(body.n).to.be.at.least(1); 
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should fail remove student data (Query not found)" ,function (done) {
                    let query = '';
                    sendRequest(url.student.remove(query),'del',null,400,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        done();
                });
            });
            });
        });
    
    
        describe("tournament",function () {
        
            /**
             * @name            - is__modelName__Public
             * @param body      - Body to evaluate
             * @param private   - If true then body will be evaluate it's private fields as well
             * @description     - Validates if the provided data is __modelName__ public data
             */
             function istournament(body, private = false) {
                 if(private) {
// Begin body expected evaluation here for model : tournament (private)
    expect(body).to.be.an('object').that.has.all.keys('__v', '_id', 'firstModified', 'lastModified', 'name', 'wins', 'loss', 'draw');
    expect(body.name).to.be.a('String');
    expect(body.wins,body.loss,body.draw).to.be.a('Number');
// End body expected evaluation here for model : tournament (private)
                 }else{
// Begin body expected evaluation here for model : tournament (public)
    expect(body).to.be.an('object').that.has.all.keys('__v', '_id', 'firstModified', 'lastModified', 'name', 'wins', 'loss', 'draw');
    expect(body.name).to.be.a('String');
    expect(body.wins,body.loss,body.draw).to.be.a('Number');
// End body expected evaluation here for model : tournament (public)
                 }
        
                expect(new Date(body.lastModified),new Date(body.firstModified)).to.be.an.instanceOf(Date);
                expect(new objectId(body._id)).to.be.an.instanceOf(objectId);
            }
            
            describe("Create" ,function () {
                
                this.timeout(10000);
                it("Should successfully create tournament" ,function (done) {
                    sendRequest(url.tournament.create(),'post',dummyData.tournament.create.success,201,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        istournament(body, true);
                        dummyData.tournament.get.success = body;
                        done();
                    });
                });
               
            });
        
            describe("Find" ,function () {
            
                this.timeout(10000);
                it("Should successfully retrieve tournament data (public)" ,function (done) {
                    sendRequest(url.tournament.findByIdPublic(dummyData.tournament.get.success._id),'get',null,200,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        expect(body._id).to.equal(dummyData.tournament.get.success._id);
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should successfully retrieve tournament data (private)" ,function (done) {
                    sendRequest(url.tournament.findByIdPrivate(dummyData.tournament.get.success._id),'get',null,200,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        expect(body._id).to.equal(dummyData.tournament.get.success._id);
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should fail to retrieve tournament data ( Id wrong format )" ,function (done) {
                    sendRequest(url.tournament.findByIdPublic(dummyData.tournament.get.wrongIdFormat),'get',null,400,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        expect(body.errorCode).to.equal(errorCodes.SEC.QUERY_ERROR.errorCode); 
                        done();
                    });
                });
            });
        
            describe("Find paginated" ,function () {
            
                this.timeout(10000);
                it("Should successfully retrieve tournament paginated data" ,function (done) {
                    let validQuery = '__validQuery__';
                    sendRequest(url.tournament.findPaginated(validQuery),'get',null,200,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isPaginatedResponse(body); 
                        done();
                    });
                });
            });
        
            describe("Update" ,function () {
            
                this.timeout(10000);
                it("Should successfully update tournament data" ,function (done) {
                    
                    let query = `_id=${dummyData.tournament.get.success._id}`;
                    sendRequest(url.tournament.update(query),'put',dummyData.tournament.update.success,200,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isUpdateResponse(body); 
                        expect(body.nModified).to.be.at.least(1); 
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should fail to update tournament data (Query not found)" ,function (done) {
                    let query = '';
                    sendRequest(url.tournament.update(query),'put',dummyData.tournament.update.success,400,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        done();
                    });
                });
        
                this.timeout(10000);
                it("Should fail to update tournament data (Invalid update data)",function (done) {
                    let query = `_id=${dummyData.tournament.get.success._id}`;
                    sendRequest(url.tournament.update(query),'put',dummyData.tournament.update.invalidData,400,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        expect(body.errorCode).to.equal(errorCodes.SEC.IMPROPER_DATA.errorCode);
                        done();
                    });
                });
            });
        
            describe("Remove" ,function () {
            
                this.timeout(10000);
                it("Should successfully remove tournament data" ,function (done) {
                    let query = `_id=${dummyData.tournament.get.success._id}`;
                    sendRequest(url.tournament.remove(query),'del',null,200,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isRemoveResponse(body); 
                        expect(body.n).to.be.at.least(1); 
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should fail remove tournament data (Query not found)" ,function (done) {
                    let query = '';
                    sendRequest(url.tournament.remove(query),'del',null,400,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        done();
                });
            });
            });
        });
    
    
        describe("history",function () {
        
            /**
             * @name            - is__modelName__Public
             * @param body      - Body to evaluate
             * @param private   - If true then body will be evaluate it's private fields as well
             * @description     - Validates if the provided data is __modelName__ public data
             */
             function ishistory(body, private = false) {
                 if(private) {
// Begin body expected evaluation here for model : history (private)
    expect(body).to.be.an('object').that.has.all.keys('__v', '_id', 'firstModified', 'lastModified', 'angerLevel', 'optimismLevel', 'enemyDefeat', 'archNemesis', 'battleGroundDefeat', 'enemyCapture', 'alive');
    expect(body.archNemesis).to.be.a('String');
    expect(body.angerLevel,body.optimismLevel,body.enemyDefeat,body.battleGroundDefeat,body.enemyCapture).to.be.a('Number');
    expect(body.alive).to.be.a('Boolean');
// End body expected evaluation here for model : history (private)
                 }else{
// Begin body expected evaluation here for model : history (public)
    expect(body).to.be.an('object').that.has.all.keys('__v', '_id', 'firstModified', 'lastModified', 'angerLevel', 'optimismLevel', 'enemyDefeat', 'archNemesis', 'battleGroundDefeat', 'enemyCapture', 'alive');
    expect(body.archNemesis).to.be.a('String');
    expect(body.angerLevel,body.optimismLevel,body.enemyDefeat,body.battleGroundDefeat,body.enemyCapture).to.be.a('Number');
    expect(body.alive).to.be.a('Boolean');
// End body expected evaluation here for model : history (public)
                 }
        
                expect(new Date(body.lastModified),new Date(body.firstModified)).to.be.an.instanceOf(Date);
                expect(new objectId(body._id)).to.be.an.instanceOf(objectId);
            }
            
            describe("Create" ,function () {
                
                this.timeout(10000);
                it("Should successfully create history" ,function (done) {
                    sendRequest(url.history.create(),'post',dummyData.history.create.success,201,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        ishistory(body, true);
                        dummyData.history.get.success = body;
                        done();
                    });
                });
               
            });
        
            describe("Find" ,function () {
            
                this.timeout(10000);
                it("Should successfully retrieve history data (public)" ,function (done) {
                    sendRequest(url.history.findByIdPublic(dummyData.history.get.success._id),'get',null,200,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        expect(body._id).to.equal(dummyData.history.get.success._id);
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should successfully retrieve history data (private)" ,function (done) {
                    sendRequest(url.history.findByIdPrivate(dummyData.history.get.success._id),'get',null,200,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        expect(body._id).to.equal(dummyData.history.get.success._id);
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should fail to retrieve history data ( Id wrong format )" ,function (done) {
                    sendRequest(url.history.findByIdPublic(dummyData.history.get.wrongIdFormat),'get',null,400,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        expect(body.errorCode).to.equal(errorCodes.SEC.QUERY_ERROR.errorCode); 
                        done();
                    });
                });
            });
        
            describe("Find paginated" ,function () {
            
                this.timeout(10000);
                it("Should successfully retrieve history paginated data" ,function (done) {
                    let validQuery = '__validQuery__';
                    sendRequest(url.history.findPaginated(validQuery),'get',null,200,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isPaginatedResponse(body); 
                        done();
                    });
                });
            });
        
            describe("Update" ,function () {
            
                this.timeout(10000);
                it("Should successfully update history data" ,function (done) {
                    
                    let query = `_id=${dummyData.history.get.success._id}`;
                    sendRequest(url.history.update(query),'put',dummyData.history.update.success,200,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isUpdateResponse(body); 
                        expect(body.nModified).to.be.at.least(1); 
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should fail to update history data (Query not found)" ,function (done) {
                    let query = '';
                    sendRequest(url.history.update(query),'put',dummyData.history.update.success,400,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        done();
                    });
                });
        
                this.timeout(10000);
                it("Should fail to update history data (Invalid update data)",function (done) {
                    let query = `_id=${dummyData.history.get.success._id}`;
                    sendRequest(url.history.update(query),'put',dummyData.history.update.invalidData,400,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        expect(body.errorCode).to.equal(errorCodes.SEC.IMPROPER_DATA.errorCode);
                        done();
                    });
                });
            });
        
            describe("Remove" ,function () {
            
                this.timeout(10000);
                it("Should successfully remove history data" ,function (done) {
                    let query = `_id=${dummyData.history.get.success._id}`;
                    sendRequest(url.history.remove(query),'del',null,200,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isRemoveResponse(body); 
                        expect(body.n).to.be.at.least(1); 
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should fail remove history data (Query not found)" ,function (done) {
                    let query = '';
                    sendRequest(url.history.remove(query),'del',null,400,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        done();
                });
            });
            });
        });
    
// End inserting test validation here
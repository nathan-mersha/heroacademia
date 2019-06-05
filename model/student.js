/**
 * @author             Young Midoria
 * @name               heroAcademia
 * @description        Manages student for heroAcademia
 * @kind               Model
 * @module             Defines student model
 * @copyright          Copyright : 2018
 */

let
    mongoose            = require('mongoose'),
    Schema              = mongoose.Schema,
    config              = require('../config'),
    mongoosastic        = require('mongoosastic'),
    debug               = require('debug')('heroAcademia/model/student'),
    mongoosePaginate    = require('mongoose-paginate');

let student = new Schema({
    // Schema definition begins here
    name : {type:String,es_indexed:true},
    age : {type:Number,es_indexed:true},
    gender : {type:String,es_indexed:true},
    powerClass : {type:String,es_indexed:true},
    superPower : {type:String,es_indexed:false},
    costume : {type:String,es_indexed:true},
    powerGrade : {type:String,es_indexed:true},
    tournament : {type:Schema.Types.ObjectId,es_indexed:true,ref:"Tournament"},
    history : {type:Schema.Types.ObjectId,es_indexed:true,ref:"History"},
    wins : {type:Number,es_indexed:true},
    loss : {type:Number,es_indexed:true},
    draw : {type:Number,es_indexed:true},
     firstModified : {type : Date, es_indexed : true},
     lastModified : {type : Date, es_indexed : true}
    // Schema definition ends here
});


/*
 Adding plugins
 */
student.plugin(mongoosePaginate);

/*
 Adding plugin
 */
student.plugin(mongoosastic,{
    hosts : [
        String(config.ELASTIC_SEARCH_URL), // Adding elastic search url for latter search indexing...
    ]
});


// Updating time Stamp of first and last modified before initial save
student.pre('save',function preSave(next) {
    let studentSchema  = this;
    let now = new Date();

    if(!studentSchema.firstModified ){  // Saving for the first time
        studentSchema.firstModified  = now.toISOString();
        studentSchema.lastModified   = now.toISOString();
        next();
    }else{ // Saving Modified data
        studentSchema.lastModified   = now.toISOString();
        next();
    }
});

let studentSchema = mongoose.model('student', student);

/**
 * @description     - Creating mapping with elastic search
 */
studentSchema.createMapping(function (err,mapping) {
    if(err){
        debug(`Error while mapping`);
        debug(`Error is : ${err}`);
    }else{
        debug(`Successful Mapping`);
        debug(`${mapping}`);
    }
});

module.exports = studentSchema;
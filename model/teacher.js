/**
 * @author             Young Midoria
 * @name               heroAcademia
 * @description        Manages teacher for heroAcademia
 * @kind               Model
 * @module             Defines teacher model
 * @copyright          Copyright : 2018
 */

let
    mongoose            = require('mongoose'),
    Schema              = mongoose.Schema,
    config              = require('../config'),
    mongoosastic        = require('mongoosastic'),
    debug               = require('debug')('heroAcademia/model/teacher'),
    mongoosePaginate    = require('mongoose-paginate');

let teacher = new Schema({
    // Schema definition begins here
    name : {type:String,es_indexed:true},
    age : {type:Number,es_indexed:true},
    gender : {type:String,es_indexed:true},
    followers : {type:Array,es_indexed:true},
    superPower : {type:String,es_indexed:false},
    costume : {type:String,es_indexed:true},
    powerGrade : {type:String,es_indexed:true},
    tournament : {type:Schema.Types.ObjectId,es_indexed:true,ref:"Tournament"},
    history : {type:Schema.Types.ObjectId,es_indexed:true,ref:"History"},
    angerLevel : {type:Number,es_indexed:true},
    optimismLevel : {type:Number,es_indexed:true},
     firstModified : {type : Date, es_indexed : true},
     lastModified : {type : Date, es_indexed : true}
    // Schema definition ends here
});


/*
 Adding plugins
 */
teacher.plugin(mongoosePaginate);

/*
 Adding plugin
 */
teacher.plugin(mongoosastic,{
    hosts : [
        String(config.ELASTIC_SEARCH_URL), // Adding elastic search url for latter search indexing...
    ]
});


// Updating time Stamp of first and last modified before initial save
teacher.pre('save',function preSave(next) {
    let teacherSchema  = this;
    let now = new Date();

    if(!teacherSchema.firstModified ){  // Saving for the first time
        teacherSchema.firstModified  = now.toISOString();
        teacherSchema.lastModified   = now.toISOString();
        next();
    }else{ // Saving Modified data
        teacherSchema.lastModified   = now.toISOString();
        next();
    }
});

let teacherSchema = mongoose.model('teacher', teacher);

/**
 * @description     - Creating mapping with elastic search
 */
teacherSchema.createMapping(function (err,mapping) {
    if(err){
        debug(`Error while mapping`);
        debug(`Error is : ${err}`);
    }else{
        debug(`Successful Mapping`);
        debug(`${mapping}`);
    }
});

module.exports = teacherSchema;
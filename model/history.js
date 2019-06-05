/**
 * @author             Young Midoria
 * @name               heroAcademia
 * @description        Manages history for heroAcademia
 * @kind               Model
 * @module             Defines history model
 * @copyright          Copyright : 2018
 */

let
    mongoose            = require('mongoose'),
    Schema              = mongoose.Schema,
    config              = require('../config'),
    mongoosastic        = require('mongoosastic'),
    debug               = require('debug')('heroAcademia/model/history'),
    mongoosePaginate    = require('mongoose-paginate');

let history = new Schema({
    // Schema definition begins here
    angerLevel : {type:Number,es_indexed:true},
    optimismLevel : {type:Number,es_indexed:true},
    enemyDefeat : {type:Number,es_indexed:true},
    archNemesis : {type:String,es_indexed:true},
    battleGroundDefeat : {type:Number,es_indexed:true},
    enemyCapture : {type:Number,es_indexed:true},
    alive : {type:Boolean,es_indexed:true},
     firstModified : {type : Date, es_indexed : true},
     lastModified : {type : Date, es_indexed : true}
    // Schema definition ends here
});


/*
 Adding plugins
 */
history.plugin(mongoosePaginate);

/*
 Adding plugin
 */
history.plugin(mongoosastic,{
    hosts : [
        String(config.ELASTIC_SEARCH_URL), // Adding elastic search url for latter search indexing...
    ]
});


// Updating time Stamp of first and last modified before initial save
history.pre('save',function preSave(next) {
    let historySchema  = this;
    let now = new Date();

    if(!historySchema.firstModified ){  // Saving for the first time
        historySchema.firstModified  = now.toISOString();
        historySchema.lastModified   = now.toISOString();
        next();
    }else{ // Saving Modified data
        historySchema.lastModified   = now.toISOString();
        next();
    }
});

let historySchema = mongoose.model('history', history);

/**
 * @description     - Creating mapping with elastic search
 */
historySchema.createMapping(function (err,mapping) {
    if(err){
        debug(`Error while mapping`);
        debug(`Error is : ${err}`);
    }else{
        debug(`Successful Mapping`);
        debug(`${mapping}`);
    }
});

module.exports = historySchema;
/**
 * @author             Young Midoria
 * @name               heroAcademia
 * @description        Manages tournament for heroAcademia
 * @kind               Model
 * @module             Defines tournament model
 * @copyright          Copyright : 2018
 */

let
    mongoose            = require('mongoose'),
    Schema              = mongoose.Schema,
    config              = require('../config'),
    mongoosastic        = require('mongoosastic'),
    debug               = require('debug')('heroAcademia/model/tournament'),
    mongoosePaginate    = require('mongoose-paginate');

let tournament = new Schema({
    // Schema definition begins here
    name : {type:String,es_indexed:true},
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
tournament.plugin(mongoosePaginate);

/*
 Adding plugin
 */
tournament.plugin(mongoosastic,{
    hosts : [
        String(config.ELASTIC_SEARCH_URL), // Adding elastic search url for latter search indexing...
    ]
});


// Updating time Stamp of first and last modified before initial save
tournament.pre('save',function preSave(next) {
    let tournamentSchema  = this;
    let now = new Date();

    if(!tournamentSchema.firstModified ){  // Saving for the first time
        tournamentSchema.firstModified  = now.toISOString();
        tournamentSchema.lastModified   = now.toISOString();
        next();
    }else{ // Saving Modified data
        tournamentSchema.lastModified   = now.toISOString();
        next();
    }
});

let tournamentSchema = mongoose.model('tournament', tournament);

/**
 * @description     - Creating mapping with elastic search
 */
tournamentSchema.createMapping(function (err,mapping) {
    if(err){
        debug(`Error while mapping`);
        debug(`Error is : ${err}`);
    }else{
        debug(`Successful Mapping`);
        debug(`${mapping}`);
    }
});

module.exports = tournamentSchema;
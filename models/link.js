/**
 * Created by apisit on 4/6/2560.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var linkSchema = new Schema({
    longUrl: String,
    token: String
});

var Link = mongoose.model('Link',linkSchema)


module.exports = Link
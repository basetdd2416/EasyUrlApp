/**
 * Created by apisit on 4/6/2560.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const config = require('../config');
var linkSchema = new Schema({
    longUrl: String,
    token: String
});

/*linkSchema.methods.generateAuthToken = function () {
    var link = this;

    var token = jwt.sign({_id: link._id.toHexString()}, config.secret).toString().slice(-5);
    link.token = token;
    return link.save()
        .then(() => {
            return token;
        });
};

linkSchema.statics.findByToken = function (token) {
    var Link = this;
    var decoded;

    try {
        decoded = jwt.verify(token, config.secret)
    } catch (e) {
        console.log("come to error");
        console.log(e);
    }

    console.log(decoded)
    return Link.findOne({
        _id: decoded._id,
        token
    })
        .then(result => {
            return result
        })
}*/

var Link = mongoose.model('Link', linkSchema)


module.exports = Link
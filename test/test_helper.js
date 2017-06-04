/**
 * Created by apisit on 4/6/2560.
 */
const mongoose = require('mongoose');
const config = require('../config')


before((done)=>{
    mongoose.connect('mongodb://localhost:27017/EasyLinkAp_test');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback() {
        mongoose.Promise = global.Promise;
        done();
    });
});



beforeEach((done)=>{
    done()
})

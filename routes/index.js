var express = require('express');
var router = express.Router();
const Link = require('../models/link');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'EasyUrlApp'});
});
/* GET :token page. */
router.get('/:token', function (req, res, next) {
    const token = req.params.token;
    const db = req.app.get('db');
    Link.findOne({token}).then(link=>{
        if (!link) {
            return next({
                message: "token not found",
                status: 404
            });
        }
        res.redirect(link.longUrl);
    })

});

module.exports = router;

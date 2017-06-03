var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'EasyUrlApp'});
});
/* GET :token page. */
router.get('/:token', function (req, res, next) {
    const token = req.params.token;
    const db = req.app.get('db');
    const link = db.get('links').find({token}).value();
    if (!link) {
        return next({
            message: "token not found",
            status: 404
        });
    }
    /*    res.writeHead(307,{'Location': link.url})
     res.end();*/
    res.redirect(link.url);
});

module.exports = router;

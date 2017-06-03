/**
 * Created by apisit on 3/6/2560.
 */
var express = require('express');
var router = express.Router();
const validUrl = require('valid-url');
const config = require('../../config');
router.post('/', function (req, res, next) {
    const url = req.body.url;
    const db = req.app.get('db')
    const isValid = validUrl.isUri(url);

    if (!isValid) {
        return res.status(400).send({message: "url is not valid"})
    }
    const token = Math.random().toString(36).slice(-5);
    db.get('links')
        .push({url, token})
        .last()
        .assign({id: Date.now()})
        .write()
        .then(link => {
            const shortUrl = `${config.domain}/${link.token}`;
            res.send({
                shortUrl
            })
        })
        .catch(err => next(err));
});


module.exports = router;
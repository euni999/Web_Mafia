var express = require('express');
var router = express.Router();
let mysql = require('mysql')
let pool = require('../config/database.js')
let md5 = require('md5')
/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('login');
});
router.post('/up', function (req, res) {
    var post = {
        id: req.body.id,
        password: md5(req.body.password),
        nickname: req.body.nickname,
        name: req.body.name
    };

    console.log(post);

    var query = "INSERT INTO ?? SET ?";
    var table = ["user", post];

    query = mysql.format(query, table);

    pool.query(query, function (err, rows) {
        if (err) {
            console.log("error query ")
        } else {
            console.log(rows)
        }


    });
    res.redirect('/')
})
module.exports = router;

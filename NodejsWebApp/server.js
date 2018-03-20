'use strict';

var express = require('express');
var app = express();

var router = express.Router();

var port = process.env.PORT || 1337;



router.get('/home', function (req, res) {
    res.end("welcome to home");
});

router.get('/another', function (req, res) {
    res.end("welcome to another");
});


var router2 = express.Router();

router2.get('/home', function (req, res) {
    res.end("welcome to home 2");
});

router2.get('/another', function (req, res) {
    res.end("welcome to another 2");
});


app.use('/', router);

app.use('/fruits', router2);

app.listen(port, function () {
    console.log("listening " + port);
});

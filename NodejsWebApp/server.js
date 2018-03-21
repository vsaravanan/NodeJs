'use strict';

require('package-script').spawn([
    {
        command: "npm",
        args: ["install", "-g", "express"]
    },
    {
        command: "npm",
        args: ["install", "-g", "mongoose"]
    },
    {
        command: "npm",
        args: ["install", "-g", "morgan"]
    },
    {
        command: "npm",
        args: ["install", "-g", "body-parser"]
    }
])

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

var router = express.Router();
var indexRouter = express.Router();

var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/mydemodb');

//var db = mongoose.Schema({
//    name: String,
//    servingSize: String,
//    calories: Number,
//    gramsCarbo: Number,
//    gramsProtein: Number,
//    gramsFat: Number
//});

//var Food = mongoose.model('Food', foodSchema);

var port = process.env.PORT || 1337;

router.route('/foods')
.post(function (req, res){
    // create and store a new food document based on passed in data
})
.get(function (req, res){
    // return a list of food documents from collection
});

router.route('/food/:id')
.post(function (req, res){
    //
})
.get(function (req, res){
    // 
})
.put(function (req, res){
    // 
})
.delete(function (req, res){
    // 
});

indexRouter.get("/*", function (req, res) {
    res.end("home single page app");
})


app.use(logger('dev'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/api', router);

app.listen(port, function () {
    console.log("listening " + port);
});

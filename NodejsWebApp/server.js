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

var wines = require('./routes/wines');

var app = express();


app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);


app.listen(3000);
console.log('Listening on port 3000...');


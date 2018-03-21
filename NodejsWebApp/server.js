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

app.get('/wines', function (req, res) {
    res.send([{ name: 'wine1' }, { name: 'wine2' }]);
});
app.get('/wines/:id', function (req, res) {
    res.send({ id: req.params.id, name: "The Name", description: "description" });
});



app.listen(3000);
console.log('Listening on port 3000...');


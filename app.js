var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const assert = require('assert');

mongoose.connect('mongodb://localhost:27017/form_data');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected');
});

var app = express();
var Data = require('./model/data');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/post-feedback',function(req, res) {

    var data = new Data();

   data.email = req.body.email;
    data.phone = req.body.phone;
    data.select = req.body.select;
    data.textarea = req.body.textarea;

      console.log(req.body);// set the bears name (comes from the request)

    // save the bear and check for errors
    data.save(function(err) {
        if (err)
            res.send(err);

       // res.json({ message: 'Bear created!' });
    });

});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
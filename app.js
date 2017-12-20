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

app.post('/post-feedback',function(req, res, foo) {

    console.log(foo);
    var data = new Data();

    Data.email = req.body.email;
    Data.phone = req.body.phone;
    Data.select = req.body.select;
    Data.textarea = req.body.textarea;

     // set the bears name (comes from the request)

    // save the bear and check for errors
    Data.save(function(err) {
        if (err)
            res.send(err);

       // res.json({ message: 'Bear created!' });
    });

});

app.post('/endpoint', function(req, res){

   /// console.log(JSON.stringify(req.body.email));


    var data = new Data();

    data.email = JSON.stringify(req.body.email);
    data.phone = JSON.stringify(req.body.phone);
    data.select = JSON.stringify(req.body.select);
    data.textarea = JSON.stringify(req.body.textarea);;
    console.log(data);
    // set the bears name (comes from the request)

    // save the bear and check for errors
    data.save(function(err) {
        if (err)
            res.send(err);

        // res.json({ message: 'Bear created!' });
    });

    res.send(req.body);
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
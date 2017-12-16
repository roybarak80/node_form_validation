var mongoose = require('mongoose');

// Category Schema
var DataSchema = mongoose.Schema({

    email: {
        type: String,

    },
    select: {
        type: String,

    },
    phone:{
        type: String,


    },
    textarea:{
        type: String,
    }


});

var Data = module.exports = mongoose.model('Data', DataSchema);
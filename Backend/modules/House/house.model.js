const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    bedRooms : {
        type : Number,
        required : true
    },
    bathRooms : {
        type : Number,
        required : true
    },
    roomSize : {
        type : Number,
        required : true
    },
    rent : {
        type : Number,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    availablityDate : {
        type : String,
        required : true
    },
    picture : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    wonerEmail : {
        type : String,
        required : true
    }
});

const houseModel = mongoose.model('houses', houseSchema);

module.exports = houseModel;
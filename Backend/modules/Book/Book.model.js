const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    renterEmail : {
        type : String,
        required : true
    },
    wonerEmail : {
        type : String,
        required : true
    },
    HomeId : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }
});

const bookingModel = mongoose.model('Bookings', bookingSchema);

module.exports = bookingModel;
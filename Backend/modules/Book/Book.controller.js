const { default: mongoose } = require('mongoose');
const bookingModel = require('./Book.model');

// add new booking
const addBookingToDB = async (req, res) => {
    try {
        const bookingInfo = req.body;
        const booking = new bookingModel(bookingInfo);
        await booking.save();

        res.send({
            message: 'Successful',
            data: booking,
            status: 200
        });
    }
    catch (err) {
        res.send({
            message: 'Faild',
            data: err
        })
    }
};

// find my booking
const findMyBooking = async (req, res) => {
    try {
        const {email} = req.query;
        const bookingId = await bookingModel.find({renterEmail : email}, {HomeId : 1, _id : 0});

        const allId = bookingId.map(booking => booking.HomeId);

        const bookings = await bookingModel.find({_id : {$in : allId}})

        res.send({
            message : 'successful',
            data : allId
        })
    }
    catch (err) {
        res.send({
            message: 'Faild',
            data: err
        })
    }
}


module.exports = {
    addBookingToDB,
    findMyBooking
}
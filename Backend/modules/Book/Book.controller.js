const bookingModel = require('./Book.model');

// add new booking
const addBookingToDB = async(req, res) =>{
    try{
        const bookingInfo = req.body;
        const booking = new bookingModel(bookingInfo);
        await booking.save();

        res.send({
            message : 'Successful',
            data : booking,
            status : 200
        });
    }
    catch(err) {
        res.send({
            message : 'Faild',
            data : err
        })
    }
}


module.exports = {
    addBookingToDB
}
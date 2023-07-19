const expres = require('express');
const router = expres.Router();
const {
    addBookingToDB,
    findMyBooking
} = require('./Book.controller');

router.post('/', addBookingToDB);
router.get('/my-bookings', findMyBooking);


module.exports = router;
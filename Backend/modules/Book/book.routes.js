const expres = require('express');
const router = expres.Router();
const {
    addBookingToDB
} = require('./Book.controller');

router.post('/', addBookingToDB);


module.exports = router;
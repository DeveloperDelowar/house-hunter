const express = require('express');
const router = express.Router();
const {
    addUserToBD
} = require('./user.controller');


router.post('/create-account', addUserToBD);



module.exports = router;
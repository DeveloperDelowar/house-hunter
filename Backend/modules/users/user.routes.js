const express = require('express');
const router = express.Router();
const {
    addUserToBD,
    loginUser
} = require('./user.controller');


router.post('/create-account', addUserToBD);
router.get('/login', loginUser);



module.exports = router;
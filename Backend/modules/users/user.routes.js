const express = require('express');
const router = express.Router();
const {
    addUserToBD,
    loginUser,
    getUserByToken
} = require('./user.controller');


router.post('/create-account', addUserToBD);
router.post('/login', loginUser);
router.get('/find-user-by-token', getUserByToken);



module.exports = router;
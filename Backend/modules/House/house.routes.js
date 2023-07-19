const express = require('express');
const router = express.Router();
const {
    addNewHouseToDB
} = require('./house.controller');

router.post('/add-new-house', addNewHouseToDB);


module.exports = router;
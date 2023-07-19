const express = require('express');
const router = express.Router();
const {
    addNewHouseToDB,
    getHousesByWonerEmail
} = require('./house.controller');

router.get('/', getHousesByWonerEmail);
router.post('/add-new-house', addNewHouseToDB);


module.exports = router;
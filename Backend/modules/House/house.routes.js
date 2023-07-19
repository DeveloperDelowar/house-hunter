const express = require('express');
const router = express.Router();
const {
    addNewHouseToDB,
    getHousesByWonerEmail,
    deleteHouseToDB
} = require('./house.controller');

router.get('/', getHousesByWonerEmail);
router.delete('/:id', deleteHouseToDB);
router.post('/add-new-house', addNewHouseToDB);


module.exports = router;
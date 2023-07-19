const express = require('express');
const router = express.Router();
const {
    addNewHouseToDB,
    getHousesByWonerEmail,
    deleteHouseToDB,
    findHouseById
} = require('./house.controller');

router.get('/', getHousesByWonerEmail);
router.get('/:id', findHouseById);
router.delete('/:id', deleteHouseToDB);
router.post('/add-new-house', addNewHouseToDB);


module.exports = router;
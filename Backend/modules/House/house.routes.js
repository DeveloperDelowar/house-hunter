const express = require('express');
const router = express.Router();
const {
    addNewHouseToDB,
    getHousesByWonerEmail,
    deleteHouseToDB,
    findHouseById,
    updateUserById
} = require('./house.controller');

router.get('/', getHousesByWonerEmail);
router.get('/:id', findHouseById);
router.delete('/:id', deleteHouseToDB);
router.post('/add-new-house', addNewHouseToDB);
router.patch('/update-info/:id', updateUserById);


module.exports = router;
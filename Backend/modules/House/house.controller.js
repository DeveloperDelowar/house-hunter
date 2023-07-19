const mongoose = require("mongoose");
const houseModel = require("./house.model");
const userModel = require("../users/user.model");

// Add a new house
const addNewHouseToDB = async (req, res) => {
    try {
        const info = req.body;
        const house = new houseModel(info);
        await house.save();

        res.send({
            message: 'Successful',
            data: house
        })
    }
    catch (err) {
        res.send({
            message: 'Faild',
            data: err
        });
    }
}

// get houses
const getHousesByWonerEmail = async (req, res) => {
    try {
        const { email } = req.query;
        const houses = await houseModel.find(
            { wonerEmail: email },
            { picture: 1, rent: 1, name: 1 });

        res.send({
            message: 'Success',
            data: houses
        })
    }
    catch (err) {
        res.send({
            message: 'Faild',
            data: err
        });
    }
}

// Delete house
const deleteHouseToDB = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await houseModel.deleteOne({ _id: id });

        res.send({
            message: 'Successful',
            data: result
        });
    }
    catch (err) {
        res.send({
            message: 'Faild',
            data: err
        });
    }
}

// find house by id
const findHouseById = async (req, res) => {
    try {
        const { id } = req.params;
        const houseInfo = await houseModel.findById(id);
        res.send({
            message: 'Successful',
            data: houseInfo
        })
    }
    catch (err) {
        res.send({
            message: 'Faild',
            data: err
        });
    }
}

// update user by id
const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedInfo = req.body;
        const result = await houseModel.updateOne({_id : id}, {$set : updatedInfo});

        res.send({
            message: 'Successful',
            data: result
        });

    }
    catch (err) {
        res.send({
            message: 'Faild',
            data: err
        });
    }
}

// Get all houses
const getAllHouses = async(req, res) => {
    try{
        const houses = await houseModel.find();
        res.send({
            message : 'successful',
            data : houses
        })
    }
    catch (err) {
        res.send({
            message: 'Faild',
            data: err
        });
    }
}

module.exports = {
    addNewHouseToDB,
    getHousesByWonerEmail,
    deleteHouseToDB,
    findHouseById,
    updateUserById,
    getAllHouses
}
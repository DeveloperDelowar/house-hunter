const houseModel = require("./house.model");

// Image upload
const uploadImg = (file, dir, cb) => {
    file.mv(dir, async (err) => {
        if (err) {
            res.send({ message: 'Unable file upload' });
        }
        else {
            cb();
        }
    });
}

// Add a new house
const addNewHouseToDB = async(req, res) =>{
    try{
        const info = req.body;
        const house = new houseModel(info);
        await house.save();

        res.send({
            message : 'Successful',
            data : house
        })
    }
    catch(err){
        res.send({
            message : 'Faild',
            data : err
        });
    }
}


module.exports = {
    addNewHouseToDB, 
}
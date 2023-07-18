const userModel = require("./user.model");
const jwt = require('jsonwebtoken');

// get access token
const getAccessToken = (email) => {
    const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, {
        expiresIn: '1y'
    });

    return token;
}

// Add new user
const addUserToBD = async (req, res) => {
    try {
        const userInfo  = req.body;
        const {email} = userInfo;
        
        const findUser = await userModel.findOne({ email });
     
        if(findUser){
            res.send({
                message : 'This email has been used.',
                data : null
            });
            return
        }

        const user = new userModel(userInfo);
        user.save();

        res.send({
            message : 'Successful',
            data : getAccessToken(email)
        });
    }
    catch(err){
        res.send({
            message : 'Faild',
            data : err
        });
    }
}


module.exports = {
    addUserToBD,
}
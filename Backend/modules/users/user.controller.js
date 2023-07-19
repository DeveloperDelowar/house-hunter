const userModel = require("./user.model");
const jwt = require('jsonwebtoken');

// get access token
const getAccessToken = (email) => {
    const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, {
        expiresIn: '1y'
    });

    return token;
}

const getEmailFromToken = (token) => {
    const email = jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {

        if (decoded.email) {
            return decoded.email;
        }
    });

    return email;
}

// Add new user
const addUserToBD = async (req, res) => {
    try {
        const userInfo = req.body;
        const { email } = userInfo;

        const findUser = await userModel.findOne({ email });

        if (findUser) {
            res.send({
                message: 'This email has been used.',
                data: null
            });
            return
        }

        const user = new userModel(userInfo);
        user.save();

        res.send({
            message: 'Successful',
            data: user,
            token: getAccessToken(email)
        });
    }
    catch (err) {
        res.send({
            message: 'Faild',
            data: err
        });
    }
}

// login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            res.send({
                message: 'You need to create an account.',
                data: null
            });

            return
        }

        if (user.password === password) {
            res.send({
                message: 'Successful.',
                data: user,
                token: getAccessToken(email)
            });
        }
    }
    catch (err) {
        res.send({
            message: 'Faild',
            data: err
        });
    }

}

// Find user by token
const getUserByToken = async (req, res) => {
    try {
        const token = req?.headers?.auth;
        const email = getEmailFromToken(token);
        const user = await userModel.findOne({ email }, { email: 1, role: 1 });

        res.send(user);
    }
    catch (err) {
        res.send({
            message: 'Faild',
            data: err
        });
    }
}

// find user info by email
const findUserByEmail = async (req, res) => {
    try {
        const { email } = req.query;
        const user = await userModel.findOne({ email });
        res.send({
            message: 'Successful',
            data: user
        })
    }
    catch (err) {
        res.send({
            message: 'Faild',
            data: err
        });
    }
};

module.exports = {
    addUserToBD,
    loginUser,
    getUserByToken,
    findUserByEmail,
}
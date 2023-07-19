const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();

// Require routes
const userRouter = require('./modules/users/user.routes');
const houseRouter = require('./modules/House/house.routes');
const bookingRouter = require('./modules/Book/book.routes');


// middlewar
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }));

// user router
app.use('/api/user', userRouter);
app.use('/api/house', houseRouter);
app.use('/api/booking', bookingRouter);

module.exports = app;
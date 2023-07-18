const app = require('./app');
const mongoose = require('mongoose');


(async function main() {
    try {
        await mongoose.connect(process.env.DB);
        console.log('Database connected.');

        const PORT = process.env.PORT || 5050;
        app.listen(PORT, () => {
            console.log(`Server runnning on ${PORT} PORT.`);
        });
    }
    catch (err) {
        console.log('Database or server disconnected.');
        console.log(err);
    }
})()
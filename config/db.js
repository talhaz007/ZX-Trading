const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoUri');

const connectDB = async () => {
    try{
        
        await mongoose.connect(db, {useNewUrlParser: true});

        console.log('mongoo conected');
    } catch (err) {
        console.error(err.message, 'mongoo');
        // Exit process  with failure
        process.exit(1);
    }
}

module.exports = connectDB;
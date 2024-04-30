const Mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config('./env')

const connectToDb = async () => {
    try {
       let db = await Mongoose.connect(process.env.DB_STRING)
       console.log('db connected')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectToDb;

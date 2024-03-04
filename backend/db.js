// connect to MongoDB using Mongoose library

const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook"

const connectToMongo = async()=>{

    try{

        await mongoose.connect(mongoURI)

        console.log("Connected to Mongo successfully")

    }catch(error){
        console.error(error.message)

        console.log("Could not connect to Mongo")
    }
}

module.exports = connectToMongo
const mongoose = require('mongoose')


const ConnectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database Connected Successfully");
        
    } catch (err) {
        console.log("Connection failed");
        process.exit(1)
        
    }
}

module.exports = ConnectToDB;
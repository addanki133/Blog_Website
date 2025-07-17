const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    summary: String,
    content:String
})

module.exports = mongoose.model('Post',postSchema)
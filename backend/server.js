const express = require("express")
const ConnectToDB = require("./database/db")
const app = express()
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const postRoutes = require("./routes/postRoutes")
require('dotenv').config()



app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/blogs',postRoutes)

//DATABASE
ConnectToDB();

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
    
})
const User = require("../model/User");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const Post = require("../model/Post");

const signupController = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(404).json({msg:"Please Enter the data"})
        }
        
        const isEmail = await User.findOne({ email })
        if (isEmail) {
           return res.status(404).json({msg:"Email is already Registered"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userData = await User.create({ name, email, password: hashedPassword })
        
      return  res.status(200).json({ msg: "User Registered Successfully"})
        
        
        


    } catch (err) {
        res.status(404).json({msg:"Error in signupController"})
    }
    
}
const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(404).json({ msg: "Please Enter the data" })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({msg:"Email not found"})
        }
        const isPassword = await bcrypt.compare(password, user.password)
        if (!isPassword) {
            return res.status(404).json({msg:"User Login failed"})
        } 

        const token = jwt.sign({ userId: user._id, name: user.name }, process.env.JWT_SECRET)
    
        return res.status(200).json({ msg: "User Login success", token: token })
       
        
        

        
    } catch (err) {
        res.status(404).json({ msg: "Error in loginController" })
    }
    
}

const getProfileController = async (req, res) => {
    try {
       
        const userPostData = await Post.find({userId:req.userId})
       
        console.log("Post data",userPostData);
        return res.status(200).json({ msg: "Success", userPostData })
        

    } catch (err) {
        console.log(err);
        
        // return res.status(404).json({ msg: "Error in getProfileController" })

    }
    
}

module.exports = {getProfileController,signupController,loginController}
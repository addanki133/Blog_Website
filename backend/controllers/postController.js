const Post = require("../model/Post");




const getPostController = async(req, res) => {
    try {
        const postData = await Post.find({})
        res.status(200).json({msg:"success",data:postData})
        

    } catch (err) {
        return res.status(404).json({ msg: "Error in getPostController" })

        
    }

}
const getSinglePostController = async (req, res) => {
    const { id } = req.params;
    
    try {
        const user = await Post.findById(id)
        res.status(200).json({msg:"success",data:user})
        

        
    } catch (err) {
        
        
       return res.status(404).json({msg:"Error in getSinglePostController"})
    }
}


const addPostController = async(req, res) => {
    const { title, summary, content } = req.body;
    try {
        
        const postData = await Post.create({ userId: req.userId, title, summary, content })
        res.status(200).json({
            msg: "Success",
            data:postData
        })
         

        
        
    } catch (err) {
       return res.status(404).json({msg:"Error in addPostController"})
    }

}
const updatePostController = (req,res) => {

}
const deletePostController = async(req, res) => {
    const { id } = req.params;
    try {
        const deletePost = await Post.findByIdAndDelete(id)
        res.status(200).json({msg:"Deleted Successfully",data:deletePost})
        
    } catch (err) {
        console.log(err);
        
       return res.status(404).json({msg:"Error in deletePostController"})
        
    }

}



module.exports = {getPostController,getSinglePostController,addPostController,updatePostController,deletePostController}
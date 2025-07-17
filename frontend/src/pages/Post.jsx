import { useState } from "react"
import axios from 'axios'

const PostPage = () => {
    const [postForm, setPostForm] = useState();

    const token = localStorage.getItem('token')
    function handleOnChange(e) {
        setPostForm({...postForm,[e.target.name]:e.target.value})

        
    }
    async function handleOnSubmit(e) {
        e.preventDefault()
         
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blogs/add`, postForm, {
            headers: {
                Authorization:`Bearer ${token}`
            }
        })
        console.log("Post response", res);
        alert(res?.data?.msg)
        
        
        
    }


    return (

        <div className="py-7 px-4 bg-sky-50  md:px-40">
            <button className="text-[13px] font-semibold md:px-25">⬅️ Back to Home</button>

            <div className="py-4 md:px-25">
                <h1 className="font-bold text-2xl">Create New Post</h1>
                <p className="text-[13px] text-gray-400 py-1">Share your thoughts with the world</p>
            </div>

            <div className="md:px-25">

            <div className="py-4 bg-white px-6 shadow-[0_2px_5px_rgba(0,0,0,0.1)] rounded-[7px] ">
                <h1>Write Your Post</h1>
                <form className="py-4" onSubmit={handleOnSubmit}>
                    <div className="flex flex-col ">
                        <label className="py-1 text-[13px] font-semibold">Post Title</label>
                        <input type="text" name= "title" placeholder="Enter an engaging title..." className="border text-[14px] border-gray-400 py-2 px-3 rounded placeholder:text-[13px]" onChange={handleOnChange} />
                    </div>

                    <div className="flex flex-col gap-1 py-3">
                        <label className="py-1.5">Excerpt (Optional)</label>
                        <textarea name="summary" id="" cols="30" rows="3"
                            placeholder="Write a brief summary of your post..."
                            className="border border-gray-400 rounded py-2 px-3 text-[13px] placeholder:text-[13px]" onChange={handleOnChange}></textarea>
                        <p className="text-gray-400 text-[13px] px-0.5">If left empty, the excerpt will be generated from the first 150 characters of your content.</p>

                    </div>

                    <div className="flex flex-col ">
                        <label className="py-2">Content</label>
                        <textarea name="content"
                            placeholder="Start writing your story..."
                            cols="30" rows="15" className="border border-gray-400
                             rounded py-2 px-3 text-[13px]" onChange={handleOnChange}></textarea>


                    </div>

                    <div className="pt-5 flex space-x-3 justify-end">

                        <button className="border border-gray-400 py-1.5 px-2.5 rounded text-[13px]
                        font-semibold cursor-pointer">Cancel</button>
                        <button className="bg-blue-500 py-1.5 px-2.5 rounded text-[13px] font-semibold text-white cursor-pointer">Publish Post</button>
                    </div>


                </form>


            </div>
            </div>




        </div>
    )
}

export default PostPage

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function PostContentDetailsPage() {
    const [singlePost,setSinglePost] = useState()
    const {id} = useParams()
    useEffect(() => {
        handleSinglePost();

        
    }, [id])
    
   async function handleSinglePost() {
       const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogs/${id}`)

       const { data } = res?.data;   
       setSinglePost(data)
       console.log(data);
       
       
    }
    
    return (
        <div className="bg-sky-50 min-h-screen">

        <div className="max-w-screen  py-8 px-10 md: flex justify-center  ">

            <div className="shadow-[0_2px_5px_rgba(0,0,0,0.2)] rounded  bg-white  py-2 px-7 space-y-6 md:w-1/2 ">
                
                <h1 className="font-semibold text-[18px]">{singlePost?.title}</h1>
                <div className="space-y-2">
                    <h2 className="text-[13px] font-semibold text-gray-500">Summary</h2>
                    <div className="text-[14px] font-serif px-2 leading-5.5 [word-spacing:0.2em]">
                       {singlePost?.summary}
                    </div>

                    <div className="space-y-2 py-2">
                        <h2 className="text-[15px]
                        font-semibold text-gray-500">Content</h2>
                        <div className="text-[15px]
                        font-serif px-1.5 leading-6.5 [word-spacing:0.2em]">
                            {singlePost?.content}
                        </div>

                    </div>


                </div>





            </div>


        </div>
        </div>
    )
}

export default PostContentDetailsPage;
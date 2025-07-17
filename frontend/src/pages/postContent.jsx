import {  useNavigate } from "react-router-dom";


function PostContentPage({ postForm }) {
    const navigate  = useNavigate()
    function handleDetailsPage(id) {
        console.log("Handle id", id);
        navigate(`/${id}`)
        
    }


    return (
        <div className="flex flex-col gap-5 md:flex-row flex-wrap ">


            {
                postForm.map((data, index) => (
                    <div key={index} className=" cursor-pointer w-full shadow-[0_2px_5px_rgba(0,0,0,0.1)] border-gray-400 rounded py-5 px-4 md:w-[300px] min-h-[150px] ">

                        <h1 onClick={() => handleDetailsPage(data?._id)} className="font-bold hover:text-sky-300"> {data?.title}</h1>
                        <p className="text-gray-500 text-[13px] ">
                            {data?.summary}</p>

                    </div>

                ))
            }

          

           




        </div>

    )
}

export default PostContentPage;
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Profile = () => {
  const navigate = useNavigate()
  const [postData, setPostData] = useState([])
  const token = localStorage.getItem('token')
  useEffect(() => {
    userDataFun()


  }, [token])
  userDataFun()
  async function userDataFun() {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/profile`, {
      headers: {
        Authorization: `Beared ${token}`
      }
    })
    setPostData(res?.data?.userPostData);


  }
  async function handleDelete(id) {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/blogs/delete/${id}`, {
      headers: {
        Authorization: `Beared ${token}`
      }
    })
    alert(res?.data?.msg)
  }

  return (

    <div>
      <div className=" bg-sky-50 max-w-screen px-4 min-h-screen py-20 md:px-70  ">
        <div className="rounded  py-5 bg-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] md:max-w-[900px] flex flex-col items-center">
          <div className="flex justify-between  ">
            <div className="py-4 ">
              <h1 className="font-semibold text-[16px]">Your Posts</h1>
              <div className="">

                <p className="text-[10px] text-gray-500">Manage and track your published articles</p>
              </div>

            </div>
            <div className="py-1 md:px-3">
              <button className="bg-black text-white px-2 py-1.5 rounded 
              text-[10px] font-semibold cursor-pointer md:text-[14px]" onClick={() => navigate('/create-post')}>
                New Post</button>
            </div>

          </div>

          <div className="">


            {
              postData && postData.length > 0 ?
                postData.map((data, index) => (
                  <div key={index} className="flex justify-between  m-2 border border-gray-300 rounded shadow-[0_2px_5px_rgba(0,0,0,0.1)] py-2 px-3 hover:shadow-[0_2px_5px_rgba(0,0,0,0.3)] cursor-pointer  md:flex flex-row max-w-[900px] ">
                    <div className="max-w-[350px] md:max-w-[500px]  ">
                      <h2 className="font-semibold text-[15px]">{data?.title}</h2>
                      <p className="text-[14px] [word-spacing:0.2em]">{data?.content}</p>

                    </div>
                    <div>
                      <button onClick={() => handleDelete(data?._id)} className="cursor-pointer border text-[12px] font-semibold py-1 rounded px-2.5">Delete</button>
                    </div>


                  </div>
                ))

                : <h1 className="px-3 ">Start Post The Blogs</h1>

            }
          </div>


        </div>




      </div>
    </div>
  )
}

export default Profile


import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import  { jwtDecode } from 'jwt-decode'
import PostContentPage from '../../pages/postContent'
import axios from 'axios'

const Header = () => {
  const [postForm,setPostForm] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
  const token = localStorage.getItem('token')

  const [name,setName] = useState('')
  function handleLogin() {
    navigate('/login')
  }
  function handleLogout() {
    localStorage.removeItem('token')
    setName(' ')

  }

  function handlePostPage() {
    navigate('/create-post')
  }
  function handleProfilePage() {
    navigate('/profile')
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      
      const decode = jwtDecode(token)
      setName(decode?.name)    
    } else {
      setName('')
    }
  

  }, [handleLogout])
  
  useEffect(() => {
    async function getPostData() {
      
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
      setPostForm(res?.data?.data);
      
    }
    getPostData();
  },[])

  return (
    <div>

    <div className="bg-sky-50 h-15 max-w-screen">
      <div className="px-4 md:px-30 h-15 bg-white flex justify-between items-center shadow-[0_2px_8px_rgba(0,0,0,0.1)] w-full fixed top-0 left-0 z-50 ">
        <h1 onClick={() => navigate('/')} className='cursor-pointer text-indigo-500 font-bold text-[18px] md:text-2xl'>BlogSpace</h1>

        <div >
          {
           name && name.length>0 ?
              
              <div className='flex gap-2 items-center '> 
                <button onClick={handlePostPage} className='border  cursor-pointer border-gray-200 py-2 rounded px-3 text-[12px] font-semibold'>+  Write</button>
                <p onClick={handleProfilePage} className='cursor-pointer text-[14px] border border-gray-300 py-2 rounded px-2'>{name}</p>
              <button className="cursor-pointer border py-2 px-4 bg-red-400 text-white text-[12px] font-semibold rounded-[7px]" onClick={handleLogout}>
                Logout</button>
              </div>
            :
          
              <button className="cursor-pointer border py-2 px-4 bg-black text-white text-[12px] font-semibold rounded-[7px]" onClick={handleLogin}>
                Sign In</button>
}
        </div>




      </div>





      </div>
      
      {
        location.pathname === '/' && (
          <div>
            <div className='max-w-screen'>

            <main className=" bg-[#5355e3] h-[280px] text-white flex flex-col justify-center items-center  gap-6 border   md:w-screen">
              <div className="">

                <h1 className="text-[30px] font-bold md:font-bold text-2xl md:text-4xl ">Share Your Stories</h1>
              </div>
              <div className="">

                <p className="text-[18px] px-7 md:text-[20px] ">A modern blogging platform for writers and readers</p>
              </div>
              
              <div onClick={() => navigate(token? "/create-post":"login")} className="cursor-pointer bg-white text-[#256eeb] text-[15px] py-2 px-10  rounded">

                <button className='cursor-pointer'>{token?"Write a Post" : "Get Started"}</button>
              </div>



            </main>
            </div>

        <div className='py-3 px-10 '>
            <PostContentPage postForm={postForm} />
            </div>
            
          
          </div>
          
          
        )
        
      }
        


    </div>
  )
}

export default Header

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate()
     const [form, setForm] = useState()
        
        function handleOnchange(e) {
            setForm({...form,[e.target.name]:e.target.value})
        }
   async function handleOnSubmit(e) {
       e.preventDefault()
       const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, form)
       console.log("Login response", res);
       alert(res?.data?.msg)
       
       localStorage.setItem("token",res?.data?.token)
       navigate('/')
       
       
    }
    return (
        <div className="flex flex-col items-center h-screen  py-[70px] bg-[#f5f9ff] ">
           
            <h1 className="py-2 text-indigo-600 font-bold text-2xl">BlogSpace</h1>
            <p className="text-gray-800 text-[12px]">Share your stories with the world</p>
            <div className="bg-white w-[330px] h-[400px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] my-5 py-5 px-10 rounded md:min-w-[500px]">
                <div className="flex  flex-col items-center ">

                    <h3 className="font-bold text-[20px]">Welcome Back</h3>
                    <p className="text-[14px] text-gray-500">Sign in to start writing</p>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <div className="py-2">

                        <label className="font-semibold text-[15px]" htmlFor="email">Email</label><br />
                        <div className="flex flex-1 py-2">

                            <input type="email" onChange={handleOnchange} placeholder="Enter Your Email" name="email" id="email" className="border flex flex-1 placeholder:px-2 py-1 rounded text-sm" />
                        </div>
                    </div>
                    <div>

                        <label className="font-semibold text-[15px]" htmlFor="password">Password </label><br />
                        <div className="flex flex-1 py-2">

                            <input type="password" onChange={handleOnchange} placeholder="Enter Your Password" name="password" id="password" className="border rounded flex flex-1 placeholder:text-sm px-2 py-1.5 " />
                        </div>
                    </div>

                    <div className="cursor-pointer flex justify-center bg-blue-500 text-white rounded py-2 font-bold ">

                        <button type="submit" className="text-sm">Sign In</button>
                    </div>


                </form>

                <p className="text-center py-4 text-blue-400 text-[13px]">Don't have an account? <span onClick={() => navigate('/signup')} className="cursor-pointer hover:underline"> Sign up</span></p>


            </div>

        </div>
    )
}

export default LoginPage;
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState()
    
    function handleOnchange(e) {
        setForm({...form,[e.target.name]:e.target.value})
    }

async function handleOnSubmit(e) {
    e.preventDefault()
    
    const res = await axios.post('http://localhost:3000/api/auth/signup', form)
    alert(res.data.msg)
    navigate('/login')

   
    }

    return (
        <div className="flex flex-col items-center h-screen  py-[50px] bg-[#f5f9ff]">
           
            <h1 className="py-2 text-indigo-600 font-bold text-2xl">BlogSpace</h1>
            <p className="text-gray-800 text-[12px]">Share your stories with the world</p>
            <div className="bg-white w-[350px]  md:min-w-[450px] min-h-[420px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] my-5 py-5 px-6 rounded">
                <div className="flex flex-col items-center">

                    <h3 className="font-bold text-[20px]">Create Account</h3>
                    <p className="text-[14px] text-gray-500">Join our community of writers</p>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <div className="py-2">

                        <label className="font-semibold text-[15px]" htmlFor="name">Full Name</label><br />
                        <div className="flex flex-1 py-2">

                            <input type="text" placeholder="Enter Your Full Name" name="name" id="name" onChange={handleOnchange} className="px-2 py-2.5 border flex flex-1 rounded text-sm" />
                        </div>
                    </div>
                    <div className="py-2">

                        <label className="font-semibold text-[15px]" htmlFor="email">Email</label><br />
                        <div className="flex flex-1 py-2">

                            <input type="email" placeholder="Enter Your Email" name="email" id="email" onChange={handleOnchange} className="border flex flex-1 py-2 px-2 rounded text-sm" />
                        </div>
                    </div>
                    <div>

                        <label className="font-semibold text-[15px]" htmlFor="password">Password </label><br />
                        <div className="flex flex-1 py-2">

                            <input type="password" placeholder="Enter Your Password" name="password" id="password" onChange={handleOnchange} className="border rounded flex flex-1 px-2 py-2 text-sm " />
                        </div>
                    </div>

                    <div className="cursor-pointer flex justify-center bg-blue-500 text-white rounded py-2 font-bold ">

                        <button type="submit" className="text-sm cursor-pointer">Create Account</button>
                    </div>


                </form>

                <p className="text-center py-4 text-blue-400 text-[13px]">Already have an account? <span onClick={() => navigate('/login')} className="cursor-pointer hover:underline"> Sign in</span></p>


            </div>

        </div>
    )
}

export default SignupPage;
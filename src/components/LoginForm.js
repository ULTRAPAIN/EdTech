import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

function LoginForm({setisloggedin}) {
    const navigate=useNavigate();
    const [formData,setformData]=useState({email:"",password:""})
    const [showPassword,setshowPassword]=useState(false)
    function changeHandler(event){
        setformData((prevData) =>(
         {
            ...prevData,
            [event.target.name]:event.target.value 
        })
    )}
    function submitHandler(event){
        event.preventDefault()
        setisloggedin(true)
        toast.success("Logged In")
        navigate("/dashboard")

    }
    return (
        <form onSubmit={submitHandler}
        className='flex flex-col w-full mt-6 font-semibold gap-y-4'>
            <label
            className='w-full'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address <sup className='text-red-500'>*</sup></p>
                <input required type="email" value={formData.email}
                onChange={changeHandler} placeholder='Enter your Email Id '
                name="email"
                className='bg-[#000814] rounded-[0.5rem] w-full text-white p-[12px] border-b-[0.05rem] border-gray-400' />
            </label>
            <label
            className='relative w-full '>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Password <sup className='text-red-500'>*</sup></p>
                <input required type={showPassword?("text"):("password")} value={formData.password}
                onChange={changeHandler} placeholder='Enter your Password '
                name="password" 
                className='bg-[#000814] rounded-[0.5rem] w-full text-white p-[12px] border-b-[0.05rem] border-gray-400'/>
                <span className="absolute right-3 top-[38px] cursor-pointer " onClick={()=>setshowPassword((prev)=>!prev)}>
                    {showPassword?(<AiOutlineEye 
                    fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                </span>
                <Link to ="#">
                    <p className='mt-1 ml-auto text-xs text-blue-300 max-w-max'>Forgot Password</p>
                </Link>
                <button className= ' text-md mt-6 bg-yellow-500 w-full rounded-[8px] font-semibold  text-black px-[12px] py-[8px]'>Sign In</button>
            </label>
        </form>
    )
}

export default LoginForm

import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SignupForm({setisloggedin}) {
    const navigate=useNavigate()
    const [formData,setformData]=useState({Fname:"",Lname:"",email:"",createPassword:"",confirmPassword:""})
    const [showPassword1,setshowPassword1]=useState(false)
    const [showPassword2,setshowPassword2] = useState(false);
    const [accountType,setaccountType] = useState("student")
    function changeHandler(event){
        setformData((prevData) =>(
         {
            ...prevData,
            [event.target.name]:event.target.value 
        })
    )}
    function submitHandler(event){
        event.preventDefault()
        if(formData.createPassword!=formData.confirmPassword) {
            toast.error("Passwords do not match")
            return
        }
        setisloggedin(true)
        toast.success("Account Created")
        const accountData=[...formData]
        console.log("Printing Account Data")
        console.log(accountData)
        navigate("/dashboard")
    }

    return (
        
        <div >
            {/* student-Instructor-tab */}
            <div className='flex bg-[#000814] p-1 gap-x-1 my-6 rounded-full max-w-max text-gray-500 border-[0.01rem] border-gray-300'>
                <button onClick={()=>setaccountType("student")} className={
                    `${accountType==="student"?"bg-white text-black font-semibold ":"bg-transparent text-gray-500"}
                    py-2 px-5 rounded-full transition-all duration-200 `
                }>Student</button>
                <button onClick={()=>setaccountType("Instructor")} 
                className={
                    `${accountType==="Instructor"?"bg-white text-black font-semibold ":"bg-transparent text-gray-500"}
                    py-2 px-5 rounded-full transition-all duration-200 `}>Instructor</button>
            </div>
            <form onSubmit={submitHandler}
             className='flex flex-col w-full mt-6 font-semibold gap-y-4'>
                <div className='flex gap-x-[2rem] '>
                <label
                className='w-full'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>First Name<sup className='text-red-500'> *</sup></p>
                    <input required type="text" value={formData.Fname}
                onChange={changeHandler} placeholder='Enter your First Name '
                name="Fname" 
                className='bg-[#000814] rounded-[0.5rem] w-full text-white p-[12px] border-b-[0.05rem] border-gray-400'/>
                </label>
                <label 
                 className='w-full'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Last Name<sup className='text-red-500'> *</sup></p>
                    <input required type="text" value={formData.Lname}
                onChange={changeHandler} placeholder='Enter your Last Name '
                name="Lname"
                className='bg-[#000814] rounded-[0.5rem] w-full text-white p-[12px] border-b-[0.05rem] border-gray-400' />
                </label>
                </div>
                <label  className='w-full'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address<sup className='text-red-500'> *</sup ></p>
                    <input required type="text" value={formData.email}
                onChange={changeHandler} placeholder='Enter Email address '
                name="email" 
                className='bg-[#000814] rounded-[0.5rem] w-full text-white p-[12px] border-b-[0.05rem] border-gray-400'/>
                </label>
                <div className='flex gap-x-[2rem]' >
            <label
                className='relative w-full '
                >
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Create Password<sup className='text-red-500'> *</sup></p>
                    <input required type={showPassword1?("text"):("password")} value={formData.createPassword}
                onChange={changeHandler} placeholder='Enter Password '
                name="createPassword"
                className='bg-[#000814] rounded-[0.5rem] w-full text-white p-[12px] border-b-[0.05rem] border-gray-400' />
                <span className="absolute right-3 top-[38px] cursor-pointer"  onClick={()=>setshowPassword1((prev)=>!prev)}>
                    {showPassword1?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
                </label>

                <label
                className='relative w-full'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Confirm Password<sup
                    className='text-red-500'> *</sup></p>
                    <input required type={showPassword2?("text"):("password")} value={formData.confirmPassword}
                onChange={changeHandler} placeholder='Confirm  Password '
                name="confirmPassword" 
                className='bg-[#000814] rounded-[0.5rem] w-full text-white p-[12px] border-b-[0.05rem] border-gray-400'/>
                 <span  className="absolute right-3 top-[38px] cursor-pointer" onClick={()=>setshowPassword2((prev)=>!prev)}>
                    {showPassword2?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
                </label>
            </div>
                
                <button className= ' text-md mt-6 bg-yellow-500 w-full rounded-[8px] font-semibold  text-black px-[12px] py-[8px]'>Create Account</button>
            
            </form>
        </div>

       
    )
}

export default SignupForm

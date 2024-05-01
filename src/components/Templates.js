import React from 'react'
import frame from '../assets/frame.png'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import {FcGoogle} from "react-icons/fc"
function Templates(
    {title,desc1,desc2,image,formtype,setisloggedin}
){
    return (
     <div className='max-w-[1160px] flex justify-between w-11/12 py-12 mx-auto gap-x-12 gap-y-0'>
        <div className='w-11/12 max-w-[450px] mx-0'>
        <h1 className='font-bold text-white text-[1.875rem] leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4 '>
            <span className='text-gray-300 '>{desc1}</span><br/>
            <span className='italic text-blue-300'>{desc2}</span>
        </p> 
           {formtype === 'signup'?(<SignupForm setisloggedin={setisloggedin}/>):(<LoginForm setisloggedin={setisloggedin}/>)}
        <div className='flex items-center w-full my-4 gap-x-2'>
        <div className='w-full h-[1px] bg-gray-800'></div>
        <p className='text-gray-800 font-medium leading-[1.375rem]'>OR</p>
        <div className=' w-full h-[1px] bg-gray-800'></div>
        </div>
        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-gray-300 border border-gray-800 px-[12px] py-[8px] gap-x-2'>
            <FcGoogle/>
            <p>Sign in with the Google</p>
        </button> 
        

        </div>
        <div className='relative w-11/12 maz-w-[450px]'>
        <img src={frame} alt="pattern" width={558} height={504} loading='lazy'/>
        <img src={image} alt="pattern" width={558} height={490} loading='lazy ' 
        className='absolute -top-4 right-10 '/>
        </div>
    </div>
    )
}

export default Templates

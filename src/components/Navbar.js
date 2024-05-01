import React from 'react'
import {Link} from "react-router-dom"
import logo from "../assets/logo.svg"
import toast from 'react-hot-toast';
function Navbar(props) {
    let isloggedin = props.isloggedin 
    let setisloggedin = props.setisloggedin

    return (
        <div className="flex  w-11/12 mx-auto max-w-[1160px] items-center mt-2 text-white justify-between text-md">
            <Link to='/'>
                <img src={logo} alt="logo" width={160} height={160} loading='lazy'/>
 
            </Link>
            <nav>
                <ul className='flex gap-3 font-semibold'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>contact</Link>
                    </li>
                </ul>
            </nav>

            {/* login signin logout dashboard  */}
            <div className="flex gap-3 ml-5 mr-3 font-semibold">
                {!isloggedin && 
                    <Link to='/login'> 
                    <button className='px-3 py-1 duration-300 border-2 border-white rounded-md hover:bg-white hover:text-black hover:border-black'
                    onClick={()=>{
                     setisloggedin(true);
                     toast.success("Logged In")
                    }}>Login</button>
                    </Link>
                }
                 {!isloggedin && 
                    <Link to='/signup'> 
                    <button className='px-3 py-1 duration-300 border-2 border-white rounded-md hover:bg-white hover:text-black hover:border-black' >Signup</button>
                    </Link>
                }
                 {isloggedin &&
                    <Link to='/'> 
                    <button className='px-3 py-1 duration-300 border-2 border-white rounded-md hover:bg-white hover:text-black hover:border-black'
                    onClick={()=>{
                         setisloggedin(false);
                         toast.success("Logged Out")
                    }}>Log Out</button>
                    </Link>
                }
                 {isloggedin &&
                    <Link to='/dashboard'> 
                    <button className='px-3 py-1 duration-300 border-2 border-white rounded-md hover:bg-white hover:text-black hover:border-black'>Dashboard</button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar

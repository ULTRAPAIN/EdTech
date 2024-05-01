import React from 'react'
import Templates from '../components/Templates'
import login from '../assets/login.png'

function Login({setisloggedin}) {
    return (
        <div>
            <Templates 
            title="Welcome Back"
            desc1="Build skills for today ,tomorrow and beyond"
            desc2="Education to future-proof your career"
            image={login}
            formtype="login"
            setisloggedin={setisloggedin}
            />
        </div>
    )
}

export default Login

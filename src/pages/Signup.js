import React from 'react'
import Templates from '../components/Templates'
import signup from '../assets/signup.png'

function Signup(setisloggedin) {
    return (
        <div>
        <Templates 
        title="Join the Millions learning to code with studyNotion for free"
        desc1="Build skills for today ,tomorrow and beyond"
        desc2="Education to future-proof your career"
        image={signup}
        formtype="signup"
        setisloggedin={setisloggedin}
        />
    </div>
    )
}

export default Signup

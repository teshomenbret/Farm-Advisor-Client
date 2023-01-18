import React from 'react'
import Landing from '../../../components/Landing/landing.component'
import Button from '../../../components/Button/button.componet'
import signup_image from '../../../asset/signup.svg'

export default function  SignupLanding(){
    const  siginUp = ()=> {
        console.log("signup")
    }

    return(
        <div>
            <div>
                <Landing image={signup_image} title = "Smart Farming" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id pellentesque nulla. Donec porta pretium risus vitae ultrices. "/>
            </div>
            <div>
                <p>. . .</p>
            </div>
            <div>
                <Button onClick={siginUp} text = "sign up with agino"/>
            </div>
            <div>
                <p>Already have an account? <a href='/'>Log In</a> </p>
            </div>
        </div>
    )
    
}

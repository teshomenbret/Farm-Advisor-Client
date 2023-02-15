import React,{useState} from 'react'
import Landing from '../../../components/Landing/landing.component'
import Button from '../../../components/Button/button.componet'
import signup_image from '../../../asset/signup.svg'
import { Navigate } from 'react-router';


export default function  SignupLanding(){
    const [navigate,setNavigate]=useState(false);
    const  toogleNavigate= ()=> {
        setNavigate(!navigate)
    }

    return(
        <div>
            <div>
                <Landing image={signup_image} btn_action={toogleNavigate} btn_text="SignUp with agino" title = "Smart Farming" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id pellentesque nulla. Donec porta pretium risus vitae ultrices. "/>
            </div>
            {navigate&& (<Navigate to={`/signupForm`} />)}
        </div>
    )
    
}

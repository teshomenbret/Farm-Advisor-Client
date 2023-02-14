import React, {useState} from 'react'
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import { Navigate } from 'react-router';
import {create } from '../../../api/user.api'

import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
// import {create} from '../../../api/farm.api'

import {
    RecaptchaVerifier,
    signInWithPhoneNumber,
  } from "firebase/auth";

  import { auth } from "./firebase";


export default function SignupForm(){
    const [phoneErrors,setPhoneErrors]=useState("");
    const [otpErrors,setOtpErrors]=useState("");
    const [phone,setPhone]=useState("");
    const [result, setResult] = useState("");
    const [otp, setOtp] = useState("");
    const [flag, setFlag] = useState(false);
    const [showEroor, setShowEroor] = useState(false)

    const [navigate,setNavigate]=useState(false);

    const  toggleNavigate = ()=> {
      setNavigate(!navigate)
  }

    const handleOtpChange = event => { 
        setShowEroor(true)
        const {value} = event.target
        setOtp(value)
        varifyOtp(value)
    }
    const varifyPhone = (phone) =>{
        if (phone.length <10 || phone === undefined){
          setPhoneErrors("phone number must not be less be 10 digit")
        }
        else{
          setPhoneErrors("")
        }
    }

    const varifyOtp = (otp) =>{
      if (otp.length <6 || phone === undefined){
        setOtpErrors("otp number must be 6 digit")
      }
      else{
        setOtpErrors("")
      }
  }

    const handlePhoneChange = event => { 
        setShowEroor(true)
        const {value} = event.target
        setPhone(value)
        varifyPhone(value)
    }
    function setUpRecaptha(number) {
        const recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {},
          auth
        );
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier);
      }

    const getOtp = async (e) => {
        e.preventDefault();
        console.log(phone);
        if (phone === "" || phone === undefined)
          return
        try {
          const response = await setUpRecaptha(phone);
          console.log(response)
          setResult(response);
          setFlag(true);
        } catch (err) {
            console.log(err.message)
        }
      };

      const verifyOtp = async (e) => {
        e.preventDefault();
        if (otp === "" || otp === null) return;
        try {
          const d = await result.confirm(otp);
          console.log(d)
          let formData = new FormData();
          formData.append('phone', phone);
          create(formData).then((data) =>{
            console.log( "data", data)
          })
        
          toggleNavigate()

        } catch (err) {
            console.log(err.message);

        }
      };
        
    return (
        <>
        {
            flag?( 
            <div className='bg-gray-50 bg-g lg:mx-60 px-6 mt-0 pt-12'>
                <form>
                    <InputField label = "otp"  onChange={handleOtpChange} name='otp' value={otp} required/>    
                    {otpErrors && showEroor &&(
                                   <div role="alert" className="card error">
                                        <p>{otpErrors}</p>
                                      </div>
                                    )}   
                    <Button onClick={verifyOtp} text = "verify"/>
                </form>
            </div>  ):(
                <div className='bg-gray-50 bg-g lg:mx-60 px-6 mt-0 pt-12'>
                    <form>
                        <InputField label = "phone"  onChange={handlePhoneChange} name='phone' value={phone} required/> 
                        {phoneErrors && showEroor &&(
                                   <div role="alert" className="card error">
                                        <p>{phoneErrors}</p>
                                      </div>
                                    )}   
                        <div id="recaptcha-container"></div>
                        <Button onClick={getOtp} text = "continue"/>
                    </form>
                </div>)
        }
        {navigate&& (<Navigate to="/" />)}
        </>
    )
}

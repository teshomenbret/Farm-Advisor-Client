import React, {useState} from 'react'
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {create} from '../../../api/farm.api'


export default function SignupForm(){
    const [country,setCountry]=useState("Ethiopia");
    const [phone,setPhone]=useState("");
   
    const handleCountryChange = event => { 
        const {value} = event.target
        setCountry(value)
    }
    const handlePhoneChange = event => { 
        const {value} = event.target
        setPhone(value)
    }
    const handleSubmit= event => { 
        event.preventDefault()
        const user = {
            country:country|| undefined,
            phone: phone || undefined
        }
        create(user).then((data) => {
            console.log(data)
        })
    }
        
    return (
        <div>
            <form>
                <InputField label = "country" onChange={handleCountryChange} name='country'     value={country}     required/>
                <InputField label = "phone"  onChange={handlePhoneChange} name='phone' value={phone} required/>    
                <Button onClick={handleSubmit} text = "create new farm"/>
            </form>
        </div>
    )
}

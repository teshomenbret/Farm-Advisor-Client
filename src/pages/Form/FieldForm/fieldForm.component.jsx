import React, {useState} from 'react'
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {create} from '../../../api/farm.api'
import { Navigate } from 'react-router';

export default function FieldForm(){

    const [navigate,setNavigate]=useState(false);
    const  toogleNavigate= ()=> {
        setNavigate(!navigate)
    }
    const [name,setName]=useState("");
    const [altitude,setAltitude]=useState("");
   
    const handleNameChange = event => { 
        const {value} = event.target
        setName(value)
    }
    const handleAltitudeChange = event => { 
        const {value} = event.target
        setAltitude(value)
    }
    const handleSubmit= event => { 
        event.preventDefault()
        const field = {
            name: name || undefined,
            altitude: altitude || undefined
        }
        create(field).then((data) => {
            console.log(data)
        })
        toogleNavigate()
    }
        
    return (
        <>
            <div className='mt-0 px-3'>
                <p className="font-['Roboto'] font-medium text-2xl not-italic leading-7">New Field</p>
            </div>
            <div className='mt-4 '>
                <form>
                    <div className='mb-4 px-3'>
                        <InputField label = "Farm Name" onChange={handleNameChange} name='name' value={name}     required/>                          
                    </div>
                    <div className='mb-4 px-3'>
                            <InputField label = "Location"  onChange={handleAltitudeChange} name='altitude' value={altitude} required/>    
                    </div>
                    <div className='pb-3 mx-0 mb-0 px-3 border'>
                        <Button onClick={handleSubmit} text = "Create New Field"/>
                    </div>
                </form>
            </div>
          {navigate&& (<Navigate to="/sensorLanding" />)}
    </>
  );
}
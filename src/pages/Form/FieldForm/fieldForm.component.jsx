import React, {useState} from 'react'
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {create} from '../../../api/farm.api'


export default function FieldForm(){
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
    }
        
    return (
        <div>
            <form>
                <InputField label = "Farm Name" onChange={handleNameChange} name='name'     value={name}     required/>
                <InputField label = "Location"  onChange={handleAltitudeChange} name='altitude' value={altitude} required/>    
                <Button onClick={handleSubmit} text = "create new field"/>
            </form>
        </div>
    )
}
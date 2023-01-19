import React, {useState} from 'react'
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {create} from '../../../api/farm.api'


export default function FarmForm(){
    const [name,setName]=useState("");
    const [location,setLocation]=useState("");
   
    const handleNameChange = event => { 
        const {value} = event.target
        setName(value)
    }
    const handleLocationChange = event => { 
        const {value} = event.target
        setLocation(value)
    }
    const handleSubmit= event => { 
        event.preventDefault()
        const farm = {
            name: name || undefined,
            location: location || undefined
        }
        create(farm).then((data) => {
            console.log(data)
        })
    }
        
    return (
        <div>
            <form>
                <InputField label = "Farm Name" onChange={handleNameChange} name='name'     value={name}     required/>
                <InputField label = "Location"  onChange={handleLocationChange} name='location' value={location} required/>    
                <Button onClick={handleSubmit} text = "create new farm"/>
            </form>
        </div>
    )
}

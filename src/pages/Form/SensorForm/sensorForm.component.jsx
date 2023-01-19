import React, {useState} from 'react'
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {create} from '../../../api/farm.api'


export default function SensorForm(){
    const [serial_number,setSerialNumber]=useState("");
    const [location,setLocation]=useState("");
    const [GDD,setGDD]=useState("");
    const [installation_date,setInstallationDate]=useState("");
    const [last_cutting_date_at_Field,setLastCuttingDateAtField]=useState("");
   
    const handleSerialNumberChange = event => { 
        const {value} = event.target
        setSerialNumber(value)
    }
    const handleLocationChange = event => { 
        const {value} = event.target
        setLocation(value)
    }
    const handleGDDChange = event => { 
        const {value} = event.target
        setGDD(value)
    }
    const handleInstallationDateChange = event => { 
        const {value} = event.target
        setInstallationDate(value)
    }
    const handleLastCuttingDateAtFieldChange = event => { 
        const {value} = event.target
        setLastCuttingDateAtField(value)
    }
    const handleSubmit= event => { 
        event.preventDefault()
        const sensor= {
            serial_number: serial_number || undefined,
            location:location || undefined,
            GDD:GDD || undefined,
            installation_date:installation_date || undefined,
            last_cutting_date_at_Field:last_cutting_date_at_Field || undefined,

        }
        create(sensor).then((data) => {
            console.log(data)
        })
    }
        
    return (
        <div>
            <form>
                <InputField label = "Serial Number" onChange={handleSerialNumberChange} name='serial_number'  value={serial_number} required/>
                <InputField label = "Sensor Location"  onChange={handleLocationChange} name='location' value={location} required/>   
                <InputField label = "Default GGD"  onChange={handleGDDChange} name='GDD' value={GDD} required/>    
                <InputField label = "Sensor Installation Date"  onChange={handleInstallationDateChange} name='installation_date' value={installation_date} required/> 
                <InputField label = "Last Cutting Date At This Field"  onChange={handleLastCuttingDateAtFieldChange} name='last_cutting_date_at_Field' value={last_cutting_date_at_Field} required/> 
                <Button onClick={handleSubmit} text = "Add new Sensor"/>
            </form>
        </div>
    )
}

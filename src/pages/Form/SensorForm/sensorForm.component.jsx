import React, {useState} from 'react'
import { Navigate } from 'react-router';
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {create} from '../../../api/sensor.api'
import sensorLocation from  '../../../asset/sensorLocation.svg'
import gddField from  '../../../asset/gddField.svg'
import qr_code_scanner from  '../../../asset/qr_code_scanner.svg'
import MapInputField from '../../../components/InputField/MapField/MapField.component';

export default function SensorForm(fieldId){
    const [navigate,setNavigate]=useState(false);

    const  toogleNavigate= ()=> {
        setNavigate(!navigate)
    }
    const [serial_number,setSerialNumber]=useState("");
    const [location,setLocation]=useState("");
    const [GDD,setGDD]=useState("");
    const [installation_date,setInstallationDate]=useState("");
    const [last_cutting_date_at_Field,setLastCuttingDateAtField]=useState("");
    const [lng, setLng] = useState(38.763611);
    const [lat, setLat] = useState(9.005401);
   
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

        let formData = new FormData();
          formData.append('serialNo', serial_number);
          formData.append('long', lng);
          formData.append('lat', lat);
          formData.append('fieldId', fieldId);
          formData.append('lastCuttingDate', last_cutting_date_at_Field)
        
        create(formData).then((data) => {
            console.log("sensor",data)
            toogleNavigate()
        })
        
    }
        
    return (
        <>
                <div className='mt-0 px-3'>
                      <p className="font-['Roboto'] font-medium text-2xl not-italic leading-7">New Sensor</p>
                </div>
                <div className='mt-4 '>
                    <form>
                        <div className='mb-4 px-3'>
                                <InputField 
                                label = "Serial Number" 
                                onChange={handleSerialNumberChange} 
                                name='serial_number' 
                                icon={qr_code_scanner} 
                                value={serial_number} 
                                // className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                required
                            />                        
                        </div>
                        
                        <div className='mb-4 px-3 '>
                            <MapInputField lng = {lng} lat = {lat} setLat={setLat} setLng = {setLng}/>                     
                        </div>
                    

                    
                        <div className='mb-4 px-3 max-h-16'>
                        <InputField
                            label = "Default GGD"  
                            onChange={handleGDDChange} 
                            name='GDD' 
                            value={GDD}
                            icon ={gddField}
                            // className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                            required
                        />
                        </div>


                        <div className='mb-4 px-3'>
                            <InputField 
                                label = "Sensor Installation Date"  
                                onChange={handleInstallationDateChange} 
                                name='installation_date' 
                                type ='date'
                                value={installation_date}
                                // className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                                required
                            />
                        </div>

                        <div className='mb-4 px-3'>
                            <InputField 
                                label = "Last Cutting Date At This Field"  
                                onChange={handleLastCuttingDateAtFieldChange} 
                                name='last_cutting_date_at_Field' 
                                type ='date'
                                value={last_cutting_date_at_Field} 
                                // className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className='pb-3 mx-0 mb-0 px-3 border'>
                            <Button onClick={handleSubmit} text = "Add new Sensor"/>
                        </div>
                </form>
            </div>

        {navigate&& (<Navigate to="/farm" />)}
        </>
    )
}

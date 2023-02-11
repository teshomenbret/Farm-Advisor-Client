import React, {useState} from 'react'
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {create} from '../../../api/farm.api'
import ddd from  '../../../asset/alert.svg'


export default function ResetGDDForm(){
    const [GDD,setGDD]=useState("");

    const handleGDDChange = event => { 
        const {value} = event.target
        setGDD(value)
    }
  
    const handleSubmit= event => { 
        event.preventDefault()
        const sensor= {
            GDD:GDD || undefined,
        }
        create(sensor).then((data) => {
            console.log(data)
        })
    }
        
    return (
        <div className='bg-gray-50 bg-g lg:mx-80 px-6'>
            <div className='flex justify-between mb-5'>
                <p>New Senseor</p>
                <p>x</p>
            </div>
            <form>
                <InputField 
                    label = "Default GGD"  
                    onChange={handleGDDChange} 
                    name='GDD' 
                    value={GDD}
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                    required
                />
                <Button onClick={handleSubmit} text = "Add new Sensor"/>

            </form>
        </div>
    )
}

import React, {useState} from 'react'
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {create} from '../../../api/farm.api'
import ddd from  '../../../asset/alert.svg'


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
        <div className='bg-gray-50 bg-g lg:mx-80 px-6'>
            <div className='flex justify-between mb-5'>
                <p>New Senseor</p>
                <p>x</p>
            </div>
            <form>
                <InputField 
                    label = "Serial Number" 
                    onChange={handleSerialNumberChange} 
                    name='serial_number' 
                    icon={ddd} 
                    value={serial_number} 
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    required
                />

                <InputField 
                    label = "Sensor Location"  
                    onChange={handleLocationChange} 
                    name='location' 
                    value={location} 
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    required
                />

                <InputField 
                    label = "Default GGD"  
                    onChange={handleGDDChange} 
                    name='GDD' 
                    value={GDD}
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                    required
                />

                <InputField 
                    label = "Sensor Installation Date"  
                    onChange={handleInstallationDateChange} 
                    name='installation_date' 
                    value={installation_date}
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                    required
                />

                <InputField 
                    label = "Last Cutting Date At This Field"  
                    onChange={handleLastCuttingDateAtFieldChange} 
                    name='last_cutting_date_at_Field' 
                    value={last_cutting_date_at_Field} 
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    required
                />

<button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>

<div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
        
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
           
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>

            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>

                <Button onClick={handleSubmit} text = "Add new Sensor"/>

            </form>
        </div>
    )
}

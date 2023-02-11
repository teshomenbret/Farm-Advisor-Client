import React, {useState} from 'react'
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {create} from '../../../api/farm.api'
import search from  '../../../asset/search.svg'

export default function ResetGDDForm({toggleShowResetGDDForm}) {
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
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">

              {/*content*/}
             
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full min-w-[450px] bg-gray-50 outline-none focus:outline-none">
                    <div className='flex justify-between mx-3 mb-8 mt-4'>
                        <p className=''>New Farm</p>
                        <p>x</p>
                    </div>
                    <div className='mx-3'>
                        <form>
                            <div className='mb-3'>
                                <InputField label = "Farm Name" onChange={handleNameChange} name='name' value={name} placeholder ={'Enter farm name'} required/>
                            </div>
                            <div className='mb-3'>
                                <InputField label = "Location"  onChange={handleLocationChange} name='location' value={location} required icon={search}/>  
                            </div>
                            <div className='my-4 rounded bg-gray-100 shadow'>
                                <Button onClick={handleSubmit} text = "Create New farm"/>
                            </div>  
                           
                        </form>
                    </div>
              </div>

            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
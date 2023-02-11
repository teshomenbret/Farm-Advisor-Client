import React, {useState} from 'react'
import { Navigate } from 'react-router';
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {create} from '../../../api/farm.api'
import calander from  '../../../asset/calander.svg'

export default function ResetGDDForm({toggleShowResetGDDForm}) {
  const [navigate,setNavigate]=useState(false);
  const  toggleNavigate = ()=> {
      setNavigate(!navigate)
  }

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
        toggleNavigate()
    }
  
  return (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">

              {/*content*/}
              <div className="border-0 h-fit rounded-lg shadow-lg relative flex flex-col w-full lg:min-w-[450px] sm:mx-4 sm:min-w-full bg-gray-50 outline-none focus:outline-none">
                    <div className='flex justify-between my-4 px-3'>
                      <p className="font-['Roboto'] font-medium text-2xl not-italic leading-7">New Farm</p>
                      <button >X</button>
                    </div>
                    <div>
                        <form>
                          <div className='mb-4 px-3'>
                            <InputField label = "Farm Name" onChange={handleNameChange} name='name' value={name} required/>
                          </div>
                          <div className='mb-4 px-3'>
                            <InputField label = "Location"  onChange={handleLocationChange} name='location' value={location} required/>    
                          </div>
                          <div className='pb-3 mx-0 mt-36  px-3 border shadow-md'>
                            <Button onClick={handleSubmit} text = "Create New Farm"/>
                          </div>
                        </form>
                    </div>
              </div>
              
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          
          {navigate&& (<Navigate to="/fieldLanding" />)}
    </>
  );
}
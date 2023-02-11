import React from 'react'

import alert_image from '../../../asset/signup.svg'
import three_dot from '../../../asset/three_dot.svg'
import Drop from '../../Drop/grop.component'



export default function SensorCard({sensor}){

  const [showResetGDDForm, setShowResetGDDForm] = React.useState(false);
  const [showEditSensor, setShowEditSensor] = React.useState(false);
  const [showDelete, setShowDelete] = React.useState(false);


  const toggleShowResetGDDForm = event => { 
      setShowResetGDDForm(!showResetGDDForm)
  }
  const toggleShowEditSensor = event => { 
      setShowEditSensor(!showEditSensor)
  }
  const toggleShowDelete = event => { 
      setShowDelete(!showDelete)
  }
    const choice = [  {
                          name:"Reset GDD",
                          onClick:toggleShowResetGDDForm
                      },
                      {
                          name:"Edit Sensor",
                          onClick:toggleShowEditSensor
                      }, 
                      {
                          name:"Delete Sensor",
                          onClick:toggleShowDelete 
                        }
                    ]
    return (
        <div className=' m-4 p-4 bg-white rounded-lg lg:w-60 md:w-56 sm:w-44 xl:w-60'>
        <div className='flex justify-between'>
            <img className='w-8 h-8' src={alert_image} alt="" />

            <Drop choice = {choice}/>
        </div>
          <div className='mt-6'>
            <p>{sensor.serial_number}</p>
            <p>{"GDD "+sensor.GDD}</p>
          </div>

        </div>
        
    )
}



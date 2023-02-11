import React, {useState, useEffect} from 'react'
import { Navigate } from 'react-router';
import {farms} from '../../api/farm.api'
import FieldInfoCard from '../../components/Cards/FieldInfoCard/fieldInfo.component';
import SensorCard from '../../components/Cards/SensorCard/sensorCard.componet'
import ResetGDDForm from '../../pages/Form/ResetGDD/resetGDDForm.page'
import landscape from "../../asset/landscape.svg"
import SensorForm from '../Form/SensorForm/sensorForm.component';


export default function  Field(){
    const [sensor,setNavigate]=useState(false);
    const [showSensor,setShowSensor]=useState(false);
    const  addSensor = ()=> {
        setNavigate(!sensor)
    }
    const  toggleShowSensor = ()=> {
        setShowSensor(!showSensor)
    }

    const [farm,setData]=useState();


    useEffect(()=>{
        farms().then(farm =>setData(farm))
      },[])
    return(
        <>
        <div className='bg-gray-50 lg:mx-96 sm:mx-80 md:mx-10'>
            <div className='flex justify-start mx-4 mb-4'>
                <img src={landscape} alt="" />
                <p className='ml-8'>{farm&&farm[0].fields[0].altitude+" above sea level"}</p>
            </div>          
            <FieldInfoCard/>
            <p className='mx-8'>Last sensor reset: 04/03/22 (auto reset)</p>
           
            <div>
                <div className='flex justify-between w-full'>
                    <p className='mx-8 font-bold'>Sensors</p>
                    <div className='flex justify-between mx-4 w-8'>
                        <button onClick={addSensor} ><p>+</p></button>
                        <button onClick={toggleShowSensor}><p>x</p></button>
                    </div>
                </div>

                {
                    showSensor&&(
                        <div className='flex justify-start flex-wrap mt-3'>
                        {   farm&&farm[0].fields[0].sensors.map((sensor,index ) =>( 
                            <div key={index}>
                                <SensorCard sensor = {sensor}/>
                            </div>  
                            ))
                        }
                    </div>

                    )
                }
               
            </div>
        </div>

        {/* kvhdfhvsdhvsd */}


        {sensor&&(<>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">

             <SensorForm/>
              
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>)}


       
          



        </>

    )
    
}

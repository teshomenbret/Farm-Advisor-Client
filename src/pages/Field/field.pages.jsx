import React, {useState, useEffect} from 'react'
import {farms} from '../../api/farm.api'
import FieldInfoCard from '../../components/Cards/FieldInfoCard/fieldInfo.component';
import SensorCard from '../../components/Cards/SensorCard/sensorCard.componet'
import ResetGDDForm from '../../pages/Form/ResetGDD/resetGDDForm.page'
import landscape from "../../asset/landscape.svg"


export default function  Field(){
    const [farm,setData]=useState();

    useEffect(()=>{
        farms().then(farm =>setData(farm))
      },[])
    return(
        <div className='bg-gray-50 lg:mx-96 sm:mx-80 md:mx-10'>
            <div className='flex justify-start mx-4 mb-4'>
                <img src={landscape} alt="" />
                <p className='ml-8'>{farm&&farm[0].fields[0].altitude+" above sea level"}</p>
            </div>          
            <FieldInfoCard/>
            <p className='mx-8'>Last sensor reset: 04/03/22 (auto reset)</p>
           
            <div>
                <p className='mx-8 font-bold'>Sensors</p>
                <div className='flex justify-start flex-wrap mt-3'>
                    {   farm&&farm[0].fields[0].sensors.map((sensor,index ) =>( 
                        <div key={index}>
                            <SensorCard sensor = {sensor}/>
                        </div>  
                        ))
                    }
                </div>
            </div>
        </div>
    )
    
}

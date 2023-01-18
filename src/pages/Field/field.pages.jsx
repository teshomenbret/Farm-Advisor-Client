import React, {useState, useEffect} from 'react'
import {farms} from '../../api/farm.api'
import FieldInfoCard from '../../components/Cards/FieldInfoCard/fieldInfo.component';
import SensorCard from '../../components/Cards/SensorCard/sensorCard.componet'

export default function  Field(){
    const [farm,setData]=useState();
    useEffect(()=>{
        farms().then(farm =>setData(farm))
      },[])
    return(
        <div>
            <div>
                <p>{farm&&farm[0].fields[0].altitude+" above sea level"}</p>
            </div>

            <div>
                <FieldInfoCard/>
            </div>
           
            <div>
                <p>Sensors</p>
                <div>
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

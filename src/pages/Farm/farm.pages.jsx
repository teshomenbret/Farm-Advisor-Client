import React, {useState, useEffect} from 'react'
import {farms} from '../../api/farm.api'
import AlertCard from '../../components/Cards/AlertCard/alertCard.component'
import FieldCard from '../../components/Cards/FieldCard/fieldCard.component'
import './farm.style.css'

export default function  Farm(){
    const [farm,setData]=useState();
    useEffect(()=>{
        farms().then(farm =>setData(farm))
      },[])
    return(
        <div>
            <div>
                <p>{farm&&farm[0].name}</p>
            </div>

            {   farm&&farm[0].alerts.map((alert,index ) =>( 
                    <div key={index}>
                        <AlertCard alert = {alert}/>
                    </div>  
                    ))
            }

            {   farm&&farm[0].fields.map((field,index ) =>( 
                    <div key={index}>
                        <FieldCard field = {field}/>
                    </div>  
                    ))
            }

        </div>
    )
    
}

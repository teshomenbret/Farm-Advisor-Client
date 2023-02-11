import React, {useState, useEffect} from 'react'
import {farms} from '../../api/farm.api'
import TerrainIcon from '@mui/icons-material/Terrain'
import FieldInfoCard from '../../components/Cards/FieldInfoCard/fieldInfo.component';
import SensorCard from '../../components/Cards/SensorCard/sensorCard.componet'
import ResetGDDForm from '../../pages/Form/ResetGDD/resetGDDForm.page'
import landscape from "../../asset/landscape.svg"
import NavBar from '../../components/NavBar/NavBar.component';
import LineChart from '../../components/Cards/LineChart/CardLineChart.component';
import ChartLineChart from '../../components/Cards/LineChart/CardLineChart.component'
import BarChart from '../../components/BarChart/BarChart.component';
import CustomCalendar from '../../components/CustomCalendar/Calendar.component';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import Header from '../../components/NavBar/Header.component';

export default function  Field(){
    const [farm,setData]=useState();


    // useEffect(()=>{
    //     farms().then(farm =>setData(farm))
    //   },[])
    return(
        <div>
        <Header/>
        <div className='bg-gray-50 bg-g lg:mx-60 px-6'>
            
                <div className="justify-between md:items-center md:flex mb-8 ">
                <div className="flex items-center space-x-4">
                    <TerrainIcon />
                    <p className="text-gray-700 text-base ">127m above see level.</p>
                </div>
                </div>
            <FieldInfoCard/>
            <p className='mx-8'>Last sensor reset: 04/03/22 (auto reset)</p>
            <div>
                <div className='flex justify-between '>
                    <p className='mx-8 font-bold w-2/3'>Sensors</p>
                    <div className='flex justify-evenly'>
                        <AddIcon/>
                        <KeyboardArrowDownIcon/>
                    </div>
                </div>
               
                <div className='flex justify-start flex-wrap mt-3'>
                    {   farm&&farm[0].fields[0].sensors.map((sensor,index ) =>( 
                        <div key={index}>
                            <SensorCard sensor = {sensor}/>
                        </div>  
                        ))
                    }
                </div>
            </div>
            <div>
                <CustomCalendar/>
            </div>
            <div>
                <ChartLineChart/>
            </div>
            <div>
                <BarChart/>
            </div>  
        </div>
        </div>
    )
    
}


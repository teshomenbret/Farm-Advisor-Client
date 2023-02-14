import React, {useState, useEffect} from 'react'
import Rodal from 'rodal';
import {fields} from '../../api/field.api'
import TerrainIcon from '@mui/icons-material/Terrain'
import FieldInfoCard from '../../components/Cards/FieldInfoCard/fieldInfo.component';
import SensorCard from '../../components/Cards/SensorCard/sensorCard.componet'
import ResetGDDForm from '../../pages/Form/ResetGDD/resetGDDForm.page'
import landscape from "../../asset/landscape.svg"
import SensorForm from '../Form/SensorForm/sensorForm.component';
import NavBar from '../../components/NavBar/NavBar.component';
import LineChart from '../../components/Cards/LineChart/CardLineChart.component';
import ChartLineChart from '../../components/Cards/LineChart/CardLineChart.component'
import BarChart from '../../components/BarChart/BarChart.component';
import CustomCalendar from '../../components/CustomCalendar/Calendar.component';
import { useParams} from "react-router-dom"
// include styles
import 'rodal/lib/rodal.css';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import Header from '../../components/NavBar/Header.component';

export default function  Field(){

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
    
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      },[windowSize]);

      
    const [sensor,setNavigate]=useState(false);
    const [showSensor,setShowSensor]=useState(false);
    
    const [resetGDDonallsensors, setResetGDDonallsensors] = useState(false);
    const [editField, setEditField] = useState(false);
    const [deleteField, setDeleteField] = useState(false);
    const params = useParams()
  
    const  addSensor = ()=> {
        setNavigate(!sensor)
    }
    const  toggleShowSensor = ()=> {
        setShowSensor(!showSensor)
    }

    const choiceFarm = [  {
        name:"Reset GDD on all sensors",
        onClick:()=> { 
            console.log(resetGDDonallsensors)
          setResetGDDonallsensors(!resetGDDonallsensors)
          
          }
      },
      {
          name:"Edit Field",
          onClick:()=>{
            setEditField(!editField)
          }
      }, 
      {
          name:"Delete Field",
          onClick:()=>{
            setDeleteField(!deleteField)
          }
        }
    ]

    const [visible,setVisible]=useState(false);
    const  show =() =>{
        setVisible(true);
    }
    const hide =() =>{
        setVisible( false );
    }
   

    const [field,setData] = useState();


    useEffect(()=>{
        fields(params.id).then(fields =>setData(fields))
      },[])
    return(
<>

         <Header name={"Farm Name"} back ='/farm' choice={choiceFarm} />  
          
        <div className='bg-gray-50 bg-g lg:mx-60 px-6 mt-0 pt-12'>
                <div className="justify-between md:items-center md:flex mb-8 ">
                <div className="flex items-center space-x-4">
                    <TerrainIcon />
                    <p className="text-gray-700 text-base pt-2">127m above see level.</p>
                </div>
            </div>
            <FieldInfoCard/>

            <p className='mx-8'>Last sensor reset: 04/03/22 (auto reset)</p>
            <div>
                <div className='flex justify-between '>
                    <p className='mx-8 font-bold w-2/3'>Sensors</p>
                    <div className='flex justify-evenly'>
                        <AddIcon onClick={show}/>
                        <KeyboardArrowDownIcon onClick={toggleShowSensor}/>
                    </div>
                </div>

                {
                    showSensor&&(
                        <div className='flex justify-start flex-wrap mt-3'>
                        {   field&&field.sensors.map((sensor,index ) =>( 
                            <div key={index}>
                                <SensorCard sensor = {sensor}/>
                            </div>  
                            ))
                        }
                    </div>

                    )
                }
               
            </div>
            <div className="w-64 h-14 pt-4">
                <CustomCalendar />
            </div>
            <div>
                <ChartLineChart/>
            </div>
            <div>
                <BarChart/>
            </div>  
        </div>


        <div>
            <Rodal customStyles={{ height: '80%', overflow:'auto', backgroundColor :'rgb(249 250 251)' }} width = {windowSize[0]<600?windowSize[0]:600} height = {800} visible={visible} onClose={hide}>
                <SensorForm id ={params.id}/>
            </Rodal>
      </div>

        </>

    )
    
}




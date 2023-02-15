import React, {useState, useEffect} from 'react'
import Rodal from 'rodal';
import {farms} from '../../api/farm.api'
import AlertCard from '../../components/Cards/AlertCard/alertCard.component'
import FieldCard from '../../components/Cards/FieldCard/fieldCard.component'
import add from '../../asset/add.svg'
import farm_page from '../../asset/farm-page.svg'
import FarmListbox from '../../components/Listbox/listbox.component'
import Drop from '../../components/Drop/grop.component'
import FieldForm from '../Form/FieldForm/fieldForm.component'

// include styles
import 'rodal/lib/rodal.css';

export default function  Farm(){

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


    const [visible,setVisible]=useState(false);
    const  show =() =>{
        setVisible(true);
    }
    const hide =() =>{
        setVisible( false );
    }
   

    const [farm,setData]=useState();
    const [selectedFarm, setSelectedFarm] = useState()
    const choice = [  {
        name:"Edit Farm",
        onClick:()=>{
            console.log("edit farm")
        }
    },
    {
        name:"Delete Farm",
        onClick:()=>{
            console.log("edit farm")
        }
    }
  ]
    useEffect(()=>{
        farms().then(farm =>{
            console.log("farm", farm)
            setData(farm)
            setSelectedFarm(farm[0])
        })
      },[])
    return(
        <>
        <div className='bg-gray-50 bg-g lg:mx-80 px-6'>
            <div className='flex justify-between'>

                <div className='flex justify-between w-1/4 mt-5'>
                    <img src={farm_page}></img>
                    {
                    (farm&&selectedFarm)&&<FarmListbox className = "bg-white" farm = {farm} selectedFarm = {selectedFarm} setSelectedFarm = {setSelectedFarm} />
                    } 
                </div>
                <Drop choice = {choice}/>
            </div>

            
            <h1 className='font-bold'>Alerts</h1>
               
            {   selectedFarm&&selectedFarm.alerts&&selectedFarm.alerts.map((alert,index ) =>( 
                    <div key={index}>
                        <AlertCard alert = {alert}/>
                    </div>  
                    ))
            }

            <div className='flex justify-between mt-6'>
                <h1 className='font-bold'>Fields</h1>
                <button onClick={show}><img  src={add}></img></button>
            </div>

            {   selectedFarm&&selectedFarm.fields.map((field,index ) =>( 
                    <div key={index}>
                        <FieldCard field = {field}/>
                    </div>  
                    ))
            }
            </div>
            <div>
                <Rodal customStyles ={{ height: '80%', overflow:'auto', 'background-color' :'rgb(249 250 251)' }} width = {windowSize[0]<600?windowSize[0]:600} height = {500} visible={visible} onClose={hide}>
                    <FieldForm />
                </Rodal>
        </div>
    </>
    )
    
}

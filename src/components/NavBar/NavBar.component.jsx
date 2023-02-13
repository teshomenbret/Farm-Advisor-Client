import React, {useState, useEffect} from 'react'
import Rodal from 'rodal';
import { Navigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import Frop from '../Drop/Frop.component';
import Drop from '../Drop/grop.component'
import SensorForm from '../../pages/Form/SensorForm/sensorForm.component'
import FarmForm from '../../pages/Form/FarmForm/farmForm.pages'
import FieldForm from '../../pages/Form/FieldForm/fieldForm.component';

import { Menu } from '@headlessui/react'

export default function NavBar() {

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


  const [showAddNewSensor, setShowAddNewSensor] = useState(false);
  const [showAddNewField, setShowAddNewField] = useState(false);
  const [showAddNewFarm, setShowAddNewFarm] = useState(false);

  const  makeAddNewSensorVisable =() =>{
    setShowAddNewSensor(true)
    setShowAddNewField(false)
    setShowAddNewFarm(false)
}
  const makeAddNewFiledVisable =() =>{
    setShowAddNewField(true)
    setShowAddNewSensor(false)
    setShowAddNewFarm(false)
  }

  const makeAddNewFarmVisable =() =>{
    setShowAddNewFarm(true)
    setShowAddNewField(false)
    setShowAddNewSensor(false)
}


  const choiceProfile = [  {
    name:"Profile",
    link:"/profile"
  },
  {
      name:"Help",
      link:"/help"
  }, 
  {
      name:"Sign out",
      link:"/signUp"
    }
]


  const choiceplus = [  {
    name:"Add New Sensor",
     onClick:makeAddNewSensorVisable
    
  },
  {
      name:"Add New Field",
      onClick:makeAddNewFiledVisable
      
  }, 
  {
      name:"Add New Farm",
      onClick:makeAddNewFarmVisable
    }
]


  return (
    <>
    <nav className="w-full bg-green-900 shadow">
      <div className="justify-between md:items-center md:flex px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block text-green">
          <a href="/" className="no-underline">
            <h2 className="text-2xl font-bold text-green-400 object-left-top">
              agino
            </h2>
          </a> 
        </div>
        <div className="hidden space-x-4 md:inline-block">
          <div className='flex justify-evenly'>
            <div className='mx-2'>
              <Frop choice ={choiceProfile} icon = { <PersonIcon style={{color: 'white'}}/>}/>
            </div>
            <div className='mx-2'>
              {/* <Frop choice ={choiceplus} icon = { <AddIcon style={{color: 'white'}}/>}/> */}


              <Drop choice = {choiceplus}/>


              
            </div>
          </div>
          
        </div>
      </div>
    </nav>

        <div>
              <Rodal customStyles={{ height: '80%', overflow:'auto', backgroundColor :'rgb(249 250 251)' }} width = {windowSize[0]<600?windowSize[0]:600} height = {800} visible={showAddNewSensor} onClose={setShowAddNewSensor}>
                  <SensorForm/>
              </Rodal>
        </div>

        <div>
              <Rodal customStyles ={{ height: '80%', overflow:'auto', 'background-color' :'rgb(249 250 251)' }} width = {windowSize[0]<600?windowSize[0]:600} height = {500} visible={showAddNewField} onClose={setShowAddNewField}>
                    <FieldForm/>
              </Rodal>
        </div>

        <div>
              <Rodal customStyles ={{ height: '80%', overflow:'auto', 'background-color' :'rgb(249 250 251)' }} width = {windowSize[0]<600?windowSize[0]:600} height = {500} visible={showAddNewFarm} onClose={setShowAddNewFarm}>
                  <FarmForm/>
              </Rodal>
        </div>

    

          
    </>
  );
}
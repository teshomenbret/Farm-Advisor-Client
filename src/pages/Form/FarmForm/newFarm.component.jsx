import React, {useState} from 'react'
import { Navigate } from 'react-router';
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {create} from '../../../api/farm.api'
import MapInputField from '../../../components/InputField/MapField/MapField.component';
import FarmListbox from '../../../components/Listbox/listbox.component'
import {farms, remove} from '../../../api/farm.api'
import fields from '../../../api/field.api'

export default function FarmForm() {
  const [lng, setLng] = useState(38.763611);
  const [lat, setLat] = useState(9.005401);
  const [id, setID] = useState("");

  const [farm,setData]=useState();
  const [selectedFarm, setSelectedFarm] = useState()

  const [field,setField]=useState();
  const [selectedfield, setSelectedField] = useState()

  useEffect(()=>{
    farms().then(farm =>{
        console.log("farm", farm)
        setData(farm)
        setSelectedFarm(farm[0])
    })
  },[])

  useEffect(()=>{
    fields().then(field =>{
        console.log("field", field)
        setField(field)
        setSelectedFarm(field[0])
    })
  },[])

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
    const handleSubmit= event => { 
        event.preventDefault()

        let formData = new FormData();
          formData.append('name', name);
          formData.append('longitude', lng);
          formData.append('latitude', lat);
          formData.append('userId', "7ed255df-0212-4671-2390-08db0e7c5a32");
          create(formData).then((data) =>{
            setID(data.farmId)
            console.log( "data", data)
            toggleNavigate()
          })
        
    }
  
  return (
        <>
              <div className='bg-gray-50 bg-g lg:mx-80 px-6'>
                    <p className="font-['Roboto'] font-medium text-2xl not-italic leading-7">New Farm</p>
              </div>

                    <div>
                        <div className='flex justify-between w-1/4 mt-5'>
                            {
                            (farm&&selectedFarm)&&<FarmListbox className = "bg-white" farm = {farm} selectedFarm = {selectedFarm} setSelectedFarm = {setSelectedFarm} />
                            } 
                        </div>
                        <div className='flex justify-between w-1/4 mt-5'>
                            {
                            (field&&selectedfield)&&<FarmListbox className = "bg-white" farm = {field} selectedFarm = {selectedfield} setSelectedFarm = {setSelectedField} />
                            } 
                        </div>
                        <form>
                          <div className='mb-4 px-3'>
                            <InputField label = "Farm Name" onChange={handleNameChange} name='name' value={name} required/>
                          </div>
                          <div className='mb-4 px-3'>
                            <MapInputField lng = {lng} lat = {lat} setLat={setLat} setLng = {setLng}/>
                            </div>
                          <div className='pb-3 mx-0 mb-0 px-3 border'>
                            <Button onClick={handleSubmit} text = "Create New Farm"/>
                          </div>
                        </form>
                    </div>
          
          {navigate&& (<Navigate to={`/fieldLanding/${id}`} />)}
    </>
  );
}
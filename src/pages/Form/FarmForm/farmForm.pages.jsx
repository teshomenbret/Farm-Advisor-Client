import React, {useState} from 'react'
import { Navigate } from 'react-router';
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {create} from '../../../api/farm.api'
import MapInputField from '../../../components/InputField/MapField/MapField.component';

export default function FarmForm() {
  const [lng, setLng] = useState(38.763611);
  const [lat, setLat] = useState(9.005401);
  const [id, setID] = useState("");

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

        const farm = {
            name: name || undefined,
            location: location || undefined,
            lng: lng || undefined,
            lat:lat || undefined,
        }
        create(farm).then((data) => {
          setID(data.id)
          console.log(data)
          toggleNavigate()
        })
        
    }
  
  return (
        <>
              <div className='mt-0 px-3'>
                    <p className="font-['Roboto'] font-medium text-2xl not-italic leading-7">New Farm</p>
              </div>

                    <div>
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
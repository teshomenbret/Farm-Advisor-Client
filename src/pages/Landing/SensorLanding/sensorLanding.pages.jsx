import React, {useState,useEffect} from 'react'
import Rodal from 'rodal';
import { useParams} from "react-router-dom"
import Landing from '../../../components/Landing/landing.component'
import field_image from '../../../asset/field.svg'
import SensorForm from '../../Form/SensorForm/sensorForm.component';
// include styles
import 'rodal/lib/rodal.css';

export default function  (){

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
    const params = useParams()

    return(
        <>
        <div>
            <div>
                <p>field name</p>
            </div>
            <div>
                <Landing image={field_image} btn_action={show} btn_text="ADD my first SENSOR" title = "Add a field" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id pellentesque nulla. Donec porta pretium risus vitae ultrices. "/>
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

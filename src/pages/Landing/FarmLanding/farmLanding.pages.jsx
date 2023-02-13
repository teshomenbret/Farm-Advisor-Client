import React,{useState, useEffect} from 'react'
import Rodal from 'rodal';
import Landing from '../../../components/Landing/landing.component'
import farm_image from '../../../asset/farm.svg'
import FarmForm from '../../Form/FarmForm/farmForm.pages';

// include styles
import 'rodal/lib/rodal.css';

export default function  FarmLanding(){
    

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
    return(
        <>
        <div>
            <div>
                <Landing image={farm_image} btn_action={show} btn_text= "create my first farm" title = "Welcome to Agino" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id pellentesque nulla. Donec porta pretium risus vitae ultrices. "/>
            </div>
        </div>

        <div>
            <Rodal customStyles ={{ height: '80%', overflow:'auto', 'background-color' :'rgb(249 250 251)' }} width = {windowSize[0]<600?windowSize[0]:600} height = {500} visible={visible} onClose={hide}>
                <FarmForm/>
            </Rodal>
      </div>

        </>
    )
    
}

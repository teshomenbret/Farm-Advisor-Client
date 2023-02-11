import React from 'react'
import Landing from '../../../components/Landing/landing.component'
import Button from '../../../components/Button/button.componet'
import field_image from '../../../asset/field.svg'

export default function  (){
    const  addSensor= ()=> {
        console.log("creat Sensor")
    }
    return(
        <div>
            <div>
                <p>field name</p>
            </div>
            <div>
                <Landing image={field_image} btn_action={addSensor} btn_text="Add my first field" title = "Add a field" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id pellentesque nulla. Donec porta pretium risus vitae ultrices. "/>
            </div>
            {/* <div>
                <Button onClick={addField} text = "ADD my first FIELD"/>
            </div> */}
        </div>
    )
    
}

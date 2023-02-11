import React from 'react'
import Landing from '../../../components/Landing/landing.component'
import Button from '../../../components/Button/button.componet'
import farm_image from '../../../asset/farm.svg'

export default function  FarmLanding(){
    const  farm= ()=> {
        console.log("creat farm")
    }
    return(
        <div>
            <div>
                <Landing image={farm_image} btn_action={farm} btn_text= "create my first farm" title = "Welcome to Agino" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id pellentesque nulla. Donec porta pretium risus vitae ultrices. "/>
            </div>
            {/* <div>
                <Button onClick={farm} text = "create my first farm"/>
            </div> */}
        </div>
    )
    
}

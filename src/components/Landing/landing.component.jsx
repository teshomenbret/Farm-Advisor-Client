import React from 'react'


export default function Landing({image, title,paragraph}){
    return (
        <div>
            <div>
                <img src={image}></img>
            </div>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <p>{paragraph}</p>
            </div>
        </div>  
    )
}


import React from 'react'


export default function Button({onClick, text}){
    return (
        <div>
            <button type="button" onClick = {onClick}>{text}</button>
        </div>
        
    )
}


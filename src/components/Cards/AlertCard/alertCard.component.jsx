import React from 'react'


export default function AlertCard(props){
    return (
        <div className="card">
            <p>{props.alert.message}</p>
            <p>{props.alert.date}</p>
        </div>
        
    )
}


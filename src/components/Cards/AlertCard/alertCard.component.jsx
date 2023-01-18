import React from 'react'


export default function AlertCard({alert}){
    return (
        <div className="card">
            <p>{alert.message}</p>
            <p>{alert.date}</p>
        </div>
        
    )
}


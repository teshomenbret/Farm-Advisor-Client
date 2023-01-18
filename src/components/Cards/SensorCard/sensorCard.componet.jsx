import React from 'react'


export default function SensorCard({sensor}){
    return (
        <div>
            <p>{sensor.serial_number}</p>
            <p>{"GDD "+sensor.GDD}</p>
        </div>
        
    )
}


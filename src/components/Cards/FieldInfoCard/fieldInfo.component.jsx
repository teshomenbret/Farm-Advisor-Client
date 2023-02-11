import React from 'react'



export default function FieldInfoCard(props){
    return (
        <div className=' mx-4 flex h-22 py-5 bg-white justify-evenly rounded'>
            <div>
                <p className='font-medium'>367</p>
                <p>Current GDD</p>
            </div>
            <div>
                <p>475</p>
                <p>Goal GDD</p>
            </div>
            <div>
                <p>{5+"days"}</p>
                <p>To cutting </p>
            </div>  
        </div>
        
    )
}


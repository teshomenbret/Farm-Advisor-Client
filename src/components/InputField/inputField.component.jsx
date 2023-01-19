import React from 'react'


export default function InputField({onChange,label, name,value,...otherPropes}){
    return (
        <div>
            <label>{label}</label>
            <input onChange={onChange} name={name} value={value} {...otherPropes} />     
        </div>
        
    )
}


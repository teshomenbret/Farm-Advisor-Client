import React from 'react'

export default function InputField({onChange,label, name, value,icon, ...otherPropes}){
    return (
      <div>
          <label className="block">{label}</label>

          <div className="relative mt-1 rounded-md shadow-sm">
              <input
                name={name}
                value = {value}
                onChange = {onChange}
                {...otherPropes}
                className="mt-2 py-3 block w-full bg-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {
              icon&& <div className="absolute inset-y-0 right-0 flex items-center">
                      <img src={icon} className="rounded-md h-3/4 border-transparent bg-transparent py-0 pl-1 pr-4"/>
                    </div>

              }
          
          </div>
      </div>
    )
  }
  

import React, {useState} from 'react'
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {create} from '../../../api/farm.api'
import calander from  '../../../asset/calander.svg'

export default function ResetGDDForm({toggleShowResetGDDForm}) {
  const [GDD,setGDD]=useState("");

  const handleGDDChange = event => { 
      const {value} = event.target
      setGDD(value)
  }

  const handleSubmit= event => { 
      event.preventDefault()
      const sensor= {
          GDD:GDD || undefined,
      }
      create(sensor).then((data) => {
          console.log(data)
      })
  }
  return (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">

              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full min-w-[450px] bg-gray-50 outline-none focus:outline-none">
                
                {/*header*/}
                <div className="flex items-start justify-between p-3">
                  <p className="font-semibold">Reset GDD</p>
                  <p>x</p>
                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <form>
                        <InputField 
                            label = "Default GGD"  
                            onChange={handleGDDChange} 
                            name='GDD' 
                            value={GDD}
                            type="date"
                            // className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                            required
                        />
                        <div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker datepicker-autohide type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div>
                    </form>
                </div>

                {/*footer*/}
                <div className="p-3">
                  <Button
                    text={"Reset GDD"}
                    onClick={toggleShowResetGDDForm}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
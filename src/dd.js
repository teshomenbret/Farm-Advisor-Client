import React,{useState} from 'react'

export default function  Ddd(){
    const [title,setTitle]=useState("AURA program Go for it");
    const [counter, setCounter] = useState(0)

    const  changeTitle = ()=> {
        if(title==="AURA program Go for it"){
            setTitle("Michigan Go for it")}
        else{
            setTitle("AURA program Go for it")
        }
    }
    return(
        <div className='App'>
             <h1>{title}</h1>
             <button type="button" onClick = {changeTitle}>Change Title</button>
             <button type="button" onClick = {(counter)=>setCounter((counter)=>counter+1)}>Increment Counter</button>
             <p>{counter}</p>
        </div>
    )  
}
import React,{useRef, useState} from 'react'
export default function Uref() {
    const refElem = useRef();
    const [name ,setName]=useState("Nazeer khan")
    function handleref(){
setName("");
refElem.current.focus();
refElem.current.style.backgroundColor='red'
    }
  return (
    <div>
        <input ref={refElem} type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={handleref}>Reset</button>
    </div>
  )
}

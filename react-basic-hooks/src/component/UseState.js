import { useState } from "react";
function UseState(){
    const[show,setshow]=useState(false);
    return(
        <>
        <button onClick={()=>setshow(true)}>show</button>
        <button onClick={()=>setshow(false)}> hide </button>
        <button onClick={()=>setshow(!show)}>toggle</button>
        {show && <h1>show , hode & toggle</h1>}
        </>
    )
}
export default UseState;
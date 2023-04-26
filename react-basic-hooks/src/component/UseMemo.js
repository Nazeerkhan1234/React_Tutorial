import React, { useMemo, useState } from 'react';
function UseMemo(){
    const [plus,setPlus]=useState(0);
    const [minus , setMinus]= useState(100);

 const multiply=useMemo(function multiply (){
        return plus*2;
    },[plus])

    return(
        <>
        <h1>multiply in plus with two{multiply}</h1>
<button onClick={()=>setPlus(plus+1)}>plus</button><h1>{plus}</h1>
<button onClick={()=>setMinus(minus-1)}>Minus</button><h1>{minus}</h1>
        </>
      )   
}
export default UseMemo;
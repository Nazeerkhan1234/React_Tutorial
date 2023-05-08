import React, { useState } from 'react';
function Form(){
    const[name,setName]=useState("");
    const [paswd,setPswd]=useState("");
   function handle(e){
console.log(e.target.value);
   }
    return(
        <>
<form action="">
    <label htmlFor="">Name : </label>
    <input type="text" name='name' onChange={handle}  placeholder='enter your name'/><br /><br />
    <label htmlFor="">password : </label>
    <input type="password" name="password" id="" placeholder='enter your password' /><br /><br />
    <input type="button" value="submit" />
</form>
        </>
    )
}
export default Form;
import { useEffect, useState } from "react";
import axios from "axios";
function Axios1() {
  const[user,setuser]=useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((Response)=>{
      setuser(Response.data)
    })
  },[]);

  return (
    <>
      <h1>hello</h1>
      {user.map((data)=>{
        return(
          <h3>{data.name}</h3>
        )
      })}
    </>
  );
}
export default Axios1;

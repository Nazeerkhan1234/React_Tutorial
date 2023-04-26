import React, { useEffect, useState } from "react";
function Ueffect() {
  const [count, setCount] = useState(0);
//   const [name, setName] = useState("aman");
  const [item, setitem] = useState();

  //        useEffect1(()=>{
  //         document.title = `this is my Title ${count} ${name}`
  //         console.log('componentdidUpdate')
  //  })// this works as componentdidUpdate

  //        useEffect2(()=>{
  //         document.title = `this is my Title ${count} ${name}`
  //         console.log('componentdidmount')
  //  } , [])  // this works as componentdidmount
  // Dependency array is an array for which the useEffect will work

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setitem(json));

    // document.title = `this is my Title ${count} ${name}`;
    // console.log("Use Effect");
  },[count]); //This work as particular state

  return (
    <div>
      <h1>This is my Counter {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      {/* <button onClick={() => setName("Ankiet")}>ChangeName</button> */}
      {/* <h1>{name}</h1> */}
      <ul>
        {item &&
          item.map((item) => {
           return <li key={item.id}>{item.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default Ueffect;

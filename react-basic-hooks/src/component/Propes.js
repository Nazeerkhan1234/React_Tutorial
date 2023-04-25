import React,{useState }from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
};
function handleClick(num,setNum) {
  setNum(num+1);
  console.log("The link was clicked.");
}
const Propes = () => {
  const [num,setNum] =useState(0);
  return (
    <div>
       <h1>{num}</h1>
      <ChildComponent name="John" age="30" />
      <ChildComponent name="Mary" age="25" />
      <a href='#' onClick={()=>handleClick(num,setNum)}>click me</a>
     
    </div>
  );
}
  export default Propes
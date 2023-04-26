import React, { useContext } from 'react'
import { data1,data2 } from './UseContext'

export const ChildB = () => {
    const name = useContext(data1);
    const gender=useContext(data2);
  return (
    <div>
<h1>my name is {name} and gender is {gender}</h1>
    </div>
  )
}

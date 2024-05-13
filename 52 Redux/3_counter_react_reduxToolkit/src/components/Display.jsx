import React from 'react'
import { useSelector } from "react-redux";
function Display() {
  const data = useSelector((state) => {return state.counter.value});
  console.log(data)
  return (
    <div>
     <h4>counter value is : {data}</h4> 
    </div>
  )
}

export default Display

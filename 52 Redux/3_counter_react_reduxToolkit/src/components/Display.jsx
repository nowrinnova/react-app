import React from 'react'
import { useSelector } from "react-redux";
function Display() {
  const data = useSelector((state) => {return state.counter.value});
  const arrays = useSelector((state) => {return state. displayData.combined});
  // console.log(data)
  return (
    <div>
     <h4>counter value is : {data}</h4> 
     <ul>
        {arrays.map((student, index) => (
          <li key={index}>
            Type: {student.type}, Study: {student.study}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Display

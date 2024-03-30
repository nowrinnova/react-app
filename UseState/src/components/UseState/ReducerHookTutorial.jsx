import React, { useReducer } from 'react'
const initialState=0;
const reducer =(state,action)=>{
  console.log(state);
if (action==="increment"){
  return state+1 ;
}
else{
  return state-1;
}
}

function ReducerHookTutorial() {
  const [count ,dispatch] =useReducer(reducer,initialState)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch('increment')} > Increment </button>
      <button onClick={()=>dispatch('decrement')} > Decrement </button>
    </div>
  )
}

export default ReducerHookTutorial

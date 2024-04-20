// const redux =require('redux')
// const INITIAL_VALUE={
//   COUNTER:0,
// }
// const reducer=(state=INITIAL_VALUE,action)=>{
// if(action.type==="increment"){
//   console.log('state:',state )
//   return {COUNTER:state.COUNTER+1}
// }
//  else if(action.type==="decrement"){
//   console.log('state:',state )
//    return{ COUNTER:state.COUNTER-1} }
//   else if(action.type==="addition"){
//     console.log('state:',state )
//     console.log(action)
//      return{ COUNTER:state.COUNTER+action.payload} }
  
// }

// const store= redux.createStore(reducer)
// store.subscribe(() => console.log(store.getState()))
// store.dispatch({type:'increment'})
// store.dispatch({type:'addition' ,payload:7})
// store.dispatch({type:'decrement'})

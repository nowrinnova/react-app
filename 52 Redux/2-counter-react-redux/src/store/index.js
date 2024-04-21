import {createStore} from "redux"
const INITIAL_VALUE={
  counter:0
}
const reducer=(store=INITIAL_VALUE,action)=>{
 if(action.type==="increment"){
  return {counter:store.counter+1};
 }
 else if(action.type==="decrement"){
  return{counter:store.counter-1};
 }
 return store;
  
}
const CounterStore =createStore(reducer)
export default CounterStore;
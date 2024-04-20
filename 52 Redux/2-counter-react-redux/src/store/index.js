import {createStore} from "redux"
const INITIAL_VALUE={
  counter:0
}
const reducer=(store=INITIAL_VALUE,action)=>{
  return store;
}
const CounterStore =createStore(reducer)
export default CounterStore;
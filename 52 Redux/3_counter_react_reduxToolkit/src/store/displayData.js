import { createSlice } from "@reduxjs/toolkit";
export const displaySlice = createSlice({
  name:'display',
  initialState:{array:[{
    type:"student",
    study:"class 1"
   },
   {
    type:"student",
    study:"class 2"
   },
   {
    type:"student",
    study:"class 3"
   }],
  combined:[]},
  reducers:{
    storedata:(state,action)=>{
    state.combined=[...state.array,...action.payload.a]
    console.log(state.combined)
    }
  }
})
export const { storedata } =  displaySlice .actions;
export default  displaySlice .reducer;
import { createSlice } from "@reduxjs/toolkit";

export const fatchSlice=createSlice({
  name:"fatchApi",
  initialState:{
    array:[1]
  },
  reducers:{
    fatch:(state,action)=>{
      console.log(state.array)
      state.array=[...action.payload]
      console.log(state.array)
    }
  }

})
export const { fatch } = fatchSlice.actions;
export default fatchSlice.reducer
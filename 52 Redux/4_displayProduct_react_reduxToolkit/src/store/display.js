import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from 'react'

export const getData= createAsyncThunk("displayData",async()=>{
  const response= fetch("https://api.github.com/users")
  const result= response.json()
  return result
})

export const displaySlice =createSlice({
  name:"displayData",
  initialState:{
    array:[],
    loading:false,
    error:false,
  },
  reducers:{
  },
  extraReducers:{
    
  }

})
// export const {storeItem} =displaySlice.actions;
export default displaySlice.reducer;
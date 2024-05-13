import { createSlice } from "@reduxjs/toolkit";
export const controlerSlice = createSlice({
  name: "controler",
  initialState:{ value: 0},
  reducers: {
    increment: (state, action) => {
      state.value+=1;
      console.log(state.value)
      

    },
    decrement: (state, action) => {
      console.log(state, action);
    },
  },
});
export const { increment, decrement } = controlerSlice.actions;
export default controlerSlice.reducer;

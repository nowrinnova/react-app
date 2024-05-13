import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
export const controlerSlice = createSlice({
  name: "controler",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(state, action);
    },
    decrement: (state, action) => {
      console.log(state, action);
    },
  },
});
export const { increment, decrement } = controlerSlice.actions;
export default controlerSlice.reducer;

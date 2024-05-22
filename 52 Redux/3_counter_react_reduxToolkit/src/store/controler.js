import { createSlice } from "@reduxjs/toolkit";
export const controlerSlice = createSlice({
  name: "controler",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    add5: (state) => {
      state.value += 5;
    },
    add:(state,action)=>{
      state.value+=Number(action.payload.num)
  
    },
    sub:(state,action)=>{
      state.value=state.value-Number(action.payload.num)
    }

  },
});
export const { increment, decrement,add5,add ,sub } = controlerSlice.actions;
export default controlerSlice.reducer;

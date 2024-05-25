import { configureStore } from "@reduxjs/toolkit";
import { displaySlice } from "./display";
export const store = configureStore({
  reducer: 
  { storeData: displaySlice.reducer },
});

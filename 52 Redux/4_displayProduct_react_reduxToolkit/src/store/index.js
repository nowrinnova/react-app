import { configureStore } from "@reduxjs/toolkit";
import { displaySlice } from "./display";
import { fatchSlice } from "./fatchApi";
export const store = configureStore({
  reducer: 
  { storeData: displaySlice.reducer,
    fatchData: fatchSlice.reducer
   }

});

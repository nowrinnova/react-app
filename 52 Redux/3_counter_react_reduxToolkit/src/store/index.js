import {configureStore} from "@reduxjs/toolkit"
import {controlerSlice} from "./controler"
export const store = configureStore({
  reducer:{
    counter:controlerSlice.reducer
  }
})
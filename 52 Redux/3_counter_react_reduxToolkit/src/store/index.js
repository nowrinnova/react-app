import {configureStore} from "@reduxjs/toolkit"
import {controlerSlice} from "./controler"
import { displaySlice } from "./displayData"
export const store = configureStore({
  reducer:{
    counter:controlerSlice.reducer,
     displayData: displaySlice.reducer,
  }
})
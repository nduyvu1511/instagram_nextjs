import { combineReducers } from "@reduxjs/toolkit"
import authSlice from "./auth/authSlice"
import modalSlice from "./modal/modalSlice"
import userSlice from "./user/userSlice"

const rootReducer = combineReducers({
  user: userSlice,
  auth: authSlice,
  modal: modalSlice,
})

export default rootReducer

export * from "./auth/authSlice"
export * from "./user/userSlice"

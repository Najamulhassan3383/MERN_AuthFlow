import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slices/AuthSlice"
const Store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
  devTools: true,
});

export default Store;

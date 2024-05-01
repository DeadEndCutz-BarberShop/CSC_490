import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userslice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

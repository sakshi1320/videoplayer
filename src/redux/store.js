import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slicer/slicer";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
export default store;

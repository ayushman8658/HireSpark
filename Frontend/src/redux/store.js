import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice"; // Import the authSlice reducer
const store = configureStore({
  reducer: {
    // Add your reducers here
    // Example: user: userReducer,
    auth: authReducer, // Use the authSlice reducer
  },
});
export default store;

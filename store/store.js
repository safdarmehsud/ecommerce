import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice"; // Import your slice

export const store = configureStore({
  reducer: {
    products: productSlice, // Reducer for product management
  },
});

export default store;

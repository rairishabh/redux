import { configureStore } from "@reduxjs/toolkit";
import productSilce from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

export default configureStore({
  reducer: {
    productReducer: productSilce,
    cartReducer: cartSlice,
  },
});

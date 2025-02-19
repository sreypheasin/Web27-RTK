import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import cartSlice from "../features/cart/cartSlice";
import productSlice from "../features/product/productSlice";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    counterR: counterSlice,
    cartR: cartSlice,
    productR: productSlice,
    authR: authSlice
  }
});

export default store;

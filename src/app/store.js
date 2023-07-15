import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../featuers/products/productsSlice";
import cartSlice from "../featuers/cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});

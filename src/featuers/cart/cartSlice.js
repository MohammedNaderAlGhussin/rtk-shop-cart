import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  product: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const foundProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (foundProduct) {
        foundProduct.quantity += 1;
      } else {
        const productClone = {
          ...action.payload,
          quantity: 1,
        };
        state.cart.push(productClone);
      }
    },
    deleteFromCart: (state, action) => {
      const newArr = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      state.cart = newArr;
    },
    viewProduct: (state, action) => {
      state.product = action.payload;
    },
    clear: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, deleteFromCart, viewProduct, clear } =
  cartSlice.actions;
export default cartSlice.reducer;

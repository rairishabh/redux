import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      console.log(state.cart);
      if (cartItem) {
        cartItem.quantity += 1;
        return;
      }
      state.cart.push({
        quantity: 1,
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
        image: action.payload.images[0],
      });
    },
    removeFromCart: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      if (cartItem) {
        cartItem.quantity -= 1;
        if (cartItem.quantity == 0) {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
      console.log("state>>>", state.cart);
    },
    removeAll: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      if (cartItem) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;

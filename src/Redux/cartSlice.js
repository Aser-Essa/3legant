import { createSlice } from "@reduxjs/toolkit";

const savedCartItems = JSON.parse(localStorage?.getItem("cart")) || [];

const initialState = {
  cart: savedCartItems,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const isInCart = state.cart
        .map((el) => el.id)
        ?.includes(action.payload.id);
      if (isInCart) {
        let index;
        state.cart.forEach((el, idx) => {
          if (el.id === action.payload.id) {
            index = idx;
          }
        });
        state.cart[index].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, action) {
      const quantityMoreThanOne = action.payload.quantity > 1;
      if (quantityMoreThanOne) {
        let index;
        state.cart.forEach((el, idx) => {
          if (el.id === action.payload.id) {
            index = idx;
          }
        });
        state.cart[index].quantity -= 1;
      } else {
        state.cart = state.cart.filter((el) => el.id !== action.payload.id);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteItemFromCart(state, action) {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart(state) {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeFromCart, deleteItemFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

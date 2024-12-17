import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import orderSlice from "./orderSlice";
import wishlistSlice from "./wishlistSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    order: orderSlice,
    wishlist: wishlistSlice,
  },
});

export default store;

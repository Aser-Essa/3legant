import { createSlice } from "@reduxjs/toolkit";

const savedWishlistItems = JSON.parse(localStorage?.getItem("wishlist")) || [];

const initialState = {
  wishlist: savedWishlistItems,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const isInWishlist = state.wishlist
        .map((el) => el.id)
        ?.includes(action.payload.id);
      if (isInWishlist) {
        let index;
        state.wishlist.forEach((el, idx) => {
          if (el.id === action.payload.id) {
            index = idx;
          }
        });
        state.wishlist[index].quantity += 1;
      } else {
        state.wishlist.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeFromWishlist(state, action) {
      const quantityMoreThanOne = action.payload.quantity > 1;
      if (quantityMoreThanOne) {
        let index;
        state.wishlist.forEach((el, idx) => {
          if (el.id === action.payload.id) {
            index = idx;
          }
        });
        state.wishlist[index].quantity -= 1;
      } else {
        state.wishlist = state.wishlist.filter(
          (el) => el.id !== action.payload.id,
        );
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    deleteItemFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter((el) => el.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    clearWishlist(state) {
      state.wishlist = [];
      localStorage.removeItem("wishlist");
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  deleteItemFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const savedOrderItems = JSON.parse(localStorage?.getItem("order")) || [];

const initialState = {
  order: savedOrderItems,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder(state, action) {
      state.order.push(action.payload);
      localStorage.setItem("order", JSON.stringify(state.order));
    },
  },
});

export const { addToOrder } = orderSlice.actions;

export default orderSlice.reducer;

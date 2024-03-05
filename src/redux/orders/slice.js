import { createSlice } from '@reduxjs/toolkit';
import { addOrder } from './operations';

const handlePending = state => {
  state.orders.isLoading = true;
};
const handleRejected = (state, action) => {
  state.orders.isLoading = false;
  state.orders.error = action.payload;
};
const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: {
      items: [],
      allOrders: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: {
    [addOrder.pending]: handlePending,
    [addOrder.rejected]: handleRejected,
    [addOrder.fulfilled](state, action) {
      state.orders.isLoading = false;
      state.orders.error = null;
      state.orders.items.push(action.payload);
    },
  },
});

export const ordersReducer = ordersSlice.reducer;

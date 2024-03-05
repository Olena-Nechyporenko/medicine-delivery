import { createSlice } from '@reduxjs/toolkit';
import { addOrder } from './operations';

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
  extraReducers: builder => {
    builder
      .addCase(addOrder.pending, state => {
        state.orders.isLoading = true;
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.orders.isLoading = false;
        state.orders.error = action.payload;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.orders.isLoading = false;
        state.orders.error = null;
        state.orders.items.push(action.payload);
      });
  },
});

export const ordersReducer = ordersSlice.reducer;

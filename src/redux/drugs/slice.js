import { createSlice } from '@reduxjs/toolkit';
import { fetchDrugs, fetchShops } from 'redux/drugs/operations';

const handlePending = state => {
  state.drugs.isLoading = true;
};
const handleRejected = (state, action) => {
  state.drugs.isLoading = false;
  state.drugs.error = action.payload;
};
const drugsSlice = createSlice({
  name: 'drugs',
  initialState: {
    drugs: {
      shops: [],
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: {
    [fetchShops.pending]: handlePending,
    [fetchShops.rejected]: handleRejected,
    [fetchShops.fulfilled](state, action) {
      state.drugs.isLoading = false;
      state.drugs.error = null;
      state.drugs.shops = action.payload;
    },
    [fetchDrugs.pending]: handlePending,
    [fetchDrugs.rejected]: handleRejected,
    [fetchDrugs.fulfilled](state, action) {
      state.drugs.isLoading = false;
      state.drugs.error = null;
      state.drugs.items = action.payload;
    },
  },
});

export const drugsReducer = drugsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchDrugs, fetchShops } from 'redux/drugs/operations';

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

  extraReducers: builder => {
    builder
      .addCase(fetchShops.pending, state => {
        state.drugs.isLoading = true;
      })
      .addCase(fetchShops.rejected, (state, action) => {
        state.drugs.isLoading = false;
        state.drugs.error = action.payload;
      })
      .addCase(fetchShops.fulfilled, (state, action) => {
        state.drugs.isLoading = false;
        state.drugs.error = null;
        state.drugs.shops = action.payload;
      })
      .addCase(fetchDrugs.pending, state => {
        state.drugs.isLoading = true;
      })
      .addCase(fetchDrugs.rejected, (state, action) => {
        state.drugs.isLoading = false;
        state.drugs.error = action.payload;
      })
      .addCase(fetchDrugs.fulfilled, (state, action) => {
        state.drugs.isLoading = false;
        state.drugs.error = null;
        state.drugs.items = action.payload;
      });
  },
});

export const drugsReducer = drugsSlice.reducer;

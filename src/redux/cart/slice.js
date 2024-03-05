import { createSlice } from '@reduxjs/toolkit';
import { fetchOneDrugById } from './operations';

const handlePending = state => {
  state.cart.isLoading = true;
};
const handleRejected = (state, action) => {
  state.cart.isLoading = false;
  state.cart.error = action.payload;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: {
      inCart: [],
      isLoading: false,
      error: null,
    },
  },

  reducers: {
    removeFromCart(state, action) {
      const updateCart = state.cart.inCart.filter(
        drug => drug._id !== action.payload
      );
      state.cart.inCart = updateCart;
    },
    changeQuantity(state, action) {
      state.cart.inCart = state.cart.inCart.map(drug => {
        if (drug._id === action.payload.id) {
          return { ...drug, quantity: action.payload.quantity };
        }
        return drug;
      });
    },
  },
  extraReducers: {
    [fetchOneDrugById.pending]: handlePending,
    [fetchOneDrugById.rejected]: handleRejected,
    [fetchOneDrugById.fulfilled](state, action) {
      state.cart.isLoading = false;
      state.cart.error = null;
      action.payload.quantity = 1;
      state.cart.inCart.push(action.payload);
    },
  },
});

export const { removeFromCart, changeQuantity } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

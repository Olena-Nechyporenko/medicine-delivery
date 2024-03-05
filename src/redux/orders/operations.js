import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL =
  'https://medicine-delivery-backend-x5xv.onrender.com/api/orders';

export const addOrder = createAsyncThunk(
  'orders/addOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      const order = await axios.post(`${BASE_URL}`, orderData);

      return order.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

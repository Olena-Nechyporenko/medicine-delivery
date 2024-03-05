import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://medicine-delivery-backend-x5xv.onrender.com/api';

export const fetchShops = createAsyncThunk(
  'drugs/fetchShops',
  async (_, { rejectWithValue }) => {
    try {
      const shops = await axios.get(`${BASE_URL}/shops`);
      return shops.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchDrugs = createAsyncThunk(
  'drugs/fetchDrugs',
  async (shopId, { rejectWithValue }) => {
    try {
      const drugs = await axios.get(`${BASE_URL}/drugs/${shopId}`);
      return drugs.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

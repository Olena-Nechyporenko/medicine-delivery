import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL =
  'https://medicine-delivery-backend-x5xv.onrender.com/api/drugs';

export const fetchOneDrugById = createAsyncThunk(
  'drugs/fetchOneDrugById',
  async (id, { rejectWithValue }) => {
    try {
      const drug = await axios.get(`${BASE_URL}/searchById/${id}`);
      return drug.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apikey = 'd2e23b8b453a3c91403469a1b257f436';
const companiesURL = `https://financialmodelingprep.com/api/v3/stock/list?apikey=${apikey}`;

export const fetchCompanies = createAsyncThunk(
  'companies/fetch',
  async () => {
    const res = await axios.get(companiesURL);
    return res.data;
  }
);

const initialState = {
  companies: [],
  query: '',
  queryResults: [],
  isLoading: false,
};

const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.isLoading = false;
      const companyData = action.payload;
      state.companies = companyData;
    });
  },
});

export const companyActions = companySlice.actions;

export default companySlice;

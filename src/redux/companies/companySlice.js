import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apikey = 'd2e23b8b453a3c91403469a1b257f436';
const companiesURL = `http://localhost:5000/worth/list`;
// const companiesURL = `http://localhost:5000/worth/list`;
// const companiesURL = `https://financialmodelingprep.com/api/v3/stock/list?apikey=${apikey}`;

// https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=d2e23b8b453a3c91403469a1b257f436
// https://financialmodelingprep.com/api/v3/dowjones_constituent?apikey=d2e23b8b453a3c91403469a1b257f436

export const fetchCompanies = createAsyncThunk(
  'companies/fetch',
  async () => {
    const res = await axios.get(companiesURL);
    return res.data;
  }
);

const initialState = {
  companies: [],
  queryResults: [],
  isLoading: false,
};

const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    filterData: (state, action) => {
      const query = action.payload.toLowerCase();
      const filteredData = state.companies.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.symbol.toLowerCase().includes(query)
      );
      state.queryResults = filteredData;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.isLoading = false;
      const companyData = action.payload;
      state.companies = companyData;
      state.queryResults = companyData;
    });
  },
});

export const companyActions = companySlice.actions;

export default companySlice;

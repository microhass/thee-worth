import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apikey = 'd2e23b8b453a3c91403469a1b257f436';
const companiesURL1 = `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${apikey}`;
const companiesURL2 = `https://financialmodelingprep.com/api/v3/dowjones_constituent?apikey=${apikey}`;

export const fetchCompanies = createAsyncThunk(
  'companies/fetch',
  async () => {
    const companyList1 = await axios.get(companiesURL1);
    const companyList2 = await axios.get(companiesURL2);

    const fullList = companyList1.data.concat(companyList2.data);
    return fullList;
  },
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
      const query = action.payload.query.toLowerCase();
      const filteredData = state.companies.filter(
        (item) => item.name.toLowerCase().includes(query)
          || item.symbol.toLowerCase().includes(query),
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

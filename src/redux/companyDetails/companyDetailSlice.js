import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apikey = 'd2e23b8b453a3c91403469a1b257f436';
// const companiesURL = `http://localhost:5000/worth/list`;
// const companiesURL = `https://financialmodelingprep.com/api/v3/stock/list?apikey=${apikey}`;

// https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=d2e23b8b453a3c91403469a1b257f436
// https://financialmodelingprep.com/api/v3/dowjones_constituent?apikey=d2e23b8b453a3c91403469a1b257f436
const companyURL = 'http://localhost:5000/worth/stock';
const companyURL2 = 'http://localhost:5000/worth/profile';

export const fetchCompanyDetails = createAsyncThunk(
  'companyDetails/fetch',
  async ({ companyCode }) => {
    const details1 = await axios.get(companyURL);
    const details2 = await axios.get(companyURL2);

    return [].concat(details2.data, details1.data);
  }
);

const initialState = {
  companyDetails: {},
  isLoading: false,
};

const companyDetailSlice = createSlice({
  name: 'companyDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompanyDetails.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      fetchCompanyDetails.fulfilled,
      (state, action) => {
        state.isLoading = false;
        const companyDetails = action.payload;
        const [d1, d2] = companyDetails
        state.companyDetails = { ...d1, ...d2 };
      }
    );
  },
});

export const companyDetailActions = companyDetailSlice.actions;

export default companyDetailSlice;

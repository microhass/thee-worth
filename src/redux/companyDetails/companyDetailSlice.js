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
  isError: false,
};

const companyDetailSlice = createSlice({
  name: 'companyDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompanyDetails.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCompanyDetails.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(
      fetchCompanyDetails.fulfilled,
      (state, action) => {
        state.isLoading = false;
        let companyDetails = action.payload;
        const [d1, d2] = companyDetails;
        companyDetails = { ...d1, ...d2 };
        const {
          image,
          website,
          name,
          address,
          country,
          phone,
          ceo,
          description,
          exchange,
          fullTimeEmployees,
          marketCap,
          price,
          previousClose,
          open,
          dayLow,
          dayHigh,
          yearLow,
          yearHigh,
        } = companyDetails;
        state.companyDetails = {
          image,
          website,
          name,
          address,
          country,
          phone,
          ceo,
          description,
          details: [
            { key: 'Exchange', value: exchange },
            { key: 'Market Capital', value: marketCap },
            { key: 'Full Time Employees', value: fullTimeEmployees },
            { key: 'Current Price', value: price },
            { key: 'Previous Close', value: previousClose },
            { key: 'Today Open', value: open },
            { key: 'Day Low', value: dayLow },
            { key: 'Day High', value: dayHigh },
            { key: 'Year Low', value: yearLow },
            { key: 'Year High', value: yearHigh },
          ],
        };
      }
    );
  },
});

export const companyDetailActions = companyDetailSlice.actions;

export default companyDetailSlice;

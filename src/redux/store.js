import { configureStore } from '@reduxjs/toolkit';

import companySlice from './companies/companySlice';
import companyDetailSlice from './companyDetails/companyDetailSlice';

const rootReducer = {
  companies: companySlice.reducer,
  companyDetail: companyDetailSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { configureStore } from '@reduxjs/toolkit';

import companySlice from './companies/companySlice';

const rootReducer = {
  companies: companySlice.reducer
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

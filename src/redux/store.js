import { configureStore } from '@reduxjs/toolkit';

import rocketSlice from './rockets/rocketSlice';
import missionSlice from './missions/missionSlice';

const rootReducer = {
  rockets: rocketSlice.reducer,
  missions: missionSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

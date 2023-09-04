import { configureStore } from '@reduxjs/toolkit';
import { countriesSlice } from './countries/countriesSlice';
import infoReducer from './airPollution/airPollutionSlice';

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    info: infoReducer,
  },
});

export default store;

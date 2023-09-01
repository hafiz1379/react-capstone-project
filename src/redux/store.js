import { configureStore } from '@reduxjs/toolkit';
import { countriesSlice } from './countries/countriesSlice';
import infoReducer from './airPolution/airPolutionSlice';

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    info: infoReducer,
  },
});

export default store;

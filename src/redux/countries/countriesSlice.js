/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://restcountries.com/v3.1/';

export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  try {
    const response = await fetch(`${API_URL}all?fields=name,region,latlng,population,cca2`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        const countries = action.payload.map((country) => {
          const {
            name, region, latlng, population, cca2,
          } = country;
          return {
            name, region, latlng, population, cca2,
          };
        });
        state.countries = countries;
        state.status = 'success';
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export const { getAllCountries, getCountry } = countriesSlice.actions;

export { countriesSlice };

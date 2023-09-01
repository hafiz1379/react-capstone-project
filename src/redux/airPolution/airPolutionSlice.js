/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_INFO = 'info/getInfo';

export const getInfo = createAsyncThunk(GET_INFO, async (coor) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coor[0]}&lon=${coor[1]}&appid=c5c5b1e034cc1845e2689459ea55a745`);
  const result = await response.json();
  return result.list[0].components;
});

const airPolutionSlice = createSlice({
  name: 'info',
  initialState: {
    co: 0,
    nh3: 0,
    no: 0,
    no2: 0,
    o3: 0,
    pm2_5: 0,
    pm10: 0,
    so2: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInfo.fulfilled, (state, action) => action.payload);
  },
});

export default airPolutionSlice.reducer;

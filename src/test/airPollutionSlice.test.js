import { configureStore } from '@reduxjs/toolkit';
import airPollutionReducer, { getInfo } from '../redux/airPollution/airPollutionSlice';

describe('Air Pollution Slice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        airPollution: airPollutionReducer,
      },
    });
  });

  it('should have initial state', () => {
    const initialState = {
      co: 0,
      nh3: 0,
      no: 0,
      no2: 0,
      o3: 0,
      pm2_5: 0,
      pm10: 0,
      so2: 0,
    };

    const state = store.getState().airPollution;

    expect(state).toEqual(initialState);
  });

  it('should fetch air pollution info correctly', async () => {
    const coor = [40.0, -4.0];
    await store.dispatch(getInfo(coor));

    const state = store.getState().airPollution;

    expect(state.co).toBeGreaterThanOrEqual(0);
    expect(state.nh3).toBeGreaterThanOrEqual(0);
    expect(state.no).toBeGreaterThanOrEqual(0);
    expect(state.no2).toBeGreaterThanOrEqual(0);
    expect(state.o3).toBeGreaterThanOrEqual(0);
    expect(state.pm2_5).toBeGreaterThanOrEqual(0);
    expect(state.pm10).toBeGreaterThanOrEqual(0);
    expect(state.so2).toBeGreaterThanOrEqual(0);
  });

  it('should update state with fetched data', async () => {
    const mockData = {
      co: 1,
      nh3: 2,
      no: 3,
      no2: 4,
      o3: 5,
      pm2_5: 6,
      pm10: 7,
      so2: 8,
    };

    const coor = [40.0, -4.0];
    const response = { list: [{ components: mockData }] };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(response),
    });

    await store.dispatch(getInfo(coor));

    const state = store.getState().airPollution;

    expect(state).toEqual(mockData);
  });
});

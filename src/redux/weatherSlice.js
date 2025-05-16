import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: null,
    dailyForecast: [],
  },
  reducers: {
    setWeatherData: (state, action) => {
      state.city = action.payload.city;
      state.dailyForecast = action.payload.dailyForecast;
    },
  },
});

export const { setWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;

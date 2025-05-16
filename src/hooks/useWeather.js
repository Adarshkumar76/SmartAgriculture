import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setWeatherData } from "../redux/weatherSlice";

const useWeather = () => {
  const [Weather, setWeather] = useState(null);
  const [userCity, setUserCity] = useState("Delhi");
  const dispatch = useDispatch();

  const apiKey = "c7126ede91d23f40e265253fa70c6260";

  // Fetch 5-day forecast using city name
  const fetchWeather = async (city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );

      // Filter for one forecast per day (e.g., 12:00 PM)
      const dailyData = res.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setWeather({
        city: res.data.city,
        dailyForecast: dailyData,
      });

      dispatch(setWeatherData({
        city: res.data.city,
        dailyForecast: dailyData,
      }));

    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  const fetchCityFromCoords = async (lat, lon) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`
      );
      if (res.data && res.data.length > 0) {
        const cityName = res.data[0].name;
        setUserCity(cityName);
        fetchWeather(cityName);
      } 
    } catch (err) {
      console.error("Could not get city from coordinates.", err);
      fetchWeather(userCity); 
    }
  };

  // Auto detect user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetchCityFromCoords(position.coords.latitude, position.coords.longitude);
    }, () => {
      // If geolocation fails, fall back to default city
      fetchWeather(userCity);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useWeather;

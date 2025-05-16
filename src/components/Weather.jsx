import React from "react";
import useWeather from "../hooks/useWeather";
import { useSelector } from "react-redux";

const Weather = () => {
  useWeather();
  const weather = useSelector((state) => state.weather);
  console.log(weather);
  return (
    <>
      <div>Weather</div>
    </>
  );
};

export default Weather;

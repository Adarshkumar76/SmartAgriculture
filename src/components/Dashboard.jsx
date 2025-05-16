import React from "react";
import useWeather from "../hooks/useWeather";
import { useSelector } from "react-redux";
import Header from "./Header";

const Dashboard = () => {
  useWeather();
  const weather = useSelector((state) => state.weather);
  return (
    <>
      <Header />
      <div>
        <h1>Welcome back, Farmer!</h1>
        <p>Here's an overview of your farm's conditions today</p>

        <section className="section">
          <div className="cards">
            <div className="card">
              <h3>Temperature</h3>
              <p>
                {weather?.dailyForecast[0]?.main.temp}°C - Optimal for crop
                growth
              </p>
            </div>
            <div className="card">
              <h3>Precipitation</h3>
              <p>10% - Low chance of rain</p>
            </div>
            <div className="card">
              <h3>Soil Moisture</h3>
              <p>65% - Adequate for most crops</p>
            </div>
            <div className="card">
              <h3>Pest Risk</h3>
              <p>Medium - Consider inspecting crops</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;

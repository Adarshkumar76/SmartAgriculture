import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center p-4 text-green-800 ">
        <h2 className="text-2xl font-bold">
          <Link to="/">🌾 SmartAgriculture</Link>
        </h2>
        <div className="flex flex-row gap-4">
          <li className="list-none">
            <Link to="/dashboard">Dashboard</Link> 
          </li>
          <li className="list-none">
            <Link to="/weather">Weather</Link>
          </li>
          <li className="list-none">
            <Link to="/Crop_health">Crop Health</Link>
          </li>
          <li className="list-none">
            <Link to="/Soil_analysis">Soil Analysis</Link>
          </li>
          <li className="list-none">
            <Link to="/Ai_assistant">AI Assistant</Link>
          </li>
          <li className="list-none">
            <Link to="/Contact_us">Contact Us</Link>
          </li>
        </div>
        <button className="text-white bg-green-500 px-7 cursor-pointer py-3 rounded-lg font-bold text-lg">get started</button>
      </div>
    </>
  );
};

export default Header;

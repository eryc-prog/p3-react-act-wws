import { useState, useEffect } from "react";
import capti from "/src/assets/capti.jpg";
import React from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = `https://api.weatherapi.com/v1/current.json`;

function WeatherWidget({ isSidebarCollapsed }) {
  const [weather, SetWeather] = useState(0);
  const [location, setLocation] = useState("Loading...");
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `${BASE_URL}?key=${API_KEY}&q=${latitude},${longitude}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        SetWeather(data.current);
        setLocation(data.location.name);
        console.log("API Key fetched successfully");
      } catch (error) {
        console.error("Error fetching API Key:", error);
        alert("Failed to load API configuration.");
      }
    };

    const fetchLocationWeather = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (error) => {
            console.error(`Error getting location`, error);
            fetchWeather("auto:ip");
          }
        );
      } else {
        console.error(`Geolocation is not supported by this browser`, error);
        fetchWeather("aouto:ip");
      }
    };

    fetchLocationWeather();
  }, []);

  //For the time
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!weather) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className={`transition-all duration-300 ${
        isSidebarCollapsed ? "ml-auto" : "ml-auto"
      } bg-center text-white p-4 rounded-lg shadow-md mt-4 mx-auto`}
      style={{ backgroundImage: `url(${capti})` }}
    >
      <h3 className="text-sm md:text-lg lg:text-xl font-semibold float-right">
        Philippine Standard Time: {time}
      </h3>
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-left">
        Current Weather in {location}
      </h2>
      <p className="text-sm md:text-base lg:text-lg text-left">
        {weather.temp_c}°C | {weather.condition.text}
      </p>
      <p className="text-sm md:text-base lg:text-lg text-left">
        Humidity: {weather.humidity}% | Wind: {weather.wind_kph} km/h
      </p>
    </div>
  );
}

export default WeatherWidget;

import { useState, useEffect } from "react";
import capti from "/src/assets/capti.jpg";
import React from "react";

const API_KEY = "";

function WeatherWidget() {
  const [weather, SetWeather] = useState(0);
  const [location, setLocation] = useState("Loading...");
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const BASE_URL = "https://api.weatherapi.com/v1";

  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `${BASE_URL}/current.json?key=${API_KEY}&q=${latitude},${longitude}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch API key");
        }
        const data = await response.json();
        API_KEY = data.apiKey;
        SetWeather(data.current);
        setLocation(data.location.name);
        console.log("API Key fetched successfully");
      } catch (error) {
        console.error("Error fetching API key", error);
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

  // Function to check API configuration //TRIALL//
  function checkConfig() {
    if (API_KEY) {
      console.error("API key is not available");
      alert("Application is not properly configured.");
      return false;
    }
    return true;
  }

  // Initialize the app
  document.addEventListener("DOMContentLoaded", async () => {
    await getAPIKey(); // Fetch API key when app loads
    if (checkConfig()) {
      fetchLocationWeather();
    }
  });

  return (
    <div
      className="bg-center p-4 rounded-lg shadow-md ml-4 mr-4 text-white"
      style={{ backgroundImage: `url(${capti})` }}
    >
      <h3 className="mt-4 text-lg font-semibold float-right">
        Philippine Standard Time: {time}
      </h3>
      <h2 className="text-xl font-bold">Current Weather in {location}</h2>
      <p>
        {weather.temp_c}°C | {weather.condition.text}
      </p>
      <p>
        Humidity: {weather.humidity}% | Wind: {weather.wind_kph} km/h
      </p>
    </div>
  );
}

export default WeatherWidget;

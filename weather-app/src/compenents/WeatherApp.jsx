import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({
    city: "Delhi",
    weather: "Sunny",
    temperature: 30,
    temperatureMin: 25,
    temperatureMax: 35,
    humidity: 60,
    feelsLike: 32,
    description: "Clear sky",
    windSpeed: 5,
  });

  let updateWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <SearchBox updateWeatherData={updateWeatherData} />
      <InfoBox info={weatherData} />
    </div>
  );
}

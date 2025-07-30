import { useState } from "react";
import { motion } from "framer-motion";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

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
    <motion.div
      className="weather-app max-w-2xl mx-auto p-6 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Weather App
      </h1>
      <SearchBox updateWeatherData={updateWeatherData} />
      <InfoBox info={weatherData} />
    </motion.div>
  );
}
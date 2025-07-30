import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateWeatherData }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;

  let fetchWeatherData = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();
      if (data.cod !== 200) {
        throw new Error(data.message);
      }
      let result = {
        city: data.name,
        weather: data.weather[0].main,
        temperature: data.main.temp,
        temperatureMin: data.main.temp_min,
        temperatureMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        description: data.weather[0].description,
        windSpeed: data.wind.speed,
      };
      setError(false);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("City searched:", city);
      let newInfo = await fetchWeatherData();
      setCity("");
      updateWeatherData(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <motion.div
      className="search-box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Search the City</h2>
      <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
        <TextField
          id="city-name"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
          sx={{
            width: "100%",
            maxWidth: 300,
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            borderRadius: "8px",
            padding: "10px 20px",
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#1565c0" },
          }}
        >
          Search
        </Button>
      </form>
      {error && (
        <motion.p
          className="text-red-500 mt-4 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Error fetching data. Please check the city name or try again later.
        </motion.p>
      )}
    </motion.div>
  );
}
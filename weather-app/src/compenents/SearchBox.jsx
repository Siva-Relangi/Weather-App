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
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("City searched:", city);
      setCity("");
      let newInfo = await fetchWeatherData();
      updateWeatherData(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <div className="search-box">
        <h2>Search the city</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            id="city-name"
            label="City Name"
            variant="outlined"
            value={city}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>
        {error && (
          <p className="error-message">
            Error fetching data. Please check the city name or try again later.
          </p>
        )}
      </div>
    </>
  );
}

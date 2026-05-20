import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MainWeatherCard from "./components/MainWeatherCard";
import WeatherStats from "./components/WeatherStats";
import ForecastRow from "./components/ForecastRow";
import Placeholder from "./components/Placeholder";
import ErrorMessage from "./components/ErrorMessage";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    if (!API_KEY) {
      setError("API key missing. Add VITE_WEATHER_API_KEY to your .env file.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const [wRes, fRes] = await Promise.all([
        fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`),
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no`)
      ]);

      const wData = await wRes.json();
      const fData = await fRes.json();

      if (wData.error) throw new Error(wData.error.message);

      setWeather(wData);
      setForecast(fData);

    } catch (err) {
      setError(err.message || "Something went wrong.");
      setWeather(null);
      setForecast(null);
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <h2 className="app-title">🌤 Weather <span>App</span></h2>
      <SearchBar onSearch={fetchWeather} loading={loading} />
      {error && <ErrorMessage message={error} />}
      {loading && <p>Loading...</p>}
      {!loading && !weather && !error && <Placeholder />}
      {!loading && weather && (
        <>
          <MainWeatherCard data={weather} />
          <WeatherStats data={weather} />
          <ForecastRow forecastData={forecast} />
        </>
      )}
    </div>
  );
}

export default App;
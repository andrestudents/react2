// src/App.jsx

import { useState } from "react";
import SearchBox from "./Component/searchBox";
import WeatherCard from "./Component/WeatherCard";
import ErrorMessage from "./Component/ErrorMessage";
import Loading from "./Component/Loading";

function App() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State untuk loading
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "1ecdd891498c122198a1d0830503fc7c";

  // CALL API
  const fetchWeather = async (city) => {
    setIsLoading(true); // Set loading true sebelum fetch data
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();
      console.log(data);  // Log data API untuk cek apakah ada respons

      if (response.ok) {
        setWeatherData(data);
        setError("");  // Reset error jika berhasil
      } else {
        throw new Error("Kota tidak ditemukan");
      }
    } catch (error) {
      console.error(error.message);
      setWeatherData(null);
      setError(error.message);
    } finally {
      setIsLoading(false); // Set loading false setelah data diterima
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-blue-100">
      <h1 className="text-3xl font-bold mt-8">Weather App ☀️</h1>
      <SearchBox onSearch={fetchWeather} />
      {isLoading && <Loading />} {/* Tampilkan loading jika sedang memuat */}
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherCard data={weatherData} />}

    </div>


  );
}

export default App;

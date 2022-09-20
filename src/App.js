import "./App.css";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const lat = searchData.latitude;
    const long = searchData.longitude;
    console.log(lat, long);
    const currentWeather = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const weatherForcast = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeather, weatherForcast])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ ...weatherResponse, city: searchData.label });
        setForecast({ ...forecastResponse, city: searchData.label });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(
    "weather",
    currentWeather,

    "forecast",
    forecast
  );
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />

      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;

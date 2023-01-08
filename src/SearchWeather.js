import React, { useState } from "react";
import Weather from "./Weather";
import "./Weather.css";
import axios from "axios";

export default function SearchWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
      setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        date: new Date(response.data.dt * 1000),
        icon: response.data.weather[0].icon,
        city: response.data.name,
        description: response.data.weather[0].description,
      });
  } 
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "1a6432c5ca7b6f9b0bee45c98d54ea71";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
 
  if (weatherData.ready) {
    return (
      <div className = "search-form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="search"
                  className="search-control"
                  placeholder="Choose your location"
                  id="enterCity"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
            </div>
            <div className="col-md-4 offset-2">
              <input type="submit" className="btn btn-primary" value="search" />
              <input
                type="button"
                className="btn btn-transparent"
                value="Current"
              />
            </div>
          </div>
        </form>
        <Weather data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

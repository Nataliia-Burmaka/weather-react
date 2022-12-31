import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherComponents = {
    city: "Jyvaskyla",
    day: "Sunday",
    time: "12:30",
    temperature: -4,
    description: "Cloudy",
    imgUrl: "http://openweathermap.org/img/wn/04n@2x.png",
    humidity: 80,
    wind: 5,
  };
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-8">
          <div className="main d-flex">
            <img
              src={weatherComponents.imgUrl}
              alt={weatherComponents.description}
              className="cloud"
            />
            <h1>{weatherComponents.temperature}</h1>
            <span>
              <a href="/">℃</a> | <a href="/">℉</a>
            </span>
          </div>
          <div className="humidity">
            Humidity: {weatherComponents.humidity} %
          </div>
          <div className="wind">
            <span role="img" aria-label="wind">
              💨
            </span>
            Wind: {weatherComponents.wind} km/h
          </div>
        </div>
        <div className="col-4">
          <div className="currentCity">
            <h1> {weatherComponents.city} </h1>
          </div>
          <div className="dayTime">
            {weatherComponents.day}, {weatherComponents.time}
          </div>
          <div className="weatherCondition">
            {weatherComponents.description}
          </div>
        </div>
      </div>
      <div>
        <p className="myGit">
          <a href="https://github.com/Nataliia-Burmaka/weather-react">
            {" "}
            Open-source code,
          </a>
          by Nataliia Burmaka{" "}
        </p>
      </div>
    </div>
  );
}

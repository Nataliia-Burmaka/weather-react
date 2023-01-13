import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="WeatherInfo-container">
      <div className="row">
        <div className="col-md-8">
          <div className="d-flex">
            <div className="Cloud">
              <WeatherIcon code={props.data.icon} size={50} />
            </div>
            <h1>
              <WeatherTemperature celsius={props.data.temperature} />
            </h1>
          </div>
          <div className="Humidity">Humidity: {props.data.humidity} %</div>
          <div className="Wind">
            <span role="img" aria-label="wind">
              💨
            </span>
            Wind: {Math.round(props.data.wind)} km/h
          </div>
        </div>
        <div className="col-md-4">
          <div className="CurrentCity">
            <h1> {props.data.city} </h1>
          </div>
          <div className="DayTime">
            <FormattedDate data={props.data.date} />
          </div>
          <div className="WeatherCondition text-capitalize">
            {props.data.description}
          </div>
        </div>
      </div>
    </div>
  );
}

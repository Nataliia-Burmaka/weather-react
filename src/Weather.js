import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8">
          <div className="main d-flex">
            <div className="cloud">
            <WeatherIcon 
            code = {props.data.icon} 
             />
            </div>

               <h1>{Math.round(props.data.temperature)}</h1>
            <span>
              <a href="/">℃</a> | <a href="/">℉</a>
            </span>
          </div>
          <div className="humidity">Humidity: {props.data.humidity} %</div>
          <div className="wind">
            <span role="img" aria-label="wind">
              💨
            </span>
            Wind: {Math.round(props.data.wind)} km/h
          </div>
        </div>
        <div className="col-4">
          <div className="currentCity">
            <h1> {props.data.city} </h1>
          </div>
          <div className="dayTime">
            <FormattedDate data={props.data.date} />
          </div>
          <div className="weatherCondition text-capitalize">
            {props.data.description}
          </div>
        </div>
      </div>
    </div>
  );
}

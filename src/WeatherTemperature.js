import React, { useState } from "react";

export default function WeatherTempetature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |
          <a href="/" onClick={convertFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
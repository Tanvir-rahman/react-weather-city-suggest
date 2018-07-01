import React from 'react'

const ForecastWeather = (props) => (
  <div className="forecast-weather">
    <img src={props.selectedWeather.day.condition.icon} alt="Weather Icon" className="current-icon" />
    <p className="temperature">
      Temperature: {props.selectedWeather.day.avgtemp_c}
      <span className="degree">C</span>
    </p>
    <p className="wind-speed">
      Wind Speed: {props.selectedWeather.day.maxwind_kph}(kph)
    </p>
    <p>Condition: {props.selectedWeather.day.condition.text}</p>
    <p>Sunrise: {props.selectedWeather.astro.sunrise}</p>
    <p>Sunset: {props.selectedWeather.astro.sunset}</p>
  </div>
);

export default ForecastWeather;
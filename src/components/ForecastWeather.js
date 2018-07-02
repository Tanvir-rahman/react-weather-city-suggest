import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ForecastWeather = (props) => (
  <div className="forecast-weather">
    <div className="img-container">
      <img src={props.selectedWeather.day.condition.icon} alt="Weather Icon" className="current-icon" />
    </div>
    <p>
      <FontAwesomeIcon icon="thermometer-half" className="f-icon"/>
      <span className="subtitle"> Temperature: </span> {props.selectedWeather.day.avgtemp_c}
      <span className="degree">C</span>
    </p>
    <p>
      <FontAwesomeIcon icon="angle-double-right" className="f-icon"/>
      <span className="subtitle"> Wind Speed: </span> {props.selectedWeather.day.maxwind_kph}(kph)
    </p>
    <p>
      <FontAwesomeIcon icon="question-circle" className="f-icon"/>
      <span className="subtitle"> Condition: </span> {props.selectedWeather.day.condition.text}
    </p>
    <p>
      <FontAwesomeIcon icon="sun" className="f-icon"/>
      <span className="subtitle"> Sunrise: </span> {props.selectedWeather.astro.sunrise}
    </p>
    <p>
      <FontAwesomeIcon icon="moon" className="f-icon"/>
      <span className="subtitle"> Sunset: </span>{props.selectedWeather.astro.sunset}
    </p>
  </div>
);

export default ForecastWeather;
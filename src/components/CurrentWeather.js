import React, { Fragment } from 'react';

const Information = (props) => (
  <div className="information">
    <div className="temp-details">
      <p className="temperature">
        Current: {props.temperature}
        <span className="degree">C</span>
      </p>
      <img src={props.icon} alt="Weather Icon" className="current-icon" />
    </div>
    <div className="country-details">
      {props.city},{props.country}
    </div>
  </div>
);


const CurrentWeather = (props) => (
  <Fragment>
    {
      props.city ?
        <Information
          city={props.city}
          country={props.country}
          temperature={props.temperature}
          icon={props.icon} /> : null
    }
  </Fragment>
);

export default CurrentWeather;
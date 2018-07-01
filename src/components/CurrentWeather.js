import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const Information = (props) => (
  <div>
    Current: {props.temperature}
    <img src={props.icon} alt="Weather Icon"/>
    {props.city},{props.country}
  </div>
);


const CurrentWeather = (props) => (
  <Fragment>
    <Typography variant="display1" gutterBottom>
      {
        props.city ? 
        <Information 
        city={props.city} 
        country={props.country}
        temperature={props.temperature}
        icon={props.icon}/> : null
      }
    </Typography>
  </Fragment>
);

export default CurrentWeather;
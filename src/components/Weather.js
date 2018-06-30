import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';


const Weather = (props) => (
  <Fragment>
    <Typography variant="display1" gutterBottom>
      {props.lat ? `Lat: ${props.lat} Lon: ${props.lon}` : 'Enter a city name'}
    </Typography>
  </Fragment>
);

export default Weather;
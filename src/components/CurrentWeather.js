import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';


const CurrentWeather = (props) => (
  <Fragment>
    <Typography variant="display1" gutterBottom>
      {props.lat ? `Lat: ${props.lat} Lon: ${props.lon}` : null}
    </Typography>
  </Fragment>
);

export default CurrentWeather;
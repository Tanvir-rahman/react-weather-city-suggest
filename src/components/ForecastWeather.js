import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography';

const ForecastWeather = (props) => (
  <Typography variant="display1" gutterBottom>
    {props.selectedWeather.day.condition.text}
  </Typography>
);

export default ForecastWeather;
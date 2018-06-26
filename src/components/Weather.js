import React, {Fragment} from 'react';

const Weather = (props) => (
  <Fragment>
     Lat: {props.lat}
     Lon: {props.lon}
  </Fragment>
);

export default Weather;
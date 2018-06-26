import React from 'react';

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city"/>
    <button type="submit"> Submit </button>
  </form>
);

export default Form;
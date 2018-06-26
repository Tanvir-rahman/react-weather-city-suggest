import React, { Component, Fragment } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const API_KEY = "b270a2418d4a4352ba854154182606";

class App extends Component {
  state = {
    lat: undefined,
    long: undefined
  };

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    const api_call = await fetch (`http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`);
    const data = await api_call.json();

    console.log(data);

    if(data.location.name) {
      this.setState({
        lat: data.location.lat,
        lon: data.location.lon
      })
    }
  };

  render() {
    return (
      <Fragment>
        <Form getWeather = {this.getWeather}/>
        <Weather 
          lat = {this.state.lat}
          lon = {this.state.lon}
        />
      </Fragment>
    );
  }
}

export default App;

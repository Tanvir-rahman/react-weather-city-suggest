import React, { Component, Fragment } from 'react';
import Calendar from 'react-calendar';
import CssBaseline from '@material-ui/core/CssBaseline';


import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const API_KEY = "b270a2418d4a4352ba854154182606";


class App extends Component {
  state = {
    lat: undefined,
    long: undefined,
    date: new Date()
  };

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    const api_call = await fetch(`http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`);
    const data = await api_call.json();

    //console.log(data);

    if (data.location.name) {
      this.setState({
        lat: data.location.lat,
        lon: data.location.lon
      })
    }
  };

  onClickDay = async (day) => {
    // Setting state to current date
    this.setState({ day });

    // Formatting
    day =
      day.getFullYear() + "-" +
      ('0' + (day.getMonth() + 1)).slice(-2) + "-" +
      ('0' + day.getDate()).slice(-2);

    // API call to get weather
    const api_call = await fetch(`http://api.apixu.com/v1/forecast.json?key=b270a2418d4a4352ba854154182606&&q=dhaka&days=${7}`);
    const data = await api_call.json();

    const filteredData = data.forecast.forecastday.filter(matchDate => {
      return matchDate.date === day;
    });
    console.log(filteredData);
  };

  render() {

    // console.log(this.state.date);

    return (
      <Fragment>
        <CssBaseline />
        <Form getWeather={this.getWeather} />
        <Weather
          lat={this.state.lat}
          lon={this.state.lon}
        />
        <Calendar
          onClickDay={this.onClickDay}
          value={this.state.date}
          maxDate={new Date(new Date().getTime() + (144 * 60 * 60 * 1000))}
          minDate={new Date()}
        />
      </Fragment>
    );
  }
}

export default App;

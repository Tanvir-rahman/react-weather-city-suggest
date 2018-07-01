import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Form from './components/Form';
import Calendar from './components/Calendar';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather';
import './App.css';

const API_KEY = "b270a2418d4a4352ba854154182606";


class App extends Component {
  state = {
    lat: undefined,
    long: undefined,
    city: undefined,
    date: new Date(),
    day: undefined,
    selectedWeather: undefined
  };

  getWeather = async e => {
    // Getting city value
    e.preventDefault();
    const city = e.target.elements.city.value;

    // API call to get current weather
    try {
      const api_call = await fetch(`http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`);
      const data = await api_call.json();

      // Setting city,lat and lon
      if (!data.error) {
        this.setState({
          lat: data.location.lat,
          lon: data.location.lon,
          city: city
        })
      }
      else {
        throw 'myException';
      }

    } catch (error) {
      this.setState({
        lat: undefined,
        long: undefined,
        city: undefined
      });

      console.log(error);
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

    try {
      // API call to get forecast weather
      const api_call = await fetch(`http://api.apixu.com/v1/forecast.json?key=b270a2418d4a4352ba854154182606&&q=${this.state.city}&days=${7}`);
      const data = await api_call.json();

      const filteredData = data.forecast.forecastday.filter(matchDate => {
        return matchDate.date === day;
      });

      this.setState({
        selectedWeather: filteredData[0]
      });
      console.log(filteredData[0]);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Form getWeather={this.getWeather} />
        <CurrentWeather
          lat={this.state.lat}
          lon={this.state.lon}
        />
        {this.state.city && <Calendar onClickDay={this.onClickDay} date={this.state.date} />}
        {this.state.city && this.state.selectedWeather && <ForecastWeather selectedWeather={this.state.selectedWeather} />}
      </Fragment>
    );
  }
}

export default App;

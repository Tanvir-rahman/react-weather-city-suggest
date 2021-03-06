// Library
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThermometerHalf,faAngleDoubleRight,faSun,faMoon,faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

// Cusstom Components
import Form from './components/Form';
import Calendar from './components/Calendar';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather';
import './styles/styles.css';

// API key setup and library adding
const API_KEY = "b270a2418d4a4352ba854154182606";
library.add(faThermometerHalf,faAngleDoubleRight,faSun,faMoon,faQuestionCircle);

class App extends Component {
  state = {
    date: new Date(),
  };

  // For Fetching current weather
  getWeather = async e => {
    // Getting city value
    e.preventDefault();
    const city = e.target.elements.city.value;

    // API call to get current weather
    try {
      const api_call = await fetch(`https://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`);
      const data = await api_call.json();

      // Setting city,lat and lon
      if (!data.error) {
        this.setState({
          city: city,
          country: data.location.country,
          temperature: data.current.temp_c,
          icon: data.current.condition.icon
        })
      }
      else {
        throw 'myException';
      }

    } catch (error) {
      this.setState({
        city: undefined
      });
    }

  };

  // For Fetching forecast weather
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
      const api_call = await fetch(`https://api.apixu.com/v1/forecast.json?key=b270a2418d4a4352ba854154182606&&q=${this.state.city}&days=${8}`);
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
      <div className="app">
        <CssBaseline />
        <Card className='card'>
          <CardContent>
            <Form getWeather={this.getWeather} />

            {/* Grid to show information */}
            <Grid container spacing={24}>

              {/* Current Weather */}
              <Grid item xs={12} sm={8}>
                <CurrentWeather
                  city={this.state.city}
                  country={this.state.country}
                  temperature={this.state.temperature}
                  icon={this.state.icon}
                />
                {this.state.city && <Calendar onClickDay={this.onClickDay} date={this.state.date} />}
              </Grid>

              {/* Forecast Weather */}
              <Grid item xs={12} sm={4} className="forecast-container">
                {this.state.city && this.state.selectedWeather && <ForecastWeather selectedWeather={this.state.selectedWeather} />}

                {this.state.city && !this.state.selectedWeather && <p>Select a date to see Forecast weather</p>}
              </Grid>

            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;

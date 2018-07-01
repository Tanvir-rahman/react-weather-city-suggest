import React, { Component } from 'react'
import ReactCalendar from 'react-calendar';


class Calendar extends Component {
  render() {
    return (
      <ReactCalendar
        onClickDay={this.props.onClickDay}
        value={this.props.date}
        maxDate={new Date(new Date().getTime() + (144 * 60 * 60 * 1000))}
        minDate={new Date()}
        className="calendar"
      />
    );
  }
};

export default Calendar;
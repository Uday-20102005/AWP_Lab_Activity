import React, { Component } from 'react';

class DateDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <div>
        <h2>Current Date: {this.state.date.toLocaleDateString()}</h2>
      </div>
    );
  }
}

export default DateDisplay;

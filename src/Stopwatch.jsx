import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      interval: 0
    };
  }

  startStopWatch(event) {
    event.preventDefault();
    document.getElementById('fcStopwatch').value = '';
    document.getElementById('btnStopwatch').disabled = true;
    setTimeout(() => (document.getElementById('btnStopwatch').disabled = false), 1000 * this.state.seconds);
    this.setState({
      interval: window.setInterval(() => this.countdown(this.state.seconds), 1000)
    });
  }

  countdown(seconds) {
    if (seconds > 0) {
      seconds--;
      this.setState({ seconds });
      console.log('this.state.seconds', this.state.seconds);
    } else {
      console.log('All done');
      clearInterval(this.state.interval);
    }
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  handleChange(event) {
    event.preventDefault();
    if (this.isNumeric(event.target.value)) this.setState({ seconds: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="App-title">
          Stopwatch: <span className="Stopwatch-number">{this.state.seconds}</span> seconds
        </div>
        <Form onSubmit={event => this.startStopWatch(event)} inline>
          <FormControl
            id="fcStopwatch"
            className="Deadline-input"
            placeholder="Enter timer"
            onChange={event => this.handleChange(event)}
          />
          <Button id="btnStopwatch" onClick={event => this.startStopWatch(event)}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default StopWatch;

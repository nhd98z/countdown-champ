import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      interval: 0
    };
  }

  startStopwatch(event) {
    event.preventDefault();
    document.getElementById('fcStopwatch').value = '';
    document.getElementById('btnStart').disabled = true;
    document.getElementById('fcStopwatch').disabled = true;
    this.setState({
      interval: window.setInterval(() => this.countdown(this.state.seconds), 1000)
    });
  }

  stopStopwatch() {
    this.setState({ seconds: 0 });
    clearInterval(this.state.interval);
    document.getElementById('btnStart').disabled = false;
    document.getElementById('fcStopwatch').disabled = false;
    console.log('All done!');
    window.alert('All done!');
  }

  countdown(seconds) {
    if (seconds > 0) {
      seconds--;
      this.setState({ seconds });
      console.log('this.state.seconds', this.state.seconds);
    } else {
      this.stopStopwatch();
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
        <Form id="formStopwatch" onSubmit={event => this.startStopwatch(event)} inline>
          <FormControl
            type="number"
            id="fcStopwatch"
            className="Deadline-input"
            placeholder="Enter timer"
            onChange={event => this.handleChange(event)}
          />
          <Button id="btnStart" onClick={event => this.startStopwatch(event)}>
            Start
          </Button>
          <Button id="btnStop" onClick={event => this.stopStopwatch(event)}>
            Stop
          </Button>
        </Form>
      </div>
    );
  }
}
export default Stopwatch;

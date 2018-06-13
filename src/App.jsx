import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import StopWatch from './Stopwatch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    };
  }

  changeDeadline(event) {
    event.preventDefault();
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <div>
          <Clock deadline={this.state.deadline} />
          <Form onSubmit={event => this.changeDeadline(event)} inline>
            <FormControl
              className="Deadline-input"              
              onChange={event => this.setState({ newDeadline: event.target.value })}
              placeholder="Enter date"
            />
            <Button onClick={event => this.changeDeadline(event)}>Submit</Button>
          </Form>
        </div>
        <hr />
        <StopWatch />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    };
  }

  changeDeadline() {
    console.log('state', this.state);
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <div>
          <Clock deadline={this.state.deadline} />
          <Form inline>
            <FormControl
              className="Deadline-input"
              placeholder="new date"
              // @ts-ignore
              onChange={event => this.setState({ newDeadline: event.target.value })}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  // @ts-ignore
                  console.log('pressed enter with value', event.target.value);
                  this.changeDeadline();
                }
              }}
            />
            <Button onClick={() => this.changeDeadline()}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;

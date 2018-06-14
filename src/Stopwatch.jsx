import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeleft: 0,
      newTimeleft: 0,
      interval: 0
    };
  }

  setElementsWhenRunning() {
    document.getElementById('fcStopwatch').value = '';
    document.getElementById('btnStart').disabled = true;
    document.getElementById('fcStopwatch').disabled = true;
  }

  initElements() {
    this.setState({ timeleft: 0 });
    clearInterval(this.state.interval);
    document.getElementById('btnStart').disabled = false;
    document.getElementById('fcStopwatch').disabled = false;
  }

  startStopwatch(event) {
    event.preventDefault();
    this.setElementsWhenRunning();
    this.setState({
      timeleft: this.state.newTimeleft,
      interval: window.setInterval(() => this.countdown(this.state.timeleft), 1000)
    });
  }

  stopStopwatch(isClickBtnStop) {
    this.initElements();
    if (!isClickBtnStop) {
      console.log('All done!');
      window.alert('All done!');
    }
  }

  countdown(timeleft) {
    if (timeleft > 0) {
      timeleft--;
      this.setState({ timeleft });
      console.log('this.state.timeleft', this.state.timeleft);
    } else {
      this.stopStopwatch(false);
    }
  }

  render() {
    return (
      <div>
        <div className="App-title">
          Stopwatch: <span className="Stopwatch-number">{this.state.timeleft}</span> timeleft
        </div>
        <Form id="formStopwatch" onSubmit={event => this.startStopwatch(event)} inline>
          <FormControl
            type="number"
            id="fcStopwatch"
            className="Deadline-input"
            placeholder="Enter timer"
            onChange={event => this.setState({ newTimeleft: event.target.value })}
          />
          <Button id="btnStart" onClick={event => this.startStopwatch(event)}>
            Start
          </Button>
          <Button id="btnStop" onClick={event => this.stopStopwatch(true)}>
            Stop
          </Button>
        </Form>
      </div>
    );
  }
}
export default Stopwatch;

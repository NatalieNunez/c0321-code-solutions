import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      count: 0
    };
    this.handleTimer = this.handleTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleTimer() {
    if (!this.state.running) {
      this.timerId = setInterval(() => {
        this.setState({
          running: true,
          count: this.state.count + 1
        });
      }, 1000);
    } else {
      clearInterval(this.timerId);
      this.setState({
        running: false,
        count: this.state.count
      });
    }
  }

  reset() {
    if (!this.state.running) {
      clearInterval(this.timerId);
      this.setState({ count: 0 });
    }
  }

  render() {
    const isRunning = this.state.running;
    if (isRunning) {
      return (
        <>
          <div className='watch-face' onClick={this.reset}>
            <h2>{this.state.count}</h2>
          </div>
          <i className='fas fa-pause' onClick={this.handleTimer}></i>
        </>
      );
    } else {
      return (
        <>
          <div className='watch-face' onClick={this.reset}>
            <h2>{this.state.count}</h2>
          </div>
          <i className='fas fa-play' onClick={this.handleTimer}></i>
        </>
      );
    }
  }

}

export default StopWatch;

import React, { Component } from 'react';

class Timer extends Component {
  state = {
    count: 0,
    counting: false,
  };

  componentDidMount() {
    const count = Number(localStorage.getItem('timer'));
    this.setState({ count: count ? count : 0 });
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  onClickStartStop = () => {
    if (this.state.counting) {
      clearInterval(this.timerId);
      localStorage.setItem('timer', this.state.count);
      this.setState({ counting: false });
    } else {
      this.timerId = setInterval(() => {
        this.setState((prev) => ({ count: prev.count + 1, counting: true }));
      }, 1000);
    }
  };

  onClickReset = () => {
    clearInterval(this.timerId);
    this.setState({ count: 0, counting: false });
    localStorage.setItem('timer', 0);
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickStartStop}>
          {this.state.counting ? 'Stop' : 'Start'}
        </button>
        <button onClick={this.onClickReset}>Reset</button>
      </>
    );
  }
}

export default Timer;

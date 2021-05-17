import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: 'pause' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.id === 'watch-face' && this.state.mode === 'pause') {
      this.setState({ mode: 'reset' });
    } else if (this.state.mode === 'play') {
      this.setState({ mode: 'pause' });
    } else if (this.state.mode === 'pause') {
      this.setState({ mode: 'play' });
    }
  }

  render() {
    return (
      <>
        <div id='watch-face' onClick={this.handleClick}>
          <div></div>
        </div>
        <span></span>
      </>
    );
  }

}

export default StopWatch;

import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOn: true };
  }

  handleClick() {
    if (this.state.isOn === true) {
      this.setState({ isOn: false });
    } else {
      this.setState({ isOn: true });
    }
  }

  render() {
    const isOn = this.state.isOn;
    if (isOn) {
      return (
        <div className={ 'background green' } onClick={ this.handleClick }>
          <div className={ 'switch on' }></div>
          <span>ON</span>
        </div>
      );
    } else {
      return (
        <div className={ 'background' } onClick={ this.handleClick }>
          <div className={ 'switch off' }></div>
          <span>OFF</span>
        </div>
      );
    }
  }
}

export default ToggleSwitch;

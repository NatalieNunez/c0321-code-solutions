import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: 0 };
  }

  handleClick() {
    this.setState({ isClicked: this.state.isClicked + 1 });
  }

  render() {
    const isClicked = this.state.isClicked;
    if (isClicked < 4) {
      return (
        <button className={ 'cold button cool-text' } onClick={this.handleClick}>Hot Button</button>
      );
    } else if (isClicked >= 4 && isClicked < 7) {
      return (
        <button className={ 'cool button cool-text' } onClick={this.handleClick}>Hot Button</button>
      );
    } else if (isClicked >= 7 && isClicked < 10) {
      return (
        <button className={ 'tepid button cool-text' } onClick={this.handleClick}>Hot Button</button>
      );
    } else if (isClicked >= 10 && isClicked < 13) {
      return (
        <button className={ 'warm button hot-text' } onClick={this.handleClick}>Hot Button</button>
      );
    } else if (isClicked >= 13 && isClicked < 16) {
      return (
        <button className={ 'hot button hot-text' } onClick={this.handleClick}>Hot Button</button>
      );
    } else {
      return (
        <button className={ 'nuclear button hot-text' } onClick={this.handleClick}>Hot Button</button>
      );
    }
  }
}

export default HotButton;

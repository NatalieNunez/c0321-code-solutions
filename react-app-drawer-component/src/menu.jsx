import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    const isClicked = this.state.isClicked;
    if (isClicked) {
      return (
        <div></div>
      );
    }
  }

}

export default Menu;

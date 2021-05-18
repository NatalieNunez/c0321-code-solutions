import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: true
    });
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

export default AppDrawer;
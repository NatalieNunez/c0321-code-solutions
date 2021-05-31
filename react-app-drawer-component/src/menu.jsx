import React from 'react';
import AppDrawer from './app-drawer';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (event.target.className === 'menu-title') {
      return;
    }
    this.setState({
      menuOpen: false
    });
  }

  render() {
    const menuOpen = this.state.menuOpen;
    if (menuOpen) {
      return (
        <div className="menu-open" onClick={this.handleClick}>
          <div className="menu-box">
            <span className="menu-title">Menu</span>
            <a onClick={this.handleClick}>About</a>
            <a onClick={this.handleClick}>Get Started</a>
            <a onClick={this.handleClick}>Sign In</a>
          </div>
        </div>
      );
    } else {
      return (
        <AppDrawer />
      );
    }
  }

}

export default Menu;

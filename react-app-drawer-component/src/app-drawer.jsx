import React from 'react';
import Menu from './menu';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      menuOpen: true
    });
  }

  render() {
    const menuOpen = this.state.menuOpen;
    if (menuOpen) {
      return (
        <Menu />
      );
    } else {
      return (
        <div>
          <i className="fas fa-bars menu-icon" onClick={this.handleClick}></i>
        </div>
      );
    }
  }

}

export default AppDrawer;

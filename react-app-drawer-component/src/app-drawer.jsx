import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.isMenuOpen();
  }

  render() {
    return (
      <div>
        <i className="fas fa-bars menu-icon" onClick={this.handleClick}></i>
      </div>
    );
  }
}

export default AppDrawer;

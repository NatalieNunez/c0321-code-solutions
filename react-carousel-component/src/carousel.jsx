import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    // this.arrowClicks = this.arrowClicks.bind(this);
  }

  render() {
    return (
      <>
        <div>
          <i className="fas fa-chevron-left left-arrow"></i>
          <img src="https://img.pokemondb.net/sprites/black-white/anim/shiny/zapdos.gif"/>
          <i className="fas fa-chevron-right right-arrow"></i>
        </div>
        <div></div>
      </>
    );
  }

}

export default Carousel;

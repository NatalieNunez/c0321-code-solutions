import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.arrowClicks = this.arrowClicks.bind(this);
  }

  arrowClicks(event) {
    const index = this.state.index;
    if (event.target.id === 'right') {
      if (index === this.props.images.length - 1) {
        this.setState({
          index: 0
        });
      } else {
        this.setState({
          index: index + 1
        });
      }
    }

    if (event.target.id === 'left') {
      if (index === 0) {
        this.setState({
          index: this.props.images.length - 1
        });
      } else {
        this.setState({
          index: index - 1
        });
      }
    }
  }

  render() {
    return (
      <>
        <div className="carousel">
          <i className="fas fa-chevron-left" id="left" onClick={this.arrowClicks}></i>
          <div className="image">
            <img src={this.props.images[this.state.index]} alt="pokemon-image" className="pokemon-image" />
          </div>
          <i className="fas fa-chevron-right" id="right" onClick={this.arrowClicks}></i>
        </div>
        <div></div>
      </>
    );
  }

}

export default Carousel;

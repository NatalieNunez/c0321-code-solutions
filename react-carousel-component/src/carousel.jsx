import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.arrowClicks = this.arrowClicks.bind(this);
    this.renderProgressDots = this.renderProgressDots.bind(this);
    this.clickDots = this.clickDots.bind(this);
    this.updateCarousel = this.updateCarousel.bind(this);
  }

  componentDidMount() {
    this.updateCarousel();
  }

  updateCarousel() {
    this.interval = setInterval(() => {
      if (this.state.index === this.props.images.length - 1) {
        this.setState({
          index: 0
        });
      } else {
        this.setState({
          index: this.state.index + 1
        });
      }
    }, 3000);
  }

  arrowClicks(event) {
    clearInterval(this.interval);
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
    this.updateCarousel();
  }

  clickDots(event) {
    clearInterval(this.interval);
    this.setState({
      index: Number(event.target.id)
    });
    this.updateCarousel();
  }

  renderProgressDots() {
    const dots = this.props.images.map((image, i) => {
      if (this.state.index === i) {
        return <i key={i} id={i} className="fas fa-circle progress-dot"></i>;
      } else {
        return <i key={i} id={i} className="far fa-circle progress-dot"></i>;
      }
    });
    return dots;
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
        <div className="progress-dots-div" onClick={this.clickDots}>{this.renderProgressDots()}</div>
      </>
    );
  }

}

export default Carousel;

import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedTopic: null
    };
    this.getAllTopics = this.getAllTopics.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getAllTopics(topics) {
    const allTopics = topics.map(singleTopic => {
      let expanded = '';
      if (this.state.expandedTopic === singleTopic.id) {
        expanded = 'true';
      } else {
        expanded = 'false';
      }
      return (
        <div key={singleTopic.id} onClick={this.handleClick} className="container">
          <div>
            <p className="title" id={singleTopic.id}>{singleTopic.title}</p>
          </div>
          <div className={`details ${expanded}`}>
            <span>{singleTopic.details}</span>
          </div>
        </div>
      );
    });
    return allTopics;
  }

  handleClick(event) {
    if (event.target.id === this.state.expandedTopic) {
      this.setState({
        expandedTopic: null
      });
    } else {
      this.setState({
        expandedTopic: event.target.id
      });
    }
  }

  render(props) {
    return (
      <div className="container">
        {this.getAllTopics(this.props.topics)}
      </div>
    );
  }

}

export default Accordion;

import React from 'react';

function Topic(props) {
  const title = props.topic.title;
  const details = props.topic.details;
  return (
    <>
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="details">
        <span>{details}</span>
      </div>
    </>
  );
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleTopic: false
    };
  }

  render() {
    return (
      this.props.topics.map(topic => {
        return <Topic key={topic.title} topic={topic} />;
      })
    );
  }
}

export default Accordion;

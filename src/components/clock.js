import React from 'react';

class Clock extends React.Component {
  render() {
        return (
        <div className="test">
            <h1>Hello, world!</h1>
            <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

export default Clock;
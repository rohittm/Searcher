import React from 'react';

class Clock extends React.Component {
  render() {
        return (
        <div className="test">
            <p>It is {this.props.date.toLocaleTimeString()}.</p>
        </div>
        );
    }
}

export default Clock;
import React from 'react';
import Clock from './clock'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Clock date={new Date()} />
                <p>This is a footer</p>
            </div>
        );
    }
}

export default Footer;
import React from 'react';
import logo from '../assets/img/logo.png'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={logo} alt="My Logo" className="logo"/>           
            </div>
        );
    }
}

export default Header;
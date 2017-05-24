import React from 'react';
import Header from './header';
import Footer from './footer';
import Searchbox from './searchbox';
import Clock from './clock'

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Searchbox />
                <Clock date={new Date()}>
                </Clock>
                <Footer />
            </div>
        );
    }
}

export default Main;
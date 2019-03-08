import React, { Component } from 'react';
import Weather from './Weather'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Weather name = 'Will'/>

            </div>
        );
    }
}

export default Home;
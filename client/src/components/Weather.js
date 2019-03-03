import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Weather extends Component {
    render() {
        return (
            <div>
                
                <Link to='/'>Home</Link>
                <form>
                <input type="text" name="name"/>
                <input type="submit" value="Submit"/>
                </form>
            </div>

          
        );
    }
}

export default Weather;
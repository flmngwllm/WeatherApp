import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';




class NavBar extends Component {
    render(){
        return(
            <div>
                <Link to="/weather">Weather</Link>
                <Link to="/">Home</Link>
            </div>
        );
    }
}


export default NavBar;
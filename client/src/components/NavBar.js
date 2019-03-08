import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class NavBar extends Component {
    render(){
        return(
            <div>
                <Link to="/Weather">Weather</Link>
                <Link to="/">Home</Link>
            </div>
        )
    }
}


export default NavBar;
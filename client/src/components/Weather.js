import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

class Weather extends Component {
   
    state ={
          
    }

    handleSubmit(){
        
    }
   
    render() {


        return (
            <div>
                <Link to='/'>Home</Link>
                <p>{this.props.name}</p>

                <form onSubmit={this.handleSubmit}>
                <input type="text" name="name"/>
                <input type="submit" value="Submit"/>
                </form>

            </div>

          
        );
    }
}

export default Weather;
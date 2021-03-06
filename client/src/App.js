import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Weather from './components/Weather';
import Home from './components/Home';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Router>
          <Switch>
            <Route exact path="/weather" component={Weather} />
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

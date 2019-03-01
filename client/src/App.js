import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello</p>
        <Router>
          <Switch>
            <Route exact path="/weather" component={} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

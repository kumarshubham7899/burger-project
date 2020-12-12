import React, { Component } from 'react';
import './App.css';
import HomePage from './views/HomePage';
import About from './views/About';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store/store';

import Home from './views/Home';
class Apps extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;

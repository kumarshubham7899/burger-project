import React, { Component } from 'react';
import './App.css';
import HomePage from './views/HomePage';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <HomePage />
        </div>
      </Provider>
    );
  }
}

export default App;

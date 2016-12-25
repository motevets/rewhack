import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './GameBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>rewhacked</h2>
        </div>
        <GameBoard/>
      </div>
    );
  }
}

export default App;

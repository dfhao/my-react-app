import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React 练习</h1>
          <p className="App-intro">
            你可以在<code>src/App.js</code>文件中修改。
          </p>
        </div>
      </div>
    );
  }
}

export default App;

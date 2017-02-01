import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>MainShayne233</h2>
        </div>
        <p className="App-intro">
          <p>blog about things I'm thinking about</p>
          <p>not necessarily what I know</p>
          <p>this is obviousily just a create-react-app</p>
          <p>more to come</p>
          <a href="https://github.com/MainShayne233/blog">possibly from you?</a>
        </p>
      </div>
    );
  }
}

export default App;

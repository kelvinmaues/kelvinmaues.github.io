import React, { Component } from 'react';
import Header from './src/components/Header';
import './style/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <p className="App-intro">
            My website in React. In development right now!
          </p>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';

import Body from './components/Body'

const Header = () => <header className="header"><h1>Word Cloud</h1></header>

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showHeader: false
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.showHeader && <Header />}
        <Body />
      </div>
    );
  }
}

export default App;

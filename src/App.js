import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar } from './components'

class App extends Component {
  constructor(props){
    super(props);

    this.menuItems = [
      { text : 'HOME', link: '/' },
      { text : 'SLIDES', link: '/slides' },
      { text : 'USERS', link: '/users' }
    ]
  }

  render() {
    return (
      <div>
        <Navbar items={ this.menuItems } />
        { this.props.children }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import { Navbar } from './components';

import { connect } from 'react-redux';

import firebase from 'firebase';

import { setLogin } from './actions'

import css from './index.css'

class App extends Component {
  constructor(props){
    super(props);

    this.menuItems = [
      { text : 'HOME', link: '/' },
      { text : 'SLIDES', link: '/slides' },
      { text : 'USERS', link: '/users' }
    ]
  }

  checkAuth(props) {
        firebase.auth().onAuthStateChanged(function(user) {
        if (!user) window.location.replace('/login');
        if(user) {
          props.dispatch(setLogin(user));
        }
        });
    }

  logout(){
    firebase.auth().signOut().then(function() {
      window.location.replace('/login')
    }, function(error) {
      // An error happened.
    });
  }

  render() {
    this.checkAuth(this.props);
    return (
      <div>
        <Navbar username={ this.props.user.email } logout={ ()=> this.logout() } items={ this.menuItems } />
        { this.props.children }
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    user : state.user,
    logged: state.logged
  };
}

export default connect(mapStateToProps) (App);


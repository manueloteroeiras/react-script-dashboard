import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router';

import css from './index.css'

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      open : false
    }
    this.menuItems = [
      { text : 'HOME', link: '/' },
      { text : 'COMUNIDADES', link: '/slides' },
      { text : 'USERS', link: '/users' }
    ]
  }


  render() {
    return (
      <div>
         <AppBar
            title="Scholas Ciudadania"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={ ()=> this.setState({ open : !this.state.open }) }
            showMenuIconButton={ true }/>
          <Drawer open={this.state.open}>
            <AppBar iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onLeftIconButtonTouchTap={ ()=> this.setState({ open : !this.state.open }) } />
            <Link to="/communities"><MenuItem>Comunidades</MenuItem></Link>
            <Link to="/users"><MenuItem>Usuarios</MenuItem></Link>
          </Drawer>
        { this.props.children }
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    user : state.user,
  };
}

export default connect(mapStateToProps) (App);


import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import css from './index.css'

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import FlatButton from 'material-ui/FlatButton';

const Menu = (props) =>{
  return <FlatButton {...this.props} label="Login" />
}

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

  handleClose(route){
    this.setState({ open: false });
    browserHistory.replace(route)
    
  }


  render() {
    console.log(this.props)
    return (
      <div>
         <AppBar
            style={{ backgroundColor: '#00a992' }}
            title="Scholas Ciudadania"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={ ()=> this.setState({ open : !this.state.open }) }
            onRightIconButtonTouchTap={ ()=> {
              localStorage.removeItem('user')
              browserHistory.replace('/')
            } }
            iconElementRight={<FlatButton label="Logout" />}
            showMenuIconButton={ true }/>
          <Drawer open={this.state.open}>
            <AppBar style={{ backgroundColor: '#00a992' }} iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onLeftIconButtonTouchTap={ ()=> this.setState({ open : !this.state.open }) } />
            <MenuItem onTouchTap={()=>this.handleClose('communities')}>Comunidades</MenuItem>
            <MenuItem onTouchTap={()=>this.handleClose('users')}>Usuarios</MenuItem>
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


import React, { Component } from 'react';

import FontAwesome from 'react-fontawesome';

import { Link } from 'react-router';

import user from '../../assets/images/user.png';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

  renderItem(item){
    return (item.link && item.text) ? 
    <Link style={ styles.item } to={ item.link }><li>{ item.text }</li></Link> : null
  }

  renderMenu() {
    let effectMenu = { ...styles.menu,
        ...(this.state.open) ? { left: 0 } : {}
    }
    return(
      <div style={ effectMenu }>
        <div style={ styles.userProfile }>
            <img src={ user } alt="user_profile" style={ styles.userImg } />
            <span style={ styles.textWhite } >username</span>
            <a style={{ ...styles.item, ...styles.btn }} >Profile</a>
        </div>
        <ul style={ styles.list }>
          { this.props.items.map((item) => this.renderItem(item)) }
        </ul>
        
            
      </div>
    )
  }

  render() {
    return (
      <div>
        <div style={ styles.navbar } >
            <FontAwesome 
                name={ (this.state.open) ? 'times' : 'bars' } 
                size="2x" 
                style={{color: '#fff' }}
                onClick={ ()=>  this.setState({ open: !this.state.open }) } />
            <FontAwesome 
                name={ 'ellipsis-v' } 
                size="2x" 
                style={{color: '#fff', position: 'absolute', right: '30px' }}
                onClick={ ()=>  this.setState({ open: !this.state.open }) } />
        </div>
        { this.renderMenu() }
      </div>
    );
  }
}

const styles = {
  navbar: {
    background: '#00897b', 
    height: '10vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20
  },
  items: {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none'
  },
  menu: {
    width: "200px",
    height: '90vh',
    backgroundColor: '#00897b',
    position: 'absolute',
    top: '10vh',
    left : '-200px',
    transition: 'left 1s',
    webkitBoxShadow: '8px 15px 47px 1px rgba(38,50,56,0.66)',
    mozBoxShadow: '8px 15px 47px 1px rgba(38,50,56,0.66)',
    boxShadow: '8px 15px 47px 1px rgba(38,50,56,0.66)'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  item: {
      margin: '15px 0',
      color: '#fff',
      textDecoration: 'none'
  },
  userProfile: {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 0',
    background : '#00695c'
  },
  userImg: {
      height: 100,
      margin: '5px 0'
  },
  btn: {
      background : '#0288d1',
      padding: '10px 20px',
      borderRadius: 10
  },
  textWhite: {
      color: '#fff',
      fontSize: '14px',
      fontStyle : 'italic'
  }
}

export default Navbar;

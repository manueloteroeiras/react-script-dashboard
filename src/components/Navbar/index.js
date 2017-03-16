import React, { Component } from 'react';

import FontAwesome from 'react-fontawesome';

import { Link } from 'react-router';

import styles from './styles';

import user from '../../assets/images/user.png';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

  renderItem(item, key){
    return (item.link && item.text) ? 
    <Link key={ key } style={ styles.item } to={ item.link }><li>{ item.text }</li></Link> : null
  }

  renderMenu() {
    let effectMenu = { ...styles.menu,
        ...(this.state.open) ? { left: 0 } : {}
    }
    return(
      <div style={ effectMenu }>
        <div style={ styles.userProfile }>
            <img src={ user } alt="user_profile" style={ styles.userImg } />
            <span style={ styles.textWhite } >{ this.props.username }</span>
            <a style={{ ...styles.item, ...styles.btn }} >Profile</a>
        </div>
        <ul style={ styles.list }>
          { this.props.items.map((item, key) => this.renderItem(item, key)) }
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
                onClick={ ()=>  this.props.logout() } />
        </div>
        { this.renderMenu() }
      </div>
    );
  }
}


export default Navbar;

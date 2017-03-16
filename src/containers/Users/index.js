import React, { Component } from 'react'

import styles from './styles';

import { connect } from 'react-redux';

import firebase from '../../utils/firebase';

import FontAwesome from 'react-fontawesome';

import { ListItem } from '../../components';

class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [
                { mail : 'manuel.oter@line64.com' },
                { mail : 'oteroeiras@line64.com' }
            ]
        }
    }
    
    componentWillMount(){
    }

    renderList(){
        const users = [];
        const ref = firebase.database().ref().child('users');
        ref.on('child_added', ((snapshot) =>{
            users.push(snapshot.toJSON())
        }));
        return users
    }

    render(){
        return(
            <div style={ styles.container }>
                <div>
                    <span style={{ fontSize: '1rem' }}>
                        Username: 
                        <input style={ styles.input } />
                    </span>
                </div>

                <div style={ styles.list } >
                    <ListItem username="Manuel" />
                    <ListItem username="Mateo" />
                    <ListItem username="Juan" />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    user : state.user,
    logged: state.logged
  };
}

export default connect(mapStateToProps) (Users);
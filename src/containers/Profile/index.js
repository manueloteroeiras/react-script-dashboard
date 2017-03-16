import React, { Component } from 'react'

import { connect } from 'react-redux';

import firebase from '../../utils/firebase';

import FontAwesome from 'react-fontawesome';

import { getLogin, setLogin } from '../../actions';

import styles from './styles';

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:  props.user.displayName,
            pass: '',
            sending : false,
            
        }
    }

    componentDidMount(){
        console.log(this.props);
    }

     changePassword(){
        let { user } = this.props;
        user.updateProfile({
            displayName: this.state.username
        }).then(function() {
        // Update successful.
        }, function(error) {
        // An error happened.
        });
    }

    renderButton(){
        return(
            <button 
                onClick={ () => this.changePassword() } 
                style={ styles.btn } >
                Change Username
            </button>
        )
    }

    render(){
        
        return(
            <div style={ styles.container }>

                {
                    (this.props.user) ? <img height="80" src={ this.props.user.photoURL } alt=""/> : null
                }

                <input 
                    value={ (this.props.user)? this.props.user.email : '' } 
                    style={ styles.input } 
                    type="email"
                    disabled
                    placeholder='Username'
                    onChange={ (e) => this.setState({  username : e.target.value }) } 
                />
                <input 
                    value={ this.state.username || this.props.user.displayName } 
                    style={ styles.input } 
                    type="text"
                    placeholder='username' 
                    onChange={ (e) => this.setState({ username : e.target.value }) } 
                />

                { this.renderButton() }

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

export default connect(mapStateToProps) (Profile);
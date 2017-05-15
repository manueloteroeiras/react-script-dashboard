import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import { auth } from '../../actions';

import styles from './styles';

class Login extends Component {
 

    constructor(props){
        super(props)
        this.state = {
            username: 'student@bitflowlabs.com',
            pass: 'demo',
            sending : false,
            login: false
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        let { me } = this.props;
       
        if(me) browserHistory.push('/users')
    }

    componentWillMount(){
    }

    login(){
        this.setState({ login: true })
        this.props.dispatch(auth(this.state.username, this.state.pass))
    }

    renderSpinner(){
        return <CircularProgress size={40} thickness={4} />
    }

    render(){ 
        return(
            <div style={ styles.container }>

               <TextField
                value={ this.state.username }
                onChange={ (e, username) => this.setState(username) }
                hintText="Hint Text"/>
                <br/>
                <TextField
                value={ this.state.pass }
                onChange={ (e, pass) => this.setState(pass) }
                hintText="Hint Text"
                type="password"/>

               {(this.state.login) ? this.renderSpinner() : <RaisedButton primary={true} onTouchTap={()=> this.login()} label="LOGIN" />}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
  return {
    me : state.me,
  };
}

export default connect(mapStateToProps) (Login);
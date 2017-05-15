import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import { auth, chengeStatus } from '../../actions/auth';

import logo from '../../assets/images/scholas-banner.png'

import styles from './styles';

class Login extends Component {


    constructor(props){
        super(props)
        this.state = {
            username: '',
            pass: '',
            sending : false,
            login: false
        }
    }

    componentWillReceiveProps(nextProps) {
        let { me } = this.props;
        if(nextProps.state.loginStatus == "LOGIN_OK"){
            localStorage.setItem("user", 'login');
            browserHistory.push('/users')
        }
    }

    componentWillMount(){
      let user = localStorage.getItem('user')
      if(user === 'login'){
        this.props.dispatch(chengeStatus())
      }
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

               <img src={ logo } style={{ heigth: 100, marginBottom: 50 }} />

               <TextField
                value={ this.state.username }
                onChange={ (e, username) => this.setState({username}) }
                hintText="Email"
                type='text'/>
                <br/>
              <TextField
                value={ this.state.pass }
                style={{ marginBottom: 20 }}
                onChange={ (e, pass) => this.setState({pass}) }
                hintText="Password"
                type="password"/>

                {(this.props.state.loginStatus == "LOGIN_INVALIDATE") ?<p>{  this.props.state.error }</p> : null}

               {(this.props.state.loginStatus == "LOGIN_FETCHING") ? this.renderSpinner() : <RaisedButton primary={true} onTouchTap={()=> this.login()} label="LOGIN" />}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
  return {
    me : state.me,
    state: state
  };
}

export default connect(mapStateToProps) (Login);

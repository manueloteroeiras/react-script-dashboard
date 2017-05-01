import React, { Component } from 'react';

import { connect } from 'react-redux';

import {browserHistory} from 'react-router';



import styles from './styles';

// Components
import { Card } from '../../components';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render(){
        return(
            <div style={ styles.container }>

            

            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    users : state.user,
    logged: state.logged
  };
}

export default connect(mapStateToProps) (Dashboard);
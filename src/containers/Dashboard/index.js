import React, { Component } from 'react';

import { connect } from 'react-redux';

import styles from './styles';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        console.log(this.props)
        return(
            <div style={ styles.container }>

                <h2>HOME</h2>

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

export default connect(mapStateToProps) (Dashboard);
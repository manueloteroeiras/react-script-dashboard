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

    handleClick(){
        browserHistory.push('/slide')
    }

    render(){
        let {slides} = this.props;
        return(
            <div style={ styles.container }>

                {
                    slides.map((slide)=> <Card action={ ()=> this.handleClick()  } text={ slide.title } hero={ slide.hero } />)
                }

            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    user : state.user,
    logged: state.logged,
    slides : state.slides
  };
}

export default connect(mapStateToProps) (Dashboard);
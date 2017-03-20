import React, { Component } from 'react';

import { connect } from 'react-redux';

import styles from './styles';

// Components
import { Card } from '../../components';

class SlideEdit extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleClick(){
        console.log('yeah')
    }

    render(){
        console.log(this.props)
        let {slides} = this.props;
        return(
            <div style={ styles.container }>

                <div style={{ flex: 1, background: '#546e7a' }}>
                
                </div>

                <div style={{ flex: 12, background: '#cecece' }}>
                
                </div>

                <div style={{ flex: 4, background: '#90a4ae', display: 'flex', justifyContent: 'center' }}>
                {
                    slides.map((slide)=>  {
                        return slide.collection.map((item) => {
                            return (
                                <Card 
                                    action={ ()=> this.handleClick()  } 
                                    text={ slide.text } 
                                    hero={ slide.source } />
                            )
                        })
                    })
                }
                </div>

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

export default connect(mapStateToProps) (SlideEdit);
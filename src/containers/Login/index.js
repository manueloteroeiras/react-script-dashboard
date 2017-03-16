import React, { Component } from 'react'

import styles from './styles';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div style={ styles.container }>

                <input style={ styles.input } placeholder='Username' />
                <input style={ styles.input } placeholder='Password' />

                <button style={ styles.btn } >Login</button>

            </div>
        )
    }
}
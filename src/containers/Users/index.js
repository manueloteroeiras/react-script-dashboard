import React, { Component } from 'react'

import styles from './styles';

import { ListItem } from '../../components';

export default class Users extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
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
                    <ListItem username={ 'manuel' } />
                    <ListItem username={ 'manuel' } />
                    <ListItem username={ 'manuel' } />
                    <ListItem username={ 'manuel' } />
                    <ListItem username={ 'manuel' } />
                    <ListItem username={ 'manuel' } />
                    <ListItem username={ 'manuel' } />
                    <ListItem username={ 'manuel' } />
                </div>
            </div>
        )
    }
}

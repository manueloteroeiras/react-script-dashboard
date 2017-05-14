import React, { Component } from 'react'

import styles from './styles';

import FontAwesome from 'react-fontawesome';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

// this.setState({ newUser : { ...this.state.newUser , ...{ password: value } } }) 

const Panel = (props) =>{
    return(
        <Drawer 
            style={{ flexDirection : 'column' }} 
            docked={false} 
            width={window.innerWidth} 
            openSecondary={true} 
            open={props.open}>

            <AppBar showMenuIconButton={ false } title={ props.title } />

            <Avatar
                style={{ position : 'absolute', top: 80, right: 25 }}
                color={blue300}
                backgroundColor={purple500}
                size={80}>A
            </Avatar>

            <div style={{ display: 'flex', flexDirection: 'column', padding: '5%' }} >
                <TextField
                    value={ props.newUser.firstName }
                    onChange={ (e, value) =>  props.onInputChange('firstName', value) }
                    floatingLabelText="Nombre"/>
                    <br/>
                <TextField
                    value={ props.newUser.lastName }
                    onChange={ (e, value) =>  props.onInputChange('lastName', value) }
                    floatingLabelText="Apellido"/><br/>
                    <TextField
                    value={ props.newUser.password }
                    onChange={ (e, value) => props.onInputChange('school', value) }
                    floatingLabelText="Colegio"
                    type={ 'text' }/>
                    <br/>
                <TextField
                    value={ props.newUser.email }
                    onChange={ (e, value) =>  props.onInputChange('email', value) }
                    floatingLabelText="Nombre"
                    type="email"/>
                    <br/>
                <TextField
                    value={ props.newUser.password }
                    onChange={ (e, value) =>  props.onInputChange('password', value) }
                    floatingLabelText="Password"
                    type={ 'text' }/>
                    <br/>
                    
                
                    { 
                        <SelectField
                            floatingLabelText="Comunidad"
                            style={{ color: '#000' }}
                            value={ props.newUser.community._id }
                            label={ props.newUser.community.name }
                            onChange={(e, key, payload)=>  props.onInputChange('community', value) }>
                                { props.communities.map((community) =>{
                                        return <MenuItem value={community._id} primaryText={ community.name } /> 
                                    })}
                        </SelectField>
                    }    

                    <SelectField
                            floatingLabelText="Rol"
                            style={{ color: '#000' }}
                            value={ this.state.newUser.role }
                            onChange={(e, key, payload)=> this.setState({ newUser :{ ...this.state.newUser, ...{ role: payload } } })}>
                                <MenuItem value={ 'user' } primaryText={ 'User' } /> 
                                <MenuItem value={ 'admin' } primaryText={ 'Admin' } /> 
                                <MenuItem value={ 'teache' } primaryText={ 'Profesor' } /> 
                        </SelectField>

                
            </div>

            <div style={{ flexDirection: 'row',position: 'absolute',bottom: 50, padding: '0 20px' }}>
                { props.buttons.map((button)=> button) }
            </div>
        </Drawer>


    )

}

export default Panel
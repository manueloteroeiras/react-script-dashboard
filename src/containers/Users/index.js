import React, { Component } from 'react'

import styles from './styles';

import { connect } from 'react-redux';

import FontAwesome from 'react-fontawesome';

import { get_users, add_user } from '../../actions/user';
import { get_communities } from '../../actions/community';
import { Card } from '../../components';

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

class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            newuserMenu: false,
            currentUser : {
                firstName: '',
                lastName: ''
            },
            newUser : {
                firstName: '',
                lastName: '',
                email: '',
                community : '',
                role: '',
                profilePicture: 'https://ibb.co/mZ8mO5'

            }
        }
    }
    
    componentWillMount(){
        this.props.dispatch(get_users())
        this.props.dispatch(get_communities())
    }

    getItem(key){
        console.log(this.props.users[key])
        this.setState({ currentUser: this.props.users[key], open: true })
    }

    renderCommunities(community){
        console.log(community)
        return(
            <SelectField
                floatingLabelText="Comunidad"
                value={community.name}
                style={{ color: '#000' }}
                onChange={(e)=> console.log(e)}>
                { this.props.communities.map((community) =>{
                    return <MenuItem value={community._id} primaryText={ community.name } /> 
                })}
            </SelectField>
        )
    }

    renderContent(){
        return(
            <div>
                <AppBar showMenuIconButton={ false } title={ `${this.state.currentUser.firstName} ${this.state.currentUser.lastName}` } />
                <Avatar size={ 80 } style={{ position : 'absolute', top: 80, right: 25 }} src={ this.state.currentUser.profilePicture } />
                <div style={{ display: 'flex', flexDirection: 'column', padding: '5%' }} >
                    <TextField
                        value={ this.state.currentUser.firstName }
                        onChange={ (e, value) => this.setState({ currentUser : { firstName: value } }) }
                        floatingLabelText="Nombre"/>
                        <br/>
                    <TextField
                        value={ this.state.currentUser.lastName }
                        onChange={ (e, value) => this.setState({ currentUser : { lastName: value } }) }
                        floatingLabelText="Apellido"/><br/>
                    <TextField
                        value={ this.state.currentUser.email }
                        onChange={ (e, value) => this.setState({ currentUser : { email: value } }) }
                        floatingLabelText="Nombre"/>
                        
                    
                        { 
                            (this.state.currentUser.community) ? this.renderCommunities(this.state.currentUser.community) : null
                        }    

                    
                </div>

                <div style={{ flexDirection: 'row',position: 'absolute',bottom: 50, padding: '0 20px' }}>
                    <RaisedButton label="GUARDAR" primary={true} style={{ marginRight: 10 }} />
                    <RaisedButton label="CANCELAR" onTouchTap={()=> this.setState({ open: false, currentUser: {} }) } secondary={true} />
                </div>

            </div>
        )
    }


    render(){
        console.log(this.props)
        return(
            <div style={ styles.container }>
                <Table onCellClick={ (event) => this.getItem(event) }>
                    <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Nombre y Apellido</TableHeaderColumn>
                        <TableHeaderColumn>email</TableHeaderColumn>
                        <TableHeaderColumn>Comunidad</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            this.props.users.map((user, key)=>{
                                return(
                                    <TableRow key={ key }>
                                        <TableRowColumn>{ key }</TableRowColumn>
                                        <TableRowColumn>{ `${user.firstName} ${user.lastName}` }</TableRowColumn>
                                        <TableRowColumn>{ user.email }</TableRowColumn>
                                        <TableRowColumn>{ user.community.name }</TableRowColumn>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>


                <Drawer style={{ flexDirection : 'column' }} docked={false} width={500} openSecondary={true} open={this.state.open} >
                    { this.renderContent() }
                </Drawer>

                <Drawer style={{ flexDirection : 'column' }} docked={false} width={500} openSecondary={true} open={this.state.newuserMenu} >
                    <AppBar showMenuIconButton={ false } title={ 'Nuevo Usuario' } />
                    <Avatar
                        style={{ position : 'absolute', top: 80, right: 25 }}
                        color={blue300}
                        backgroundColor={purple500}
                        size={80}>A
                    </Avatar>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '5%' }} >
                        <TextField
                            value={ this.state.newUser.firstName }
                            onChange={ (e, value) => this.setState({ newUser : { ...this.state.newUser , ...{ firstName: value } } }) }
                            floatingLabelText="Nombre"/>
                            <br/>
                        <TextField
                            value={ this.state.newUser.lastName }
                            onChange={ (e, value) => this.setState({ newUser : { ...this.state.newUser , ...{ lastName: value } } }) }
                            floatingLabelText="Apellido"/><br/>
                        <TextField
                            value={ this.state.newUser.email }
                            onChange={ (e, value) => this.setState({ newUser : { ...this.state.newUser , ...{ email: value } } }) }
                            floatingLabelText="Nombre"
                            type="text"/>
                            <br/>
                        <TextField
                            value={ this.state.newUser.password }
                            onChange={ (e, value) => this.setState({ newUser : { ...this.state.newUser , ...{ password: value } } }) }
                            floatingLabelText="Password"
                            type={ 'password' }/>
                            <br/>
                            
                        
                            { 
                                <SelectField
                                    floatingLabelText="Comunidad"
                                    style={{ color: '#000' }}
                                    value={ this.state.newUser.community }
                                    onChange={(e, key, payload)=> this.setState({ newUser :{ ...this.state.newUser, ...{ community: payload } } })}>
                                        { this.props.communities.map((community) =>{
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
                        <RaisedButton label="CREAR" onTouchTap={()=> this.props.dispatch(add_user(this.state.newUser))} primary={true} style={{ marginRight: 10 }} />
                        <RaisedButton label="CANCELAR" onTouchTap={()=> this.setState({ newuserMenu: false, currentUser: {} }) } secondary={true} />
                    </div>
                </Drawer>

                <FloatingActionButton onTouchTap={()=> this.setState({ newuserMenu: true }) } secondary={true} style={{ position: 'absolute', bottom: 25, right: 25 }}>
                    <ContentAdd />
                </FloatingActionButton>

            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    users : state.users,
    communities : state.communities,
  };
}

export default connect(mapStateToProps) (Users);
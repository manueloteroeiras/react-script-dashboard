import React, { Component } from 'react'
import styles from './styles';
import FileUpload from 'react-fileupload'
import FormData from 'form-data'
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { get_users, add_user, delete_user, update_user } from '../../actions/user';
import { get_communities } from '../../actions/community';
import { Card } from '../../components';

import check from '../../assets/images/check.png'

import FileInput from 'react-file-input';

import axios from 'axios'

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
import LinearProgress from 'material-ui/LinearProgress';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DropDownMenu from 'material-ui/DropDownMenu';
import FontIcon from 'material-ui/FontIcon';

import ActionHome from 'material-ui/svg-icons/action/description';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const defaultUser =  {
                firstName: '',
                lastName: '',
                email: '',
                community : '',
                role: 'user',
                profilePicture: 'https://ibb.co/mZ8mO5',
                password: 'scholas'

            }

class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            modal: false,
            actionButton: 'CREAR',
            newuserMenu: false,
            currentUser : {
                firstName: '',
                lastName: ''
            },
            newUser : defaultUser
        }

    }

    componentWillMount(){
        this.props.dispatch(get_users())
    }

    componentDidMount(){
        this.props.dispatch(get_communities())
    }

    getItem(key){
        let user = {
            ...this.props.users[key],
            ...{community: this.props.users[key].community._id }
        }
        this.setState({ newUser: user, open: true, actionButton: 'DELETE' })
    }

    renderCommunities(community){
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

    creacteUser(){
        this.props.dispatch(add_user(this.state.newUser))
        this.setState({ open: false })
    }

    updateUser(){
      this.props.dispatch(update_user(this.state.newUser))
      this.setState({ open: false })
    }

    deleteUser(){
        this.props.dispatch(delete_user(this.state.newUser))
        this.setState({ open: false })
    }

    renderSpinner(){
        return <LinearProgress style={{ height: 10 }} mode="indeterminate" />
    }

    handleChange(event){
        this.setState({file: event.target.files[0]})
    }

    importFile(){
        console.log('====================================');
        console.log(this.state);
        console.log('====================================');

        let formdata = new FormData();
        formdata.append(`file`, this.state.file)

        axios('/api/csv/'+ this.state.community , {
            method: 'POST',
            data : formdata
        }).then((response) =>{
            this.setState({ modal: false })
            this.props.dispatch(get_users())
        }).catch((err) => console.log(err))

        setTimeout(()=>{
            this.setState({ modal: false })
            this.props.dispatch(get_users())
        }, 3000)
    }

    renderModal(){
        return(
            <Drawer style={{  overflowY: 'auto',justifyContent: 'center' ,padding: '20px 50px' }} docked={false} width={(window.innerWidth > 700)? 300 : window.innerWidth } openSecondary={true} open={this.state.modal} >

                <SelectField
                    floatingLabelText="Comunidad"
                    style={{ color: '#000', width: 200, flex: 1, marginLeft: 50 }}
                    value={ this.state.community }
                    onChange={(e, key, payload)=> this.setState({ community : payload  })}>
                        { (!this.props.communities)? this.renderSpinner() :this.props.communities.map((community, key) =>{
                                return <MenuItem key={ key } value={community._id} primaryText={ community.name } />
                            })}
                </SelectField>

                <div style={{ flex: 1, marginTop: 100, paddingLeft: 50}}>
                    <RaisedButton label="file.csv"  primary={true} style={{ position: 'absolute', width: 200, height: 20 }} />
                    <FileInput name="myImage"
                        accept=".csv,.xlsx"
                        placeholder="Archivo"
                        className={{ height: 40, width: '100%', marginTop: 50, border: '1px solid gray' }}
                        onChange={(event)=>this.handleChange(event)} />
                    {
                        (!this.state.file)? null :  <p style={{ color:'#cecece' }}>{ this.state.file.name }</p>
                    }
                </div>

            <div style={{ flex: 1 }}>
                    {
                        (!this.state.file)? null :  <img src={ check } style={{ width: 100, margin: '25px 100px' }} />
                    }
                </div>
                

                <RaisedButton label="Cargar archivo" onTouchTap={()=> this.importFile()} primary={true} style={{ position: 'absolute', bottom:50, width: 200, right: 50 }} />
            </Drawer>
        )
    }


    render(){
        return(
            <div style={ styles.container }>

                { this.renderModal() }

                <Table onCellClick={ (event) => this.getItem(event) }>

                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Nombre y Apellido</TableHeaderColumn>
                            <TableHeaderColumn>email</TableHeaderColumn>
                            {
                            // <TableHeaderColumn>Comunidad</TableHeaderColumn>
                            }
                        </TableRow>
                    </TableHeader>


                    <TableBody>
                        {
                            (!this.props.users)? this.renderSpinner() : this.props.users.map((user, key)=>{
                                return(
                                    <TableRow key={ key }>
                                        <TableRowColumn>{ key }</TableRowColumn>
                                        <TableRowColumn>{ `${user.firstName} ${user.lastName}` }</TableRowColumn>
                                        <TableRowColumn>{ user.email }</TableRowColumn>
                                        {
                                        // <TableRowColumn>{ user.community.name }</TableRowColumn>
                                        }
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>


                </Table>


                <Drawer style={{ flexDirection : 'column', overflowY: 'auto' }} docked={false} width={(window.innerWidth > 700)? window.innerWidth / 2.8 : window.innerWidth } openSecondary={true} open={this.state.open} >

                    <AppBar showMenuIconButton={ false } style={{ backgroundColor: '#00a992' }} title={ ( this.state.actionButton == "CREAR")? 'Nuevo Usuario' : this.state.newUser.firstName } />

                    <div style={{ display: 'flex', flexDirection: 'column', padding: '5%' }} >
                        <TextField
                            style={{ width: '100%' }}
                            value={ this.state.newUser.firstName }
                            onChange={ (e, value) => this.setState({ newUser : { ...this.state.newUser , ...{ firstName: value } } }) }
                            floatingLabelText="Nombre"/>
                            <br/>
                        <TextField
                            style={{ width: '100%' }}
                            value={ this.state.newUser.lastName }
                            onChange={ (e, value) => this.setState({ newUser : { ...this.state.newUser , ...{ lastName: value } } }) }
                            floatingLabelText="Apellido"/><br/>
                        <TextField
                            style={{ width: '100%' }}
                            value={ this.state.newUser.email }
                            onChange={ (e, value) => this.setState({ newUser : { ...this.state.newUser , ...{ email: value } } }) }
                            floatingLabelText="Email"/>
                            <br/>
                        <TextField
                            style={{ width: '100%' }}
                            value={ this.state.newUser.password }
                            onChange={ (e, value) => this.setState({ newUser : { ...this.state.newUser , ...{ password: value } } }) }
                            floatingLabelText="Password"
                            type={ 'password' }/>
                            <br/>


                            {
                                <SelectField
                                    floatingLabelText="Comunidad"
                                    style={{ color: '#000', width: '100%' }}
                                    value={ this.state.newUser.community }
                                    onChange={(e, key, payload)=> this.setState({ newUser :{ ...this.state.newUser, ...{ community: payload } } })}>
                                        { (!this.props.communities)? this.renderSpinner() :this.props.communities.map((community, key) =>{
                                              return <MenuItem key={ key } value={community._id} primaryText={ community.name } />
                                            })}
                                </SelectField>
                            }

                            <SelectField
                                    floatingLabelText="Rol"
                                    style={{ color: '#000', width: '100%' }}
                                    value={ this.state.newUser.role }
                                    onChange={(e, key, payload)=> this.setState({ newUser : { ...this.state.newUser, ...{ role: payload } } }) }>
                                        <MenuItem value={ 'user' } primaryText={ 'User' } />
                                        <MenuItem value={ 'admin' } primaryText={ 'Admin' } />
                                        <MenuItem value={ 'teacher' } primaryText={ 'Profesor' } />
                                </SelectField>
                    </div>

                    <div style={{ flexDirection: 'row',padding: '0 20px', margin: '10px 0' }}>

                        {
                            (this.state.actionButton == 'CREAR') ?

                                    <RaisedButton label="CREAR" onTouchTap={()=> this.creacteUser()} primary={true} style={{ marginRight: 10 }} /> :

                                            <div style={{ flexDirection: 'row' }}>
                                                <RaisedButton label="GUARDAR " style={{ marginRight: 10 }} onTouchTap={()=> this.updateUser(this.state.newUser) } primary={true} />
                                                <RaisedButton label="ELIMINAR" style={{ marginRight: 10 }} onTouchTap={()=> this.deleteUser(this.state.newUser) } primary={true} />
                                            </div>

                        }

                        <RaisedButton label="CANCELAR" style={{ flex: 1, margin: '20px 0' }} onTouchTap={()=> this.setState({ open: false, currentUser: {} }) } secondary={true} />
                    </div>

                </Drawer>

                <FloatingActionButton onTouchTap={()=> this.setState({ open: true, actionButton: 'CREAR', newUser: defaultUser }) } secondary={true} style={{ position: 'fixed', bottom: 25, right: 25 }}>
                    <ContentAdd />
                </FloatingActionButton>
                
                <FloatingActionButton onTouchTap={()=> this.setState({ modal: true }) } style={{ position: 'fixed', bottom: 100, right: 25 }}>
                    <ActionHome />
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

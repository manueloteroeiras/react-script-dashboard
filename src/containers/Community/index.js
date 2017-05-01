import React, { Component } from 'react'

import styles from './styles';

import { connect } from 'react-redux';

import { get_communities, add_community } from '../../actions/community';
// import { Card } from '../../components';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import CircularProgress from 'material-ui/CircularProgress';


import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

class Community extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            newCommunity : {
                name: '',
                topic: '',
                bannerImg: ''
            }
        }
    }
    
    componentWillMount(){
        this.props.dispatch(get_communities())
    }

    createCommunity(post){
        console.log(post)
        this.props.dispatch(add_community(post))
        this.setState({ open: false })
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }


    render(){
        return(
            <div style={ styles.container }>
                
                {
                    (!this.props.communities) ?  <CircularProgress size={80} thickness={5} /> :
                    this.props.communities.map((community, key) => {
                        return (
                            <Card style={{ height: 200, width: '30%' , margin: '0 10px' }} >
                                <CardHeader
                                title={ community.name }
                                subtitle={ community.topic }
                                avatar={ community.bannerImg }/>
                                <CardMedia
                                    overlay={<CardTitle title={ community.name } />}>
                                    <img height="200" src={ community.bannerImg } />
                                </CardMedia>
                            </Card>
                        )
                    })
                }

                

                <Drawer style={{ flexDirection : 'column' }} docked={false} width={500} openSecondary={true} open={this.state.open} >
                    <AppBar showMenuIconButton={ false } title={ 'Nueva Comunidad' } />
                    <Avatar
                        style={{ position : 'absolute', top: 80, right: 25 }}
                        color={blue300}
                        backgroundColor={purple500}
                        size={80}>C
                    </Avatar>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '5%' }} >
                        <TextField
                            value={ this.state.newCommunity.name }
                            onChange={ (e, value) => this.setState({ newCommunity : { ...this.state.newCommunity , ...{ name: value } } }) }
                            floatingLabelText="Nombre"/>
                            <br/>
                        <TextField
                            value={ this.state.newCommunity.topic }
                            onChange={ (e, value) => this.setState({ newCommunity : { ...this.state.newCommunity , ...{ topic: value } } }) }
                            floatingLabelText="Topic"/>
                            <br/>
                        <TextField
                            value={ this.state.newCommunity.bannerImg }
                            onChange={ (e, value) => this.setState({ newCommunity : { ...this.state.newCommunity , ...{ bannerImg: value } } }) }
                            floatingLabelText="Image src"/>
                            <br/>
                        
                    </div>

                    <div style={{ flexDirection: 'row',position: 'absolute',bottom: 50, padding: '0 20px' }}>
                        <RaisedButton label="CREAR" onTouchTap={()=>  this.createCommunity(this.state.newCommunity) } primary={true} style={{ marginRight: 10 }} />
                        <RaisedButton label="CANCELAR" onTouchTap={()=> this.setState({ open: false, newCommunity: {} }) } secondary={true} />
                    </div>
                </Drawer>

                <FloatingActionButton onTouchTap={()=> this.setState({ open: true }) } secondary={true} style={{ position: 'absolute', bottom: 25, right: 25 }}>
                    <ContentAdd />
                </FloatingActionButton>

            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    communities : state.communities,
  };
}

export default connect(mapStateToProps) (Community);
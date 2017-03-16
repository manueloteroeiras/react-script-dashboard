import React from 'react';

import { Link } from 'react-router';

import img from '../../assets/images/user.png';

const ListItem = (props) =>{
    let { username  } = props;
    return(
        <div style={ styles.item } >
            <div style={{ flex: 6, display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                <img src={ img } height="50" alt=""/>
                <p style={ styles.username } >{ username }</p>
            </div>
            <a style={ styles.btn } ><Link style={{ color: '#fff', textDecoration: 'none' }}  to={ `/users?id=${ username }` } >View Profile</Link></a>
        </div>
    )
}

const styles = {
    username: {
        margin: '0 10px',
        fontStyle: 'italic'
    },
    item: {
        height: '70px',
        background: '#607d8b',
        borderRadius: 5,
        margin: '25px 0',
        padding: '5px 15px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        webkitBoxShadow: '0px 10px 11px -8px rgba(0,0,0,0.75)',
        mozBoxShadow: '0px 10px 11px -8px rgba(0,0,0,0.75)',
        boxShadow: '0px 10px 11px -8px rgba(0,0,0,0.75)'
    },
    btn: {
        height: 40,
        width: 150,
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#0288d1',
        fontSize: '.8rem',
        border: 'none',
        borderRadius: '10px',
    },
}

export default ListItem
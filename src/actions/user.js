import {getUsers, addUser}  from '../services/user';

import { browserHistory } from 'react-router'

export function get_users(email, password) {
  return async (dispatch, getState) => {

    dispatch({ type: 'USERS_FETCHING' });

    try { 

        await getUsers().then((resp) =>{
            dispatch({ type: 'FETCHED_USERS', payload: resp });
        }).catch((err)=>{
            dispatch({ type: 'USERS_ERROR', payload: err });    
        });


    } catch (err) {

        console.log(err);

        dispatch({ type: 'ERROR', payload: err });    

    }

  }

}

export function add_user(user) {
  return async (dispatch, getState) => {

    dispatch({ type: 'USER_CREATING' });

    try { 

        await addUser(user).then((resp) =>{
            dispatch({ type: 'USER_CREATED', payload: resp });
        }).catch((err)=>{
            dispatch({ type: 'CREATED_ERROR', payload: err });    
        });


    } catch (err) {

        console.log(err);

        dispatch({ type: 'ERROR', payload: err });    

    }

  }

}
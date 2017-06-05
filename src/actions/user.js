import {getUsers, addUser, deleteUser, updateUser}  from '../services/user';

import { browserHistory } from 'react-router'

export function get_users(email, password) {
  return async (dispatch, getState) => {

    dispatch({ type: 'USERS_FETCHING' });

    try { 

        await getUsers().then((resp) =>{
            console.log(resp)
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
            console.log(resp)
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

export function update_user(user) {
  return async (dispatch, getState) => {
    try { 

        await updateUser(user).then((resp) =>{
            console.log(resp)
            dispatch({ type: 'USER_UPDATED', payload: resp });
        }).catch((err)=>{
            dispatch({ type: 'CREATED_ERROR', payload: err });    
        });


    } catch (err) {

        console.log(err);

        dispatch({ type: 'ERROR', payload: err });    

    }

  }

}

export function delete_user(user) {
  return async (dispatch, getState) => {
    try { 

        await deleteUser(user).then((resp) =>{
            console.log(resp)
            dispatch({ type: 'USER_DELETED', payload: resp });
        }).catch((err)=>{
            dispatch({ type: 'DELETED_ERROR', payload: err });    
        });


    } catch (err) {

        console.log(err);

        dispatch({ type: 'ERROR', payload: err });    

    }

  }

}
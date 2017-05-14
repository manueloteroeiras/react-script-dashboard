import {getCommunities, addCommunities, updateCommunities, deleteCommunities}  from '../services/community';

export function add_community(community) {
  return async (dispatch, getState) => {
    try { 
        await addCommunities(community).then((resp) =>{
            console.log(resp)
            dispatch({ type: 'COMMUNITY_CREATED', payload: resp });
        }).catch((err)=>{
            dispatch({ type: 'COMMUNITY_ERROR', payload: err });    
        });


    } catch (err) {

        console.log(err);

        dispatch({ type: 'ERROR', payload: err });    

    }

  }

}

export function update_community(community) {
  return async (dispatch, getState) => {
    try { 
        await updateCommunities(community).then((resp) =>{
            console.log(resp)
            dispatch({ type: 'COMMUNITY_UPDATED', payload: resp });
        }).catch((err)=>{
            dispatch({ type: 'COMMUNITY_UPDATE_ERROR', payload: err });    
        });


    } catch (err) {

        console.log(err);

        dispatch({ type: 'ERROR', payload: err });    

    }

  }

}

export function delete_community(community) {
  return async (dispatch, getState) => {
    try { 
        await deleteCommunities(community).then((resp) =>{
            dispatch({ type: 'COMMUNITY_DELETED', payload: resp });
        }).catch((err)=>{
            dispatch({ type: 'COMMUNITY_DELETE_ERROR', payload: err });    
        });


    } catch (err) {

        console.log(err);

        dispatch({ type: 'ERROR', payload: err });    

    }

  }

}

export function get_communities(email, password) {
  return async (dispatch, getState) => {

    dispatch({ type: 'COMMUNITY_FETCHING' });

    try { 

        await getCommunities().then((resp) =>{
            dispatch({ type: 'FETCHED_COMMUNITY', payload: resp });
        }).catch((err)=>{
            dispatch({ type: 'COMMUNITY_ERROR', payload: err });    
        });


    } catch (err) {

        console.log(err);

        dispatch({ type: 'ERROR', payload: err });    

    }

  }

}
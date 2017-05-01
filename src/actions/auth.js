import { login }  from '../services/user';

export default (email, password) => {
  return async (dispatch, getState) => {

    dispatch({ type: 'LOGIN_FETCHING' });

    try {

        email = email.toLowerCase();

        await login(email, password).then((resp) =>{
            (resp != 'Invalid email or password') ? dispatch({ type: 'LOGIN', payload: resp }) : dispatch({ type: 'LOGIN_INVALIDATE', payload: 'Invalid email or password' })
        }).catch((err)=>{
            dispatch({ type: 'LOGIN_INVALIDATE', payload: err });    
        });


    } catch (err) {

        console.log(err);

        dispatch({ type: 'LOGIN_INVALIDATE', payload: err });    

    }

  }

}
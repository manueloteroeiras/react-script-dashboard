import { login }  from '../services/user';

export default (email, password) => {
  return async (dispatch, getState) => {

    dispatch({ type: 'LOGIN_FETCHING' });

    try {

        email = email.toLowerCase();

        await login(email, password).then((resp) =>{
            console.log(resp)
            if(resp && resp.role === "admin") {
                 dispatch({ type: 'LOGIN', payload: resp }) 
            }
            else{
                dispatch({ type: 'LOGIN_INVALIDATE', payload: 'Not Admin' })
            }
        }).catch((err)=>{
            console.log(err)
            dispatch({ type: 'LOGIN_INVALIDATE', payload: err });    
        });


    } catch (err) {

        console.log(err);

        dispatch({ type: 'LOGIN_INVALIDATE', payload: err });    

    }

  }

}
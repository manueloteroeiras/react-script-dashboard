import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import {user} from '../reducers'




const reducer = combineReducers({user});
const store = createStore(
  user,
  applyMiddleware(thunk)
);

store.subscribe(() =>{
    console.log("Store Changed", store.getState());
});


export default store
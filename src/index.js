import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from  'react-router';

import store from './stores';

import {
  Login,
  Dashboard,
  Slides,
  Users
} from './containers'

import App from './App';


ReactDOM.render(
  <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route exact path="/" component={ App }>
          <IndexRoute component={ Dashboard } />
          <Route path="/slides" component={ Slides } />
          <Route path="/users" component={ Users } />
        </Route>
        <Route path="/login" component={ Login } />
      </Router>
  </Provider>,
  document.getElementById('root')
);
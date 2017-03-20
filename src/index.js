import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from  'react-router';

import store from './stores';

import {
  Login,
  Dashboard,
  Slides,
  Users,
  Profile,
  SlideEdit
} from './containers'

import App from './App';


ReactDOM.render(
  <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route exact path="/" component={ App }>
          <IndexRoute component={ Dashboard } />
          <Route path="/slides" component={ Slides } />
          <Route path="/slide/:id" component={ SlideEdit } />
          <Route path="/users" component={ Users } />
          <Route path="/profile" component={ Profile } />
        </Route>
        <Route path="/login" component={ Login } />
      </Router>
  </Provider>,
  document.getElementById('root')
);
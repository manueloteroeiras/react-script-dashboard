import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Router, Route, browserHistory, IndexRoute } from  'react-router';

import {
  Login,
  Dashboard,
  Slides,
  Users
} from './containers'

import App from './App';
import './index.css';

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route exact path="/" component={ App }>
      <IndexRoute component={ Dashboard } />
      <Route path="/slides" component={ Slides } />
      <Route path="/users" component={ Users } />
    </Route>
    <Route path="/login" component={ Login } />
  </Router>),
  document.getElementById('root')
);

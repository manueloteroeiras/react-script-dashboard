import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from  'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import store from './stores';

import {
  Login,
  Dashboard,
  Users,
  Community
} from './containers'

import App from './App';


ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider>
      <Router history={ browserHistory }>
        <Route exact path="/home" component={ App }>
          <IndexRoute component={ Dashboard } />
          <Route path="/users" component={ Users } />
          <Route path="/communities" component={ Community } />
        </Route>
        <Route path="/" component={ Login } />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
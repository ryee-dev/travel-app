import React, { Component } from 'react';
import history from './history';
import { Router, Switch, Route } from 'react-router-dom';
import {
  AsyncHomePage,
  AsyncLoginPage,
  AsyncSearchPage,
  AsyncEventDetailsPage,
  AsyncRefinedSearchPage,
  AsyncSignupPage,
  AsyncInternalErrorPage,
  AsyncUserAccountPage,
  AsyncProfileEditPage,
  AsyncCreateEventPage
} from './asyncPages';
import Shell from '../pages/components/AppShell';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Shell>
          <Switch>
            <Route exact={true} path="/" component={AsyncHomePage}/>
            <Route path="/login" component={AsyncLoginPage}/>
            <Route path="/search" component={AsyncSearchPage}/>
            <Route path="/refined-search" component={AsyncRefinedSearchPage}/>
            <Route path="/event-details" component={AsyncEventDetailsPage}/>
            <Route path="/sign-up" component={AsyncSignupPage}/>
            <Route path="/error" component={AsyncInternalErrorPage}/>
            <Route path="/user-account" component={AsyncUserAccountPage}/>
            <Route path="/profile-edit" component={AsyncProfileEditPage}/>
            <Route path="/create-event" component={AsyncCreateEventPage}/>
          </Switch>
        </Shell>
      </Router>
    );
  }
}

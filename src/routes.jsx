import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './pages/home.page';
import NotFound from './pages/404notfound';
import SpacecraftListPage from './pages/scapecraft-list.page';
import ComingSoon from './pages/comingSoon';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/spacecrafts" component={SpacecraftListPage} />
        <Route exact path="/ComingSoon" component={ComingSoon} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

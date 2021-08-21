import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AstronautListPage from './pages/astronaut-list.page';
import HomePage from './pages/home.page';
import NotFound from './pages/404notfound';
import SpacecraftListPage from './pages/scapecraft-list.page';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/spacecrafts" component={SpacecraftListPage} />
        <Route exact path="/astronauts" component={AstronautListPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

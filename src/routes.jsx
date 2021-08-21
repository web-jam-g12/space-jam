import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './pages/home.page';
import SpacecraftListPage from './pages/scapecraft-list.page';
import SpecificSpacecraftPage from './pages/specific-spacecraft.page';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/spacecrafts" component={SpacecraftListPage} />
        <Route exact path="/spacecrafts/:id" component={SpecificSpacecraftPage} />
      </Switch>
    </Router>
  );
}

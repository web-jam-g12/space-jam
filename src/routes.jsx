import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AboutPage from './pages/about.page';
import AstronautListPage from './pages/astronaut-list.page';
import HomePage from './pages/home.page';
import NotFound from './pages/404notfound';
import ComingSoon from './pages/comingSoon';
import SpacecraftListPage from './pages/spacecraft-list.page';
import SpecificSpacecraftPage from './pages/specific-spacecraft.page';
import SpecificAstronautPage from './pages/specific-astronaut.page';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/spacecrafts" component={SpacecraftListPage} />
        <Route exact path="/ComingSoon" component={ComingSoon} />
        <Route exact path="/spacecrafts/:id" component={SpecificSpacecraftPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/astronauts" component={AstronautListPage} />
        <Route exact path="/astronauts/:id" component={SpecificAstronautPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Mood from './pages/Mood';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/mood" exact>
          <Mood />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;

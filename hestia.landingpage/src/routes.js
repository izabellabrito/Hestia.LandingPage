import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Landing} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

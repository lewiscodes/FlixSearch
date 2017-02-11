import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Results from './containers/results';
import Filter from './containers/filter';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={Filter} />
  </Route>
);

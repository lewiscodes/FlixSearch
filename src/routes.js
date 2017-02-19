import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Results from './containers/results';
import Filter from './containers/filter';
import FilterCertificates from './containers/filter_certificates';
import FilterGenres from './containers/filter_genres';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={FilterCertificates} />
    // <Route path="filter/certificates" component={FilterCertificates} />
    <Route path="filter/genres" component={FilterGenres} />
    <Route path="filter" component={Filter} />
    <Route path="results" component={Results} />
  </Route>
);

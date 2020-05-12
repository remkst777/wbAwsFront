/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from 'global-styles';
import * as routes from 'routes';

import HomePage from 'containers/HomePage/Loadable';
import Products from 'containers/Products/Loadable';
import Toasts from 'containers/Toasts/Loadable';
import NotFoundPage from 'components/NotFoundPage/Loadable';

export default function App() {
  return (
    <>
      <Toasts />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.products(':id')} component={Products} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <GlobalStyles />
    </>
  );
}

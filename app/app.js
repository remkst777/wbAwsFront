/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Import providers
import LanguageProvider from 'containers/LanguageProvider';
import GlobalProvider from 'containers/GlobalProvider';
import ErrorBoundary from 'components/ErrorBoundary';

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/logo.ico';
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions

import configureStore from './configureStore';

// Import AWS configuration file
import awsconfig from './awsconfig.json';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ErrorBoundary history={history}>
          <LanguageProvider>
            <GlobalProvider>
              <App />
            </GlobalProvider>
          </LanguageProvider>
        </ErrorBoundary>
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE,
  );
};

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: awsconfig.cognito.REGION,
    userPoolId: awsconfig.cognito.USER_POOL_ID,
    userPoolWebClientId: awsconfig.cognito.APP_CLIENT_ID,
  },
});

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

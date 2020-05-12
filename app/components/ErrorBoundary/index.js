import React from 'react';
import PropTypes from 'prop-types';
import * as routes from 'routes';

/* eslint-disable react/prefer-stateless-function */
export class ErrorBoundary extends React.PureComponent {
  componentDidCatch() {
    if (process.env.NODE_ENV === 'production') {
      // TODO: toast
      this.props.history.push(routes.someError);
    }
  }

  render() {
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  history: PropTypes.object,
  children: PropTypes.element,
};

export default ErrorBoundary;

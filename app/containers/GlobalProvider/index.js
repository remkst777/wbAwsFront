/**
 *
 * GlobalProvider
 *
 */

import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { getCurrentUser } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'globalProvider';

export function GlobalProvider({ children, getCurrentUserDispatch }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    getCurrentUserDispatch();
  }, []);

  return children;
}

GlobalProvider.propTypes = {
  children: PropTypes.any.isRequired,
  getCurrentUserDispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    getCurrentUserDispatch: bindActionCreators(getCurrentUser, dispatch),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(GlobalProvider);

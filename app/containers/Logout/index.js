/**
 *
 * Logout
 *
 */

import { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { DAEMON } from 'utils/constants';

import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

import { selectLogoutProcessing } from './selectors';

import reducer from './reducer';
import saga from './saga';

import { logout } from './actions';

const key = 'logout';

export function Logout({ logoutProcessing, logoutDispatch, children }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: DAEMON });

  return children({ logoutProcessing, logoutDispatch });
}

Logout.propTypes = {
  showLogoutModalDispatch: PropTypes.func.isRequired,
  hideLogoutModalDispatch: PropTypes.func.isRequired,
  logoutDispatch: PropTypes.func.isRequired,
  logoutProcessing: PropTypes.bool.isRequired,
  isVisibleModal: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  locale: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
  logoutProcessing: selectLogoutProcessing(),
});

function mapDispatchToProps(dispatch) {
  return {
    logoutDispatch: bindActionCreators(logout, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Logout);

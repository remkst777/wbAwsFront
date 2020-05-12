/**
 *
 * Login
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { DAEMON } from 'utils/constants';

import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

import ModalDialog from 'components/ModalDialog';
import Form from 'components/Login/Form';

import { showLoginModal, hideLoginModal, login } from './actions';
import { selectIsVisibleModal, selectLoginProcessing } from './selectors';

import reducer from './reducer';
import saga from './saga';

const key = 'login';

export function Login({
  isVisibleModal,
  loginProcessing,
  loginDispatch,
  showLoginModalDispatch,
  hideLoginModalDispatch,
  children,
  locale,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: DAEMON });

  return (
    <>
      <ModalDialog show={isVisibleModal} closeModal={hideLoginModalDispatch}>
        <Form onSubmit={loginDispatch} isProcessing={loginProcessing} locale={locale} />
      </ModalDialog>

      {children({ showLoginModalDispatch })}
    </>
  );
}

Login.propTypes = {
  showLoginModalDispatch: PropTypes.func.isRequired,
  hideLoginModalDispatch: PropTypes.func.isRequired,
  loginDispatch: PropTypes.func.isRequired,
  loginProcessing: PropTypes.bool.isRequired,
  isVisibleModal: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  locale: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
  isVisibleModal: selectIsVisibleModal(),
  loginProcessing: selectLoginProcessing(),
});

function mapDispatchToProps(dispatch) {
  return {
    loginDispatch: bindActionCreators(login, dispatch),
    showLoginModalDispatch: bindActionCreators(showLoginModal, dispatch),
    hideLoginModalDispatch: bindActionCreators(hideLoginModal, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Login);

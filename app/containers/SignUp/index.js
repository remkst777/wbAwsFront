/**
 *
 * SignUp
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
import { showLoginModal } from 'containers/Login/actions';

import ModalDialog from 'components/ModalDialog';
import Form from 'components/SignUp/Form';
import ThankYouBanner from 'components/SignUp/ThankYouBanner';

import { selectIsVisibleModal, selectSignUpProcessing, selectContent } from './selectors';

import { showSignUpModal, hideSignUpModal, signUp } from './actions';
import { SIGN_UP_MODAL, THANK_YOU_MODAL } from './constants';

import reducer from './reducer';
import saga from './saga';

const key = 'signUp';

export function SignUp({
  isVisibleModal,
  signUpProcessing,
  signUpDispatch,
  showLoginModalDispatch,
  showSignUpModalDispatch,
  hideSignUpModalDispatch,
  children,
  locale,
  content,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: DAEMON });

  return (
    <>
      <ModalDialog show={isVisibleModal} closeModal={hideSignUpModalDispatch}>
        {content === SIGN_UP_MODAL && (
          <Form
            onSubmit={signUpDispatch}
            isProcessing={signUpProcessing}
            locale={locale}
          />
        )}

        {content === THANK_YOU_MODAL && (
          <ThankYouBanner
            hideSignUpModal={hideSignUpModalDispatch}
            showLoginModal={showLoginModalDispatch}
          />
        )}
      </ModalDialog>

      {children({ showSignUpModalDispatch })}
    </>
  );
}

SignUp.propTypes = {
  showLoginModalDispatch: PropTypes.func.isRequired,
  showSignUpModalDispatch: PropTypes.func.isRequired,
  hideSignUpModalDispatch: PropTypes.func.isRequired,
  signUpDispatch: PropTypes.func.isRequired,
  signUpProcessing: PropTypes.bool.isRequired,
  isVisibleModal: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  locale: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
  content: selectContent(),
  isVisibleModal: selectIsVisibleModal(),
  signUpProcessing: selectSignUpProcessing(),
});

function mapDispatchToProps(dispatch) {
  return {
    signUpDispatch: bindActionCreators(signUp, dispatch),
    showLoginModalDispatch: bindActionCreators(showLoginModal, dispatch),
    showSignUpModalDispatch: bindActionCreators(showSignUpModal, dispatch),
    hideSignUpModalDispatch: bindActionCreators(hideSignUpModal, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SignUp);

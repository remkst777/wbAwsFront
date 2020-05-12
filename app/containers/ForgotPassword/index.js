/**
 *
 * ForgotPassword
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
import GetCodeForm from 'components/ForgotPassword/GetCodeForm';
import SetPasswordForm from 'components/ForgotPassword/SetPasswordForm';
import SuccessBanner from 'components/ForgotPassword/SuccessBanner';

import {
  showForgotPasswordModal,
  hideForgotPasswordModal,
  getVerificationCode,
  setNewPassword,
} from './actions';

import {
  GET_VERIFICATION_CODE_MODAL,
  SET_NEW_PASSWORD_MODAL,
  SUCCESS_BANNER,
} from './constants';

import {
  selectIsVisibleModal,
  selectGetVerificationCodeProcessing,
  selectContent,
  selectSetNewPasswordProcessing,
} from './selectors';

import reducer from './reducer';
import saga from './saga';

const key = 'forgotPassword';

export function ForgotPassword({
  isVisibleModal,
  getVerificationCodeProcessing,
  getVerificationCodeDispatch,
  showForgotPasswordModalDispatch,
  hideForgotPasswordModalDispatch,
  showLoginModalDispatch,
  setNewPasswordDispatch,
  setNewPasswordProcessing,
  children,
  locale,
  content,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: DAEMON });

  return (
    <>
      <ModalDialog show={isVisibleModal} closeModal={hideForgotPasswordModalDispatch}>
        {content === GET_VERIFICATION_CODE_MODAL && (
          <GetCodeForm
            onSubmit={getVerificationCodeDispatch}
            isProcessing={getVerificationCodeProcessing}
            locale={locale}
          />
        )}

        {content === SET_NEW_PASSWORD_MODAL && (
          <SetPasswordForm
            onSubmit={setNewPasswordDispatch}
            isProcessing={setNewPasswordProcessing}
            locale={locale}
          />
        )}

        {content === SUCCESS_BANNER && (
          <SuccessBanner
            hideForgotPasswordModal={hideForgotPasswordModalDispatch}
            showLoginModal={showLoginModalDispatch}
          />
        )}
      </ModalDialog>

      {children({ showForgotPasswordModalDispatch })}
    </>
  );
}

ForgotPassword.propTypes = {
  showForgotPasswordModalDispatch: PropTypes.func.isRequired,
  hideForgotPasswordModalDispatch: PropTypes.func.isRequired,
  getVerificationCodeDispatch: PropTypes.func.isRequired,
  getVerificationCodeProcessing: PropTypes.bool.isRequired,
  isVisibleModal: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  locale: PropTypes.string.isRequired,
  content: PropTypes.string,
  showLoginModalDispatch: PropTypes.func.isRequired,
  setNewPasswordDispatch: PropTypes.func.isRequired,
  setNewPasswordProcessing: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
  content: selectContent(),
  isVisibleModal: selectIsVisibleModal(),
  getVerificationCodeProcessing: selectGetVerificationCodeProcessing(),
  setNewPasswordProcessing: selectSetNewPasswordProcessing(),
});

function mapDispatchToProps(dispatch) {
  return {
    getVerificationCodeDispatch: bindActionCreators(getVerificationCode, dispatch),
    showLoginModalDispatch: bindActionCreators(showLoginModal, dispatch),
    setNewPasswordDispatch: bindActionCreators(setNewPassword, dispatch),
    showForgotPasswordModalDispatch: bindActionCreators(
      showForgotPasswordModal,
      dispatch,
    ),
    hideForgotPasswordModalDispatch: bindActionCreators(
      hideForgotPasswordModal,
      dispatch,
    ),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ForgotPassword);

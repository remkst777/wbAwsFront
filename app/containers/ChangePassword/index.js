/**
 *
 * ChangePassword
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
import Form from 'components/ChangePassword/Form';

import {
  showChangePasswordModal,
  hideChangePasswordModal,
  changePassword,
} from './actions';

import { selectIsVisibleModal, selectChangePasswordProcessing } from './selectors';

import reducer from './reducer';
import saga from './saga';

const key = 'changePassword';

export function ChangePassword({
  isVisibleModal,
  changePasswordDispatch,
  changePasswordProcessing,
  showChangePasswordModalDispatch,
  hideChangePasswordModalDispatch,
  children,
  locale,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: DAEMON });

  return (
    <>
      <ModalDialog show={isVisibleModal} closeModal={hideChangePasswordModalDispatch}>
        <Form
          onSubmit={changePasswordDispatch}
          isProcessing={changePasswordProcessing}
          locale={locale}
        />
      </ModalDialog>

      {children({ showChangePasswordModalDispatch })}
    </>
  );
}

ChangePassword.propTypes = {
  showChangePasswordModalDispatch: PropTypes.func.isRequired,
  hideChangePasswordModalDispatch: PropTypes.func.isRequired,
  changePasswordDispatch: PropTypes.func.isRequired,
  changePasswordProcessing: PropTypes.bool.isRequired,
  isVisibleModal: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  locale: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
  isVisibleModal: selectIsVisibleModal(),
  changePasswordProcessing: selectChangePasswordProcessing(),
});

function mapDispatchToProps(dispatch) {
  return {
    changePasswordDispatch: bindActionCreators(changePassword, dispatch),
    showChangePasswordModalDispatch: bindActionCreators(
      showChangePasswordModal,
      dispatch,
    ),
    hideChangePasswordModalDispatch: bindActionCreators(
      hideChangePasswordModal,
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
)(ChangePassword);

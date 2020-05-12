import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectForgotPasswordDomain = state => state.forgotPassword || initialState;

const selectContent = () =>
  createSelector(
    selectForgotPasswordDomain,
    x => x.content,
  );

const selectIsVisibleModal = () =>
  createSelector(
    selectForgotPasswordDomain,
    x => x.isVisibleModal,
  );

const selectEmail = () =>
  createSelector(
    selectForgotPasswordDomain,
    x => x.email,
  );

const selectGetVerificationCodeProcessing = () =>
  createSelector(
    selectForgotPasswordDomain,
    x => x.getVerificationCodeProcessing,
  );

const selectGetVerificationCodeError = () =>
  createSelector(
    selectForgotPasswordDomain,
    x => x.getVerificationCodeError,
  );

const selectSetNewPasswordProcessing = () =>
  createSelector(
    selectForgotPasswordDomain,
    x => x.setNewPasswordProcessing,
  );

const selectSetNewPasswordError = () =>
  createSelector(
    selectForgotPasswordDomain,
    x => x.setNewPasswordError,
  );

export {
  selectForgotPasswordDomain,
  selectContent,
  selectIsVisibleModal,
  selectEmail,
  selectGetVerificationCodeProcessing,
  selectGetVerificationCodeError,
  selectSetNewPasswordProcessing,
  selectSetNewPasswordError,
};

/*
 *
 * ForgotPassword actions
 *
 */

import {
  SHOW_FORGOT_PASSWORD_MODAL,
  HIDE_FORGOT_PASSWORD_MODAL,
  GET_VERIFICATION_CODE,
  GET_VERIFICATION_CODE_SUCCESS,
  GET_VERIFICATION_CODE_ERROR,
  SET_NEW_PASSWORD,
  SET_NEW_PASSWORD_SUCCESS,
  SET_NEW_PASSWORD_ERROR,
} from './constants';

// Show / Hide modal

export function showForgotPasswordModal() {
  return {
    type: SHOW_FORGOT_PASSWORD_MODAL,
  };
}

export function hideForgotPasswordModal() {
  return {
    type: HIDE_FORGOT_PASSWORD_MODAL,
  };
}

// getVerificationCode actions

export function getVerificationCode(val) {
  return {
    type: GET_VERIFICATION_CODE,
    email: val.email,
    resetForm: val.resetForm,
  };
}

export function getVerificationCodeSuccess() {
  return {
    type: GET_VERIFICATION_CODE_SUCCESS,
  };
}

export function getVerificationCodeErr(getVerificationCodeError) {
  return {
    type: GET_VERIFICATION_CODE_ERROR,
    getVerificationCodeError,
  };
}

// set new password actions

export function setNewPassword(val) {
  return {
    type: SET_NEW_PASSWORD,
    val,
  };
}

export function setNewPasswordSuccess() {
  return {
    type: SET_NEW_PASSWORD_SUCCESS,
  };
}

export function setNewPasswordErr(setNewPasswordError) {
  return {
    type: SET_NEW_PASSWORD_ERROR,
    setNewPasswordError,
  };
}

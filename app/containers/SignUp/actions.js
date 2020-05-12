/*
 *
 * SignUp actions
 *
 */

import {
  SHOW_SIGNUP_MODAL,
  HIDE_SIGNUP_MODAL,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
} from './constants';

// Show / Hide modal

export function showSignUpModal() {
  return {
    type: SHOW_SIGNUP_MODAL,
  };
}

export function hideSignUpModal() {
  return {
    type: HIDE_SIGNUP_MODAL,
  };
}

// SignUp actions

export function signUp(val) {
  return {
    type: SIGN_UP,
    val,
  };
}

export function signUpSuccess() {
  return {
    type: SIGN_UP_SUCCESS,
  };
}

export function signUpErr(signUpError) {
  return {
    type: SIGN_UP_ERROR,
    signUpError,
  };
}

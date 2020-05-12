/*
 *
 * Login actions
 *
 */

import {
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

// Show / Hide modal

export function showLoginModal() {
  return {
    type: SHOW_LOGIN_MODAL,
  };
}

export function hideLoginModal() {
  return {
    type: HIDE_LOGIN_MODAL,
  };
}

// Login actions

export function login(val) {
  return {
    type: LOGIN,
    val,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginErr(loginError) {
  return {
    type: LOGIN_ERROR,
    loginError,
  };
}

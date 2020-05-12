/*
 *
 * ChangePassword actions
 *
 */

import {
  SHOW_CHANGE_PASSWORD_MODAL,
  HIDE_CHANGE_PASSWORD_MODAL,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
} from './constants';

// Show / Hide modal

export function showChangePasswordModal() {
  return {
    type: SHOW_CHANGE_PASSWORD_MODAL,
  };
}

export function hideChangePasswordModal() {
  return {
    type: HIDE_CHANGE_PASSWORD_MODAL,
  };
}

// changePassword actions

export function changePassword(val) {
  return {
    type: CHANGE_PASSWORD,
    val,
  };
}

export function changePasswordSuccess() {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
  };
}

export function changePasswordErr(changePasswordError) {
  return {
    type: CHANGE_PASSWORD_ERROR,
    changePasswordError,
  };
}

/*
 *
 * GlobalProvider actions
 *
 */

import {
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
  CHANGE_USER_LOCALE,
  CHANGE_USER_LOCALE_SUCCESS,
  CHANGE_USER_LOCALE_ERROR,
} from './constants';

// Get current user actions

export function getCurrentUser() {
  return {
    type: GET_CURRENT_USER,
  };
}

export function getCurrentUserSuccess({ authKey, locale, email }) {
  return {
    type: GET_CURRENT_USER_SUCCESS,
    authKey,
    locale,
    email,
  };
}

export function getCurrentUserErr(getCurrentUserError) {
  return {
    type: GET_CURRENT_USER_ERROR,
    getCurrentUserError,
  };
}

// Change user locale actions

export function changeUserLocale(locale) {
  return {
    type: CHANGE_USER_LOCALE,
    locale,
  };
}

export function changeUserLocaleSuccess(locale) {
  return {
    type: CHANGE_USER_LOCALE_SUCCESS,
    locale,
  };
}

export function changeUserLocaleErr(changeUserLocaleError) {
  return {
    type: CHANGE_USER_LOCALE_ERROR,
    changeUserLocaleError,
  };
}

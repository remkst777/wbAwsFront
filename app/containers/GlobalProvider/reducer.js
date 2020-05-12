/*
 *
 * GlobalProvider reducer
 *
 */
import produce from 'immer';
import isUndefined from 'lodash/isUndefined';

import { LOGOUT_SUCCESS } from 'containers/Logout/constants';
import { CHANGE_PASSWORD_SUCCESS } from 'containers/ChangePassword/constants';

import {
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
  CHANGE_USER_LOCALE,
  CHANGE_USER_LOCALE_SUCCESS,
  CHANGE_USER_LOCALE_ERROR,
} from './constants';

export const initialState = {
  getCurrentUserProcessing: false,
  getCurrentUserError: null,
  changeUserLocaleProcessing: false,
  changeUserLocaleError: null,
  user: {
    email: null,
    locale: null,
    authKey: null,
  },
  location: null,
};

/* eslint-disable default-case, no-param-reassign */
const globalProviderReducer = (
  state = initialState,
  { type, getCurrentUserError, authKey, locale, email, changeUserLocaleError },
) =>
  produce(state, draft => {
    switch (type) {
      case GET_CURRENT_USER:
        draft.getCurrentUserProcessing = true;
        break;
      case GET_CURRENT_USER_SUCCESS:
        draft.getCurrentUserProcessing = false;
        draft.user.authKey = !isUndefined(authKey) ? authKey : state.user.authKey;
        draft.user.locale = !isUndefined(locale) ? locale : state.user.locale;
        draft.user.email = !isUndefined(email) ? email : state.user.email;
        break;
      case GET_CURRENT_USER_ERROR:
        draft.getCurrentUserProcessing = false;
        draft.getCurrentUserError = getCurrentUserError;
        break;

      case CHANGE_USER_LOCALE:
        draft.changeUserLocaleProcessing = true;
        break;
      case CHANGE_USER_LOCALE_SUCCESS:
        draft.changeUserLocaleProcessing = false;
        draft.user.locale = locale;
        break;
      case CHANGE_USER_LOCALE_ERROR:
        draft.changeUserLocaleProcessing = false;
        draft.changeUserLocaleError = changeUserLocaleError;
        break;

      case LOGOUT_SUCCESS:
      case CHANGE_PASSWORD_SUCCESS:
        draft.user = initialState.user;
        break;
    }
  });

export default globalProviderReducer;

/*
 *
 * SignUp reducer
 *
 */
import produce from 'immer';

import { CHANGE_PASSWORD_SUCCESS } from 'containers/ChangePassword/constants';

import {
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export const initialState = {
  isVisibleModal: false,
  loginProcessing: false,
  loginError: null,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, { type, loginError }) =>
  produce(state, draft => {
    switch (type) {
      case SHOW_LOGIN_MODAL:
      case CHANGE_PASSWORD_SUCCESS:
        draft.isVisibleModal = true;
        break;
      case HIDE_LOGIN_MODAL:
        draft.isVisibleModal = false;
        break;

      case LOGIN:
        draft.loginProcessing = true;
        break;
      case LOGIN_SUCCESS:
        draft.loginProcessing = false;
        draft.isVisibleModal = false;
        break;
      case LOGIN_ERROR:
        draft.loginProcessing = false;
        draft.loginError = loginError;
        break;
    }
  });

export default loginReducer;

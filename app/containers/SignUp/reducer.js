/*
 *
 * SignUp reducer
 *
 */
import produce from 'immer';

import {
  SHOW_SIGNUP_MODAL,
  HIDE_SIGNUP_MODAL,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_MODAL,
  THANK_YOU_MODAL,
} from './constants';

export const initialState = {
  content: null,
  isVisibleModal: false,
  signUpProcessing: false,
  signUpError: null,
};

/* eslint-disable default-case, no-param-reassign */
const signUpReducer = (state = initialState, { type, signUpError }) =>
  produce(state, draft => {
    switch (type) {
      case SHOW_SIGNUP_MODAL:
        draft.isVisibleModal = true;
        draft.content = SIGN_UP_MODAL;
        break;
      case HIDE_SIGNUP_MODAL:
        draft.isVisibleModal = false;
        break;

      case SIGN_UP:
        draft.signUpProcessing = true;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpProcessing = false;
        draft.content = THANK_YOU_MODAL;
        break;
      case SIGN_UP_ERROR:
        draft.signUpProcessing = false;
        draft.signUpError = signUpError;
        break;
    }
  });

export default signUpReducer;

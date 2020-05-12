/*
 *
 * SignUp reducer
 *
 */
import produce from 'immer';

import {
  SHOW_FORGOT_PASSWORD_MODAL,
  HIDE_FORGOT_PASSWORD_MODAL,
  GET_VERIFICATION_CODE,
  GET_VERIFICATION_CODE_SUCCESS,
  GET_VERIFICATION_CODE_ERROR,
  GET_VERIFICATION_CODE_MODAL,
  SET_NEW_PASSWORD_MODAL,
  SUCCESS_BANNER,
  SET_NEW_PASSWORD,
  SET_NEW_PASSWORD_SUCCESS,
  SET_NEW_PASSWORD_ERROR,
} from './constants';

export const initialState = {
  content: null,
  email: null,
  isVisibleModal: false,
  getVerificationCodeProcessing: false,
  getVerificationCodeError: null,
  setNewPasswordProcessing: false,
  setNewPasswordError: null,
};

/* eslint-disable default-case, no-param-reassign */
const forgotPasswordReducer = (
  state = initialState,
  { type, getVerificationCodeError, email, setNewPasswordError },
) =>
  produce(state, draft => {
    switch (type) {
      case SHOW_FORGOT_PASSWORD_MODAL:
        draft.isVisibleModal = true;
        draft.content = GET_VERIFICATION_CODE_MODAL;
        break;
      case HIDE_FORGOT_PASSWORD_MODAL:
        draft.isVisibleModal = false;
        break;

      case GET_VERIFICATION_CODE:
        draft.getVerificationCodeProcessing = true;
        draft.email = email;
        break;
      case GET_VERIFICATION_CODE_SUCCESS:
        draft.getVerificationCodeProcessing = false;
        draft.content = SET_NEW_PASSWORD_MODAL;
        break;
      case GET_VERIFICATION_CODE_ERROR:
        draft.getVerificationCodeProcessing = false;
        draft.getVerificationCodeError = getVerificationCodeError;
        break;

      case SET_NEW_PASSWORD:
        draft.setNewPasswordProcessing = true;
        break;
      case SET_NEW_PASSWORD_SUCCESS:
        draft.setNewPasswordProcessing = false;
        draft.content = SUCCESS_BANNER;
        break;
      case SET_NEW_PASSWORD_ERROR:
        draft.setNewPasswordProcessing = false;
        draft.setNewPasswordError = setNewPasswordError;
        break;
    }
  });

export default forgotPasswordReducer;

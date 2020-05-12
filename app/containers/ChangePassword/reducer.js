/*
 *
 * SignUp reducer
 *
 */
import produce from 'immer';

import {
  SHOW_CHANGE_PASSWORD_MODAL,
  HIDE_CHANGE_PASSWORD_MODAL,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
} from './constants';

export const initialState = {
  isVisibleModal: false,
  changePasswordProcessing: false,
  changePasswordError: null,
};

/* eslint-disable default-case, no-param-reassign */
const changePasswordReducer = (state = initialState, { type, changePasswordError }) =>
  produce(state, draft => {
    switch (type) {
      case SHOW_CHANGE_PASSWORD_MODAL:
        draft.isVisibleModal = true;
        break;
      case HIDE_CHANGE_PASSWORD_MODAL:
        draft.isVisibleModal = false;
        break;

      case CHANGE_PASSWORD:
        draft.changePasswordProcessing = true;
        break;
      case CHANGE_PASSWORD_SUCCESS:
        draft.changePasswordProcessing = false;
        draft.isVisibleModal = false;
        break;
      case CHANGE_PASSWORD_ERROR:
        draft.changePasswordProcessing = false;
        draft.changePasswordError = changePasswordError;
        break;
    }
  });

export default changePasswordReducer;

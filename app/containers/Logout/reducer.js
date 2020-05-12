/*
 *
 * SignUp reducer
 *
 */
import produce from 'immer';

import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from './constants';

export const initialState = {
  logoutProcessing: false,
  logoutError: null,
};

/* eslint-disable default-case, no-param-reassign */
const logoutReducer = (state = initialState, { type, logoutError }) =>
  produce(state, draft => {
    switch (type) {
      case LOGOUT:
        draft.logoutProcessing = true;
        break;
      case LOGOUT_SUCCESS:
        draft.logoutProcessing = false;
        draft.isVisibleModal = false;
        break;
      case LOGOUT_ERROR:
        draft.logoutProcessing = false;
        draft.logoutError = logoutError;
        break;
    }
  });

export default logoutReducer;

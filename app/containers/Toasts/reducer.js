import produce from 'immer';

import { SHOW_TOAST, REMOVE_TOAST } from './constants';

export const initialState = {
  toasts: {},
};

/* eslint-disable default-case, no-param-reassign */
const toastsReducer = (state = initialState, { key, type, message, toastType }) =>
  produce(state, draft => {
    switch (type) {
      case SHOW_TOAST:
        draft.toasts[key] = { message, toastType };
        break;
      case REMOVE_TOAST:
        delete draft.toasts[key];
        break;
    }
  });

export default toastsReducer;

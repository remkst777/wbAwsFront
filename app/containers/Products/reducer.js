import produce from 'immer';
import uniqBy from 'lodash/uniqBy';

import {
  GET_USER_PRODUCTS,
  GET_USER_PRODUCTS_SUCCESS,
  GET_USER_PRODUCTS_ERROR,
  START_TRACKING,
  START_TRACKING_SUCCESS,
  START_TRACKING_ERROR,
  FINISH_TRACKING,
  FINISH_TRACKING_SUCCESS,
  FINISH_TRACKING_ERROR,
  SHOW_PRODUCT_INFO_MODAL,
  HIDE_PRODUCT_INFO_MODAL,
  GET_STAT,
  GET_STAT_SUCCESS,
  GET_STAT_ERROR,
} from './constants';

export const initialState = {
  getUserProductsProcessing: false,
  getUserProductsError: null,
  startTrackingProcessing: false,
  startTrackingError: null,
  finishTrackingProcessing: false,
  finishTrackingError: null,
  getStatProcessing: false,
  getStatError: null,
  products: [],
  isVisibleProductInfoModal: false,
  productInfo: {},
};

/* eslint-disable default-case, no-param-reassign, array-callback-return */
const productsReducer = (
  state = initialState,
  {
    type,
    products,
    getUserProductsError,
    getStatError,
    finishTrackingError,
    startTrackingError,
    isAuth,
    productInfo,
    id,
    productWithStat,
  },
) =>
  produce(state, draft => {
    switch (type) {
      case GET_USER_PRODUCTS:
        draft.getUserProductsProcessing = true;
        break;
      case GET_USER_PRODUCTS_SUCCESS:
        draft.getUserProductsProcessing = false;
        draft.products = products;
        break;
      case GET_USER_PRODUCTS_ERROR:
        draft.getUserProductsProcessing = false;
        draft.getUserProductsError = getUserProductsError;
        break;

      case START_TRACKING:
        draft.startTrackingProcessing = true;
        break;
      case START_TRACKING_SUCCESS:
        draft.startTrackingProcessing = false;
        draft.isVisibleProductInfoModal = !isAuth;
        draft.productInfo = !isAuth ? productInfo : initialState.productInfo;
        draft.products = !isAuth
          ? state.products
          : uniqBy([productInfo, ...state.products], 'id');
        break;
      case START_TRACKING_ERROR:
        draft.startTrackingProcessing = false;
        draft.startTrackingError = startTrackingError;
        break;

      case FINISH_TRACKING:
        draft.finishTrackingProcessing = true;
        break;
      case FINISH_TRACKING_SUCCESS:
        draft.finishTrackingProcessing = false;
        draft.products = state.products.filter(x => x.id !== id);
        break;
      case FINISH_TRACKING_ERROR:
        draft.finishTrackingProcessing = false;
        draft.finishTrackingError = finishTrackingError;
        break;

      case GET_STAT:
        draft.getStatProcessing = true;
        break;
      case GET_STAT_SUCCESS:
        draft.getStatProcessing = false;
        draft.products.find(x => {
          if (x.id === productWithStat.id) {
            x.history = productWithStat.history;
          }
        });
        break;
      case GET_STAT_ERROR:
        draft.getStatProcessing = false;
        draft.getStatError = getStatError;
        break;

      case SHOW_PRODUCT_INFO_MODAL:
        draft.isVisibleProductInfoModal = true;
        break;
      case HIDE_PRODUCT_INFO_MODAL:
        draft.isVisibleProductInfoModal = false;
        break;
    }
  });

export default productsReducer;

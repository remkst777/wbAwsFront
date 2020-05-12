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
  GET_STAT,
  GET_STAT_SUCCESS,
  GET_STAT_ERROR,
  SHOW_PRODUCT_INFO_MODAL,
  HIDE_PRODUCT_INFO_MODAL,
} from './constants';

// Get user products actions

export function getUserProducts() {
  return {
    type: GET_USER_PRODUCTS,
  };
}

export function getUserProductsSuccess(products) {
  return {
    type: GET_USER_PRODUCTS_SUCCESS,
    products,
  };
}

export function getUserProductsErr(getUserProductsError) {
  return {
    type: GET_USER_PRODUCTS_ERROR,
    getUserProductsError,
  };
}

// Start tracking actions

export function startTracking(val) {
  return {
    type: START_TRACKING,
    val,
  };
}

export function startTrackingSuccess({ isAuth, productInfo }) {
  return {
    type: START_TRACKING_SUCCESS,
    isAuth,
    productInfo,
  };
}

export function startTrackingErr(startTrackingError) {
  return {
    type: START_TRACKING_ERROR,
    startTrackingError,
  };
}

// Finish tracking actions

export function finishTracking(id) {
  return {
    type: FINISH_TRACKING,
    id,
  };
}

export function finishTrackingSuccess(id) {
  return {
    type: FINISH_TRACKING_SUCCESS,
    id,
  };
}

export function finishTrackingErr(finishTrackingError) {
  return {
    type: FINISH_TRACKING_ERROR,
    finishTrackingError,
  };
}

// Get stat info actions

export function getStat(id) {
  return {
    type: GET_STAT,
    id,
  };
}

export function getStatSuccess(productWithStat) {
  return {
    type: GET_STAT_SUCCESS,
    productWithStat,
  };
}

export function getStatErr(getStatError) {
  return {
    type: GET_STAT_ERROR,
    getStatError,
  };
}

// Show productInfo modal

export function showProductInfoModal() {
  return {
    type: SHOW_PRODUCT_INFO_MODAL,
  };
}

export function hideProductInfoModal() {
  return {
    type: HIDE_PRODUCT_INFO_MODAL,
  };
}

import { takeLatest, call, put } from 'redux-saga/effects';

import { getCurrentUser, changeUserLocale } from 'utils/accountManagement';

import { getUserProductsWorker, startTrackingWorker } from 'containers/Products/saga';
import { START_TRACKING } from 'containers/Products/constants';

import {
  getCurrentUserSuccess,
  getCurrentUserErr,
  changeUserLocaleSuccess,
  changeUserLocaleErr,
} from './actions';

import {
  GET_CURRENT_USER,
  CHANGE_USER_LOCALE,
  GET_CURRENT_USER_SUCCESS,
} from './constants';

function* getCurrentUserWorker() {
  try {
    const { authKey, email, locale } = yield call(getCurrentUser);

    yield put(getCurrentUserSuccess({ authKey, email, locale }));
  } catch ({ message }) {
    yield put(getCurrentUserErr(message));
  }
}

function* changeUserLocaleWorker({ locale }) {
  try {
    yield call(changeUserLocale, locale);

    yield put(changeUserLocaleSuccess(locale));
  } catch (errorInfo) {
    yield put(changeUserLocaleErr(errorInfo));
  }
}

export default function* globalProviderSaga() {
  yield takeLatest(GET_CURRENT_USER, getCurrentUserWorker);
  yield takeLatest(GET_CURRENT_USER_SUCCESS, getUserProductsWorker);
  yield takeLatest(CHANGE_USER_LOCALE, changeUserLocaleWorker);
  yield takeLatest(START_TRACKING, startTrackingWorker);
}

import { takeLatest, call, put } from 'redux-saga/effects';
import { logout } from 'utils/accountManagement';

import { logoutSuccess, logoutErr } from './actions';
import { LOGOUT } from './constants';

export function* logoutWorker() {
  try {
    yield call(logout);

    yield put(logoutSuccess());
  } catch (errorInfo) {
    yield put(logoutErr(errorInfo));
  }
}

export default function* logoutSaga() {
  yield takeLatest(LOGOUT, logoutWorker);
}

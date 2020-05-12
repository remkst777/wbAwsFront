import { takeLatest, call, put } from 'redux-saga/effects';

import { changePasswordForAuthUser } from 'utils/accountManagement';

import { changePasswordSuccess, changePasswordErr } from './actions';
import { CHANGE_PASSWORD } from './constants';

export function* changePasswordWorker({ val }) {
  try {
    yield call(changePasswordForAuthUser, {
      oldPassword: val.oldPassword,
      newPassword: val.newPassword,
    });

    yield call(val.resetForm);

    yield put(changePasswordSuccess());
  } catch (errorInfo) {
    yield put(changePasswordErr(errorInfo));
  }
}

export default function* forgotPasswordSaga() {
  yield takeLatest(CHANGE_PASSWORD, changePasswordWorker);
}

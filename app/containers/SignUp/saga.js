import { takeLatest, call, put } from 'redux-saga/effects';
import { signUp } from 'utils/accountManagement';

import { signUpSuccess, signUpErr } from './actions';
import { SIGN_UP } from './constants';

export function* signUpWorker({ val }) {
  try {
    yield call(signUp, {
      email: val.email,
      password: val.password,
      locale: val.country,
    });

    yield call(val.resetForm);
    yield put(signUpSuccess());
  } catch (errorInfo) {
    yield put(signUpErr(errorInfo));
  }
}

export default function* signUpSaga() {
  yield takeLatest(SIGN_UP, signUpWorker);
}

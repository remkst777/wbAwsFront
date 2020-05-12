import { takeLatest, call, put, select } from 'redux-saga/effects';

import {
  getVerificationCodeWithForgotPassword,
  setNewPasswordWithForgotPassword,
} from 'utils/accountManagement';

import {
  getVerificationCodeSuccess,
  getVerificationCodeErr,
  setNewPasswordSuccess,
  setNewPasswordErr,
} from './actions';

import { GET_VERIFICATION_CODE, SET_NEW_PASSWORD } from './constants';
import { selectEmail } from './selectors';

export function* getVerificationCodeWorker({ email, resetForm }) {
  try {
    yield call(getVerificationCodeWithForgotPassword, email);
    yield call(resetForm);

    yield put(getVerificationCodeSuccess());
  } catch (errorInfo) {
    yield put(getVerificationCodeErr(errorInfo));
  }
}

export function* setNewPasswordWorker({ val }) {
  try {
    const email = yield select(selectEmail());

    yield call(setNewPasswordWithForgotPassword, {
      email,
      code: val.code,
      password: val.newPassword,
    });

    yield call(val.resetForm);

    yield put(setNewPasswordSuccess());
  } catch (errorInfo) {
    yield put(setNewPasswordErr(errorInfo));
  }
}

export default function* forgotPasswordSaga() {
  yield takeLatest(GET_VERIFICATION_CODE, getVerificationCodeWorker);
  yield takeLatest(SET_NEW_PASSWORD, setNewPasswordWorker);
}

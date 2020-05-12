import { takeLatest, call, put } from 'redux-saga/effects';
import { login } from 'utils/accountManagement';

import { getCurrentUserSuccess } from 'containers/GlobalProvider/actions';

import { loginSuccess, loginErr } from './actions';
import { LOGIN } from './constants';

export function* loginWorker({ val }) {
  try {
    const { locale, authKey } = yield call(login, {
      email: val.email,
      password: val.password,
    });

    yield put(getCurrentUserSuccess({ authKey, locale }));

    yield call(val.resetForm);

    yield put(loginSuccess());
  } catch (errorInfo) {
    yield put(loginErr(errorInfo));
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN, loginWorker);
}

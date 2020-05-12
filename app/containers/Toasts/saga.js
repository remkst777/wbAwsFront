import { takeEvery, put, select } from 'redux-saga/effects';
import { translationMessages } from 'i18n';

import apiMessages from 'api-messages';
import commonMessages from 'common-messages';

import { LOGIN_ERROR } from 'containers/Login/constants';
import { LOGOUT_ERROR } from 'containers/Logout/constants';
import { SIGN_UP_ERROR } from 'containers/SignUp/constants';
import { CHANGE_USER_LOCALE_ERROR } from 'containers/GlobalProvider/constants';

import {
  START_TRACKING_SUCCESS,
  FINISH_TRACKING_SUCCESS,
  START_TRACKING_ERROR,
  FINISH_TRACKING_ERROR,
} from 'containers/Products/constants';

import {
  GET_VERIFICATION_CODE_ERROR,
  SET_NEW_PASSWORD_ERROR,
} from 'containers/ForgotPassword/constants';

import {
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
} from 'containers/ChangePassword/constants';

import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

import { showToast, removeToast } from './actions';

import { SHOW_TOAST } from './constants';

export function* cognitoHandlingWorker(errorInfo) {
  const locale = yield select(makeSelectLocale());

  try {
    const errorKeys = Object.keys(errorInfo).filter(x => x !== 'type');
    const { code } = errorInfo[errorKeys[0]];

    const messageId = apiMessages[code].id || commonMessages.unknownError.id;

    const message = translationMessages[locale][messageId];

    yield put(showToast({ toastType: 'error', message, key: Date.now() }));
  } catch (err) {
    yield put(
      showToast({
        toastType: 'error',
        message: translationMessages[locale][commonMessages.unknownError.id],
        key: Date.now(),
      }),
    );
  }
}

export function* successToastWorker() {
  const locale = yield select(makeSelectLocale());

  yield put(
    showToast({
      toastType: 'success',
      message: translationMessages[locale][commonMessages.success.id],
      key: Date.now(),
    }),
  );
}

export function* removeToastWorker({ key }) {
  yield new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });

  yield put(removeToast(key));
}

export default function* toastsSaga() {
  yield takeEvery(
    [START_TRACKING_SUCCESS, FINISH_TRACKING_SUCCESS, CHANGE_PASSWORD_SUCCESS],
    successToastWorker,
  );
  yield takeEvery(
    [
      LOGIN_ERROR,
      SIGN_UP_ERROR,
      GET_VERIFICATION_CODE_ERROR,
      SET_NEW_PASSWORD_ERROR,
      CHANGE_PASSWORD_ERROR,
      CHANGE_USER_LOCALE_ERROR,
      LOGOUT_ERROR,
      START_TRACKING_ERROR,
      FINISH_TRACKING_ERROR,
    ],
    cognitoHandlingWorker,
  );
  yield takeEvery(SHOW_TOAST, removeToastWorker);
}

import { takeLatest, call, put, select } from 'redux-saga/effects';

import {
  getUserProducts,
  startTracking,
  getProductInfo,
  finishTracking,
  getStat,
} from 'utils/productsManagement';

import { selectAuthKey } from 'containers/GlobalProvider/selectors';

import {
  getUserProducts as getUserProductsAction,
  getUserProductsSuccess,
  getUserProductsErr,
  startTrackingSuccess,
  startTrackingErr,
  finishTrackingSuccess,
  finishTrackingErr,
  getStatSuccess,
  getStatErr,
} from './actions';

import { FINISH_TRACKING, GET_STAT } from './constants';

export function* getUserProductsWorker() {
  try {
    yield put(getUserProductsAction());

    const authKey = yield select(selectAuthKey());
    const products = yield call(getUserProducts, authKey);

    yield put(getUserProductsSuccess(products));
  } catch ({ message }) {
    yield put(getUserProductsErr(message));
  }
}

export function* startTrackingWorker({ val }) {
  try {
    const { shop, articul, country } = val;
    const authKey = yield select(selectAuthKey());

    const productInfo = yield call(authKey ? startTracking : getProductInfo, {
      authKey,
      shop,
      articul,
      locale: country,
    });

    yield put(
      startTrackingSuccess({
        isAuth: Boolean(authKey),
        productInfo,
      }),
    );
  } catch (errorInfo) {
    yield put(startTrackingErr(errorInfo));
  }
}

export function* finishTrackingWorker({ id }) {
  try {
    const authKey = yield select(selectAuthKey());

    yield call(finishTracking, { authKey, id });
    yield put(finishTrackingSuccess(id));
  } catch ({ message }) {
    yield put(finishTrackingErr(message));
  }
}

export function* getStatWorker({ id }) {
  try {
    const authKey = yield select(selectAuthKey());
    const productWithStat = yield call(getStat, { authKey, id });

    yield put(getStatSuccess(productWithStat));
  } catch ({ message }) {
    yield put(getStatErr(message));
  }
}

export default function* productsSaga() {
  yield takeLatest(FINISH_TRACKING, finishTrackingWorker);
  yield takeLatest(GET_STAT, getStatWorker);
}

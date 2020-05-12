import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLoginDomain = state => state.login || initialState;

const selectIsVisibleModal = () =>
  createSelector(
    selectLoginDomain,
    x => x.isVisibleModal,
  );

const selectLoginProcessing = () =>
  createSelector(
    selectLoginDomain,
    x => x.loginProcessing,
  );

const selectLoginError = () =>
  createSelector(
    selectLoginDomain,
    x => x.loginError,
  );

export {
  selectLoginDomain,
  selectIsVisibleModal,
  selectLoginProcessing,
  selectLoginError,
};

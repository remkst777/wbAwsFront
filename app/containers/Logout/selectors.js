import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLogoutDomain = state => state.logout || initialState;

const selectLogoutProcessing = () =>
  createSelector(
    selectLogoutDomain,
    x => x.logoutProcessing,
  );

const selectLogoutError = () =>
  createSelector(
    selectLogoutDomain,
    x => x.logoutError,
  );

export { selectLogoutDomain, selectLogoutProcessing, selectLogoutError };

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobalProviderDomain = state => state.globalProvider || initialState;

const selectGetCurrentUserProcessing = () =>
  createSelector(
    selectGlobalProviderDomain,
    x => x.getCurrentUserProcessing,
  );

const selectGetCurrentUserError = () =>
  createSelector(
    selectGlobalProviderDomain,
    x => x.getCurrentUserError,
  );

const selectAuthKey = () =>
  createSelector(
    selectGlobalProviderDomain,
    x => x.user.authKey,
  );

const selectUserLocale = () =>
  createSelector(
    selectGlobalProviderDomain,
    x => x.user.locale,
  );

const selectEmail = () =>
  createSelector(
    selectGlobalProviderDomain,
    x => x.user.email,
  );

const selectChangeUserLocaleProcessing = () =>
  createSelector(
    selectGlobalProviderDomain,
    x => x.changeUserLocaleProcessing,
  );

const selectChangeUserLocaleError = () =>
  createSelector(
    selectGlobalProviderDomain,
    x => x.changeUserLocaleError,
  );

export {
  selectGlobalProviderDomain,
  selectGetCurrentUserProcessing,
  selectGetCurrentUserError,
  selectAuthKey,
  selectUserLocale,
  selectEmail,
  selectChangeUserLocaleProcessing,
  selectChangeUserLocaleError,
};

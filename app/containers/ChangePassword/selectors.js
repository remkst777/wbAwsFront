import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectChangePasswordDomain = state => state.changePassword || initialState;

const selectChangePasswordError = () =>
  createSelector(
    selectChangePasswordDomain,
    x => x.changePasswordError,
  );

const selectChangePasswordProcessing = () =>
  createSelector(
    selectChangePasswordDomain,
    x => x.changePasswordProcessing,
  );

const selectIsVisibleModal = () =>
  createSelector(
    selectChangePasswordDomain,
    x => x.isVisibleModal,
  );

export {
  selectChangePasswordDomain,
  selectIsVisibleModal,
  selectChangePasswordError,
  selectChangePasswordProcessing,
};

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSignUpDomain = state => state.signUp || initialState;

const selectContent = () =>
  createSelector(
    selectSignUpDomain,
    x => x.content,
  );

const selectIsVisibleModal = () =>
  createSelector(
    selectSignUpDomain,
    x => x.isVisibleModal,
  );

const selectSignUpProcessing = () =>
  createSelector(
    selectSignUpDomain,
    x => x.signUpProcessing,
  );

const selectSignUpError = () =>
  createSelector(
    selectSignUpDomain,
    x => x.signUpError,
  );

export {
  selectSignUpDomain,
  selectContent,
  selectIsVisibleModal,
  selectSignUpProcessing,
  selectSignUpError,
};

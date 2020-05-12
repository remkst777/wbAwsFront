import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectToastsDomain = state => state.toasts || initialState;

const selectToasts = () =>
  createSelector(
    selectToastsDomain,
    x => x.toasts,
  );

export { selectToastsDomain, selectToasts };

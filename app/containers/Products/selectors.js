import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProductsDomain = state => state.products || initialState;

const selectUserProducts = id =>
  createSelector(
    selectProductsDomain,
    x => (id ? x.products.find(y => y.id === id) : x.products),
  );

const selectGetUserProductsProcessing = () =>
  createSelector(
    selectProductsDomain,
    x => x.getUserProductsProcessing,
  );

const selectGetUserProductsError = () =>
  createSelector(
    selectProductsDomain,
    x => x.getUserProductsError,
  );

const selectStartTrackingProcessing = () =>
  createSelector(
    selectProductsDomain,
    x => x.startTrackingProcessing,
  );

const selectStartTrackingError = () =>
  createSelector(
    selectProductsDomain,
    x => x.startTrackingError,
  );

const selectFinishTrackingProcessing = () =>
  createSelector(
    selectProductsDomain,
    x => x.finishTrackingProcessing,
  );

const selectFinishTrackingError = () =>
  createSelector(
    selectProductsDomain,
    x => x.finishTrackingError,
  );

const selectGetStatProcessing = () =>
  createSelector(
    selectProductsDomain,
    x => x.getStatProcessing,
  );

const selectGetStatError = () =>
  createSelector(
    selectProductsDomain,
    x => x.getStatError,
  );

const selectIsVisibleProductInfoModal = () =>
  createSelector(
    selectProductsDomain,
    x => x.isVisibleProductInfoModal,
  );

const selectProductInfo = () =>
  createSelector(
    selectProductsDomain,
    x => x.productInfo,
  );

export {
  selectUserProducts,
  selectGetUserProductsProcessing,
  selectGetUserProductsError,
  selectStartTrackingProcessing,
  selectStartTrackingError,
  selectFinishTrackingProcessing,
  selectFinishTrackingError,
  selectGetStatProcessing,
  selectGetStatError,
  selectIsVisibleProductInfoModal,
  selectProductInfo,
};

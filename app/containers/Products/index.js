/**
 *
 * Products
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import * as routes from 'routes';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

import {
  selectAuthKey,
  selectGetCurrentUserProcessing,
} from 'containers/GlobalProvider/selectors';

import View from 'components/Products/View';
import Main from 'components/Products/Main';
import Aside from 'components/Products/Aside';

import reducer from './reducer';
import saga from './saga';

import {
  selectProductInfo,
  selectUserProducts,
  selectStartTrackingProcessing,
  selectGetUserProductsProcessing,
  selectFinishTrackingProcessing,
  selectGetStatProcessing,
} from './selectors';

import { startTracking, finishTracking, getStat } from './actions';

const key = 'products';

export function Products({
  locale,
  authKey,
  history,
  getCurrentUserProcessing,
  userProducts,
  productInfo,
  startTrackingDispatch,
  startTrackingProcessing,
  getUserProductsProcessing,
  finishTrackingDispatch,
  finishTrackingProcessing,
  getStatDispatch,
  match,
  activeProduct,
  getStatProcessing,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // Check if you tracked products before login and start tracking after
  useEffect(() => {
    if (Object.keys(productInfo).length) {
      startTrackingDispatch({
        shop: productInfo.shop,
        articul: productInfo.articul,
        country: productInfo.locale,
      });
    }
  }, []);

  // Define if you have active session and redirect if you dont have.
  useEffect(() => {
    if (!authKey && !getCurrentUserProcessing) {
      history.push(routes.home);
    }
  }, [authKey, getCurrentUserProcessing]);

  // Select active product and upload stat. if it is absent there, put to store.
  useEffect(() => {
    if (authKey && activeProduct && !activeProduct.history) {
      getStatDispatch(match.params.id);
    }
  }, [match.params.id, authKey, activeProduct]);

  const [isVisible, setVisibility] = useState(true);

  return (
    <View isVisible={isVisible}>
      <Aside
        isVisible={isVisible}
        setVisibility={setVisibility}
        activeProduct={activeProduct}
        userProducts={userProducts}
        finishTrackingDispatch={finishTrackingDispatch}
        finishTrackingProcessing={finishTrackingProcessing}
        isProcessing={
          getUserProductsProcessing ||
          startTrackingProcessing ||
          getCurrentUserProcessing ||
          finishTrackingProcessing
        }
      />
      <Main
        locale={locale}
        isVisible={isVisible}
        activeProduct={activeProduct}
        isProcessing={getStatProcessing}
      />
    </View>
  );
}

Products.propTypes = {
  locale: PropTypes.string.isRequired,
  authKey: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  getCurrentUserProcessing: PropTypes.bool.isRequired,
  userProducts: PropTypes.array,
  productInfo: PropTypes.object,
  startTrackingDispatch: PropTypes.func.isRequired,
  startTrackingProcessing: PropTypes.bool.isRequired,
  getUserProductsProcessing: PropTypes.bool.isRequired,
  finishTrackingDispatch: PropTypes.func.isRequired,
  finishTrackingProcessing: PropTypes.bool.isRequired,
  getStatDispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  activeProduct: PropTypes.object,
  getStatProcessing: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
  authKey: selectAuthKey(),
  getCurrentUserProcessing: selectGetCurrentUserProcessing(),
  productInfo: selectProductInfo(),
  userProducts: selectUserProducts(),
  startTrackingProcessing: selectStartTrackingProcessing(),
  getUserProductsProcessing: selectGetUserProductsProcessing(),
  finishTrackingProcessing: selectFinishTrackingProcessing(),
  getStatProcessing: selectGetStatProcessing(),
  activeProduct: (state, props) => selectUserProducts(props.match.params.id)(state),
});

function mapDispatchToProps(dispatch) {
  return {
    startTrackingDispatch: bindActionCreators(startTracking, dispatch),
    finishTrackingDispatch: bindActionCreators(finishTracking, dispatch),
    getStatDispatch: bindActionCreators(getStat, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Products);

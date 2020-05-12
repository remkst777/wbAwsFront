/**
 *
 * StartTrackingForm
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import commonMessages from 'common-messages';

import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import TranslatedMessage from 'containers/TranslatedMessage';

import Login from 'containers/Login';

import {
  selectStartTrackingProcessing,
  selectIsVisibleProductInfoModal,
  selectProductInfo,
} from 'containers/Products/selectors';

import { selectUserLocale } from 'containers/GlobalProvider/selectors';

import { startTracking, hideProductInfoModal } from 'containers/Products/actions';

import Dropdown from 'components/Dropdown';
import ModalDialog from 'components/ModalDialog';
import CountriesNames from 'components/List/CountriesNames';
import ShopsNames from 'components/List/ShopsNames';
import { ButtonIS } from 'components/Button/Contained/InfoStretch';

import Form from 'components/Form/StartTrackingForm';
import ModalBox from 'components/StartTracking/V1/ModalStyled';

import startTrackingMessages from './messages';

export function StartTrackingForm({
  Input,
  CountryButton,
  ShopButton,
  SearchButton,
  userLocale,
  locale,
  startTrackingProcessing,
  startTrackingDispatch,
  isVisibleProductInfoModal,
  hideProductInfoModalDispatch,
  productInfo,
}) {
  const [articul, setArticul] = useState('');
  const [country, setCountry] = useState('');
  const [shop, setShop] = useState('');

  const isFormDisabled =
    startTrackingProcessing || !articul || (!country && !userLocale) || !shop;

  function onSubmit(e) {
    e.preventDefault();
    startTrackingDispatch({ articul, country, shop });
  }

  useEffect(() => {
    if (country !== userLocale) {
      setCountry(userLocale);
    }
  }, [userLocale]);

  return (
    <>
      <ModalDialog
        show={isVisibleProductInfoModal}
        closeModal={hideProductInfoModalDispatch}
      >
        <ModalBox>
          <div>{productInfo.title}</div>
          <div>
            <TranslatedMessage {...commonMessages.price} />
            {`: ${productInfo.price}`}
          </div>
          <div>
            <img src={productInfo.image} alt={productInfo.title} />
          </div>
          <div>
            <TranslatedMessage {...startTrackingMessages.youNeedToAuth} />
          </div>

          <Login>
            {({ showLoginModalDispatch }) => (
              <ButtonIS onClick={showLoginModalDispatch}>
                <TranslatedMessage {...commonMessages.login} />
              </ButtonIS>
            )}
          </Login>
        </ModalBox>
      </ModalDialog>

      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          value={articul}
          onChange={x => setArticul(x.target.value)}
          locale={locale}
          disabled={startTrackingProcessing}
        />
        <div className="q1">
          <div>
            <Dropdown
              Button={({ onToggle }) => (
                <CountryButton
                  type="button"
                  onClick={onToggle}
                  country={country}
                  disabled={startTrackingProcessing}
                />
              )}
              Menu={({ onToggle }) => (
                <CountriesNames onToggle={onToggle} setCountry={setCountry} />
              )}
            />
          </div>

          <div>
            <Dropdown
              Button={({ onToggle }) => (
                <ShopButton
                  type="button"
                  onClick={onToggle}
                  shop={shop}
                  disabled={startTrackingProcessing}
                />
              )}
              Menu={({ onToggle }) => (
                <ShopsNames onToggle={onToggle} setShop={setShop} />
              )}
            />
          </div>

          <div>
            <SearchButton disabled={isFormDisabled} type="submit" />
          </div>
        </div>
      </Form>
    </>
  );
}

StartTrackingForm.propTypes = {
  Input: PropTypes.any,
  CountryButton: PropTypes.any,
  ShopButton: PropTypes.any,
  SearchButton: PropTypes.any,
  userLocale: PropTypes.string.isRequired,
  startTrackingDispatch: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  startTrackingProcessing: PropTypes.bool.isRequired,
  isVisibleProductInfoModal: PropTypes.bool.isRequired,
  hideProductInfoModalDispatch: PropTypes.func.isRequired,
  productInfo: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
  userLocale: selectUserLocale(),
  startTrackingProcessing: selectStartTrackingProcessing(),
  isVisibleProductInfoModal: selectIsVisibleProductInfoModal(),
  productInfo: selectProductInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    startTrackingDispatch: bindActionCreators(startTracking, dispatch),
    hideProductInfoModalDispatch: bindActionCreators(hideProductInfoModal, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(StartTrackingForm);

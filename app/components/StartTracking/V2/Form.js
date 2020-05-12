import React from 'react';
import { translationMessages } from 'i18n';

import commonMessages from 'common-messages';

import { flags, logos } from 'utils/shopManagement';

import languageIcon from 'images/language.svg?inline';
import shopIcon from 'images/shop.svg?inline';
import searchIcon from 'images/search.svg?inline';

import StartTrackingForm from 'containers/StartTracking';

import Input from './Input';
import Button from './Button';

const Form = () => (
  <StartTrackingForm
    Input={({ type, value, onChange, locale, disabled }) => (
      <Input
        placeholder={`${translationMessages[locale][commonMessages.search.id]}...`}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    )}
    CountryButton={({ type, onClick, country, disabled }) => (
      <Button type={type} onClick={onClick} disabled={disabled} option={country}>
        <img src={flags[country] || languageIcon} alt="country" />
      </Button>
    )}
    ShopButton={({ type, onClick, shop, disabled }) => (
      <Button type={type} onClick={onClick} disabled={disabled} option={shop}>
        <img src={logos[shop] || shopIcon} alt="shop" />
      </Button>
    )}
    SearchButton={({ type, disabled }) => (
      <Button disabled={disabled} type={type}>
        <img src={searchIcon} alt="shop" />
      </Button>
    )}
  />
);

export default React.memo(Form);

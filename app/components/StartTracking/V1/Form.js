import React from 'react';
import PropTypes from 'prop-types';
import { translationMessages } from 'i18n';

import commonMessages from 'common-messages';

import { flags, logos } from 'utils/shopManagement';

import StartTrackingForm from 'containers/StartTracking';
import TranslatedMessage from 'containers/TranslatedMessage';

import Input from './Input';
import SubmitButton from './SubmitButton';
import OptionButton from './OptionButton';

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
      <OptionButton type={type} onClick={onClick} disabled={disabled} option={country}>
        <img src={flags[country]} alt="country" />
        <TranslatedMessage {...commonMessages[country || 'country']} />
      </OptionButton>
    )}
    ShopButton={({ type, onClick, shop, disabled }) => (
      <OptionButton type={type} onClick={onClick} disabled={disabled} option={shop}>
        <img src={logos[shop]} alt="shop" />
        {shop || <TranslatedMessage {...commonMessages.shop} />}
      </OptionButton>
    )}
    SearchButton={({ type, disabled }) => (
      <SubmitButton disabled={disabled} type={type}>
        <TranslatedMessage {...commonMessages.search} />
      </SubmitButton>
    )}
  />
);

Form.propTypes = {
  locale: PropTypes.string,
};

export default React.memo(Form);

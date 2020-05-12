/**
 *
 * TranslatedMessage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { translationMessages } from 'i18n';

import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

export function TranslatedMessage({ id, locale = 'en', values, tagName }) {
  const valuesKeys = values ? Object.keys(values) : [];

  let message = translationMessages[locale][id];

  valuesKeys.forEach(key => {
    message = message.replace(`{${key}}`, values[key]);
  });

  if (tagName === undefined) {
    return <span>{message}</span>;
  }

  if (tagName === null) {
    return message;
  }
}

TranslatedMessage.propTypes = {
  locale: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(TranslatedMessage);

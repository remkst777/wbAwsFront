/**
 *
 * ChangeAppLocale
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

import Dropdown from 'components/Dropdown';
import LanguagesNames from 'components/List/LanguagesNames';

export function ChangeAppLocale({ changeLocaleDispatch, locale, Button }) {
  return (
    <Dropdown
      Button={({ onToggle }) => <Button onClick={onToggle} country={locale} />}
      Menu={({ onToggle }) => (
        <LanguagesNames onToggle={onToggle} setLang={changeLocaleDispatch} />
      )}
    />
  );
}

ChangeAppLocale.propTypes = {
  changeLocaleDispatch: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  Button: PropTypes.any.isRequired,
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeLocaleDispatch: bindActionCreators(changeLocale, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ChangeAppLocale);

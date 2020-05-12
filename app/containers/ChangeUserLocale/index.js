/**
 *
 * ChangeUserLocale
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { changeUserLocale } from 'containers/GlobalProvider/actions';
import { selectUserLocale } from 'containers/GlobalProvider/selectors';

import Dropdown from 'components/Dropdown';
import CountriesNames from 'components/List/CountriesNames';

export function ChangeUserLocale({ changeUserLocaleDispatch, userLocale, Button }) {
  return (
    <Dropdown
      Button={({ onToggle }) => <Button onClick={onToggle} country={userLocale} />}
      Menu={({ onToggle }) => (
        <CountriesNames onToggle={onToggle} setCountry={changeUserLocaleDispatch} />
      )}
    />
  );
}

ChangeUserLocale.propTypes = {
  changeUserLocaleDispatch: PropTypes.func.isRequired,
  userLocale: PropTypes.string,
  Button: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  userLocale: selectUserLocale(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeUserLocaleDispatch: bindActionCreators(changeUserLocale, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ChangeUserLocale);

import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'components/Dropdown';
import CountriesNames from 'components/List/CountriesNames';

const DropdownCountry = ({ country, setCountry, disabled, placeholder }) => (
  <Dropdown
    Button={({ onToggle }) => (
      <input
        type="text"
        value={country}
        placeholder={placeholder}
        onFocus={onToggle}
        onChange={null}
        disabled={disabled}
        data-type="dropdown"
      />
    )}
    Menu={({ onToggle }) => (
      <CountriesNames onToggle={onToggle} setCountry={setCountry} />
    )}
  />
);

DropdownCountry.propTypes = {
  country: PropTypes.string,
  setCountry: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default React.memo(DropdownCountry);

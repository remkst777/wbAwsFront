import React from 'react';
import PropTypes from 'prop-types';

import commonMessages from 'common-messages';

import { countriesWithShops } from 'utils/shopManagement';
import TranslatedMessage from 'containers/TranslatedMessage';

import { Ul } from 'components/Dropdown/Menu';

const CountriesNames = ({ onToggle, setCountry }) => (
  <Ul>
    {countriesWithShops.map(x => (
      <li
        key={x}
        onClick={() => {
          setCountry(x);
          onToggle();
        }}
      >
        <TranslatedMessage {...commonMessages[x]} />
      </li>
    ))}
  </Ul>
);

CountriesNames.propTypes = {
  onToggle: PropTypes.func.isRequired,
  setCountry: PropTypes.func.isRequired,
};

export default React.memo(CountriesNames);

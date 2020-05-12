import React from 'react';
import PropTypes from 'prop-types';

import { shops } from 'utils/shopManagement';

import { Ul } from 'components/Dropdown/Menu';

const ShopsNames = ({ onToggle, setShop }) => (
  <Ul>
    {shops.map(x => (
      <li
        key={x}
        onClick={() => {
          setShop(x);
          onToggle();
        }}
      >
        {x}
      </li>
    ))}
  </Ul>
);

ShopsNames.propTypes = {
  onToggle: PropTypes.func.isRequired,
  setShop: PropTypes.func.isRequired,
};

export default React.memo(ShopsNames);

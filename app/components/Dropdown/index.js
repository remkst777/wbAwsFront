import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Blanket from './Blanket';

function Dropdown({ Button, Menu }) {
  const [isVisible, setVisibility] = useState(false);

  return (
    <>
      <Button onToggle={() => setVisibility(!isVisible)} />
      {isVisible && <Menu onToggle={() => setVisibility(false)} />}
      {isVisible && <Blanket onClick={() => setVisibility(false)} />}
    </>
  );
}

Dropdown.propTypes = {
  Button: PropTypes.any.isRequired,
  Menu: PropTypes.any.isRequired,
};

export default React.memo(Dropdown);

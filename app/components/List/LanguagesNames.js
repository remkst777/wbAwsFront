import React from 'react';
import PropTypes from 'prop-types';

import commonMessages from 'common-messages';

import { appLocales } from 'i18n';
import TranslatedMessage from 'containers/TranslatedMessage';

import { Ul } from 'components/Dropdown/Menu';

const LanguagesNames = ({ onToggle, setLang }) => (
  <Ul>
    {appLocales.map(x => (
      <li
        key={x}
        onClick={() => {
          setLang(x);
          onToggle();
        }}
      >
        <TranslatedMessage {...commonMessages[x]} />
      </li>
    ))}
  </Ul>
);

LanguagesNames.propTypes = {
  onToggle: PropTypes.func.isRequired,
  setLang: PropTypes.func.isRequired,
};

export default React.memo(LanguagesNames);

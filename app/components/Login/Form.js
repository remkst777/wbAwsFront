import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { translationMessages } from 'i18n';

import Box from 'components/Form';

import commonMessages from 'common-messages';

function Form({ onSubmit, isProcessing, locale }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormDisabled = isProcessing || !email.length || password.length < 6;

  const translations = translationMessages[locale];

  function resetForm() {
    setEmail('');
    setPassword('');
  }

  function onSubmitPrevented(ev) {
    ev.preventDefault();
    onSubmit({ email, password, resetForm });
  }

  return (
    <Box onSubmit={onSubmitPrevented}>
      <h3>{translations[commonMessages.login.id]}</h3>
      <div>
        <div>{translations[commonMessages.email.id]}</div>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isProcessing}
        />
      </div>
      <div>
        <div>{translations[commonMessages.password.id]}</div>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={isProcessing}
        />
      </div>
      <div>
        <input
          type="submit"
          value={translations[commonMessages.continue.id]}
          disabled={isFormDisabled}
        />
      </div>
    </Box>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired,
};

export default React.memo(Form);

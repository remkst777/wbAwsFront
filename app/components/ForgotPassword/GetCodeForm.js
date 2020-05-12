import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { translationMessages } from 'i18n';

import Box from 'components/Form';

import commonMessages from 'common-messages';

function GetCodeForm({ onSubmit, isProcessing, locale }) {
  const [email, setEmail] = useState('');

  const isFormDisabled = isProcessing || !email.length;

  const translations = translationMessages[locale];

  function resetForm() {
    setEmail('');
  }

  function onSubmitPrevented(ev) {
    ev.preventDefault();
    onSubmit({ email, resetForm });
  }

  return (
    <Box onSubmit={onSubmitPrevented}>
      <h3>{translations[commonMessages.recoverPassword.id]}</h3>

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
        <input
          type="submit"
          value={translations[commonMessages.continue.id]}
          disabled={isFormDisabled}
        />
      </div>
    </Box>
  );
}

GetCodeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired,
};

export default React.memo(GetCodeForm);

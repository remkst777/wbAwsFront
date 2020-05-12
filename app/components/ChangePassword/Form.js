import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { translationMessages } from 'i18n';

import Box from 'components/Form';

import commonMessages from 'common-messages';

function Form({ onSubmit, isProcessing, locale }) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const translations = translationMessages[locale];

  const isFormDisabled = isProcessing || !oldPassword.length || newPassword.length < 6;

  function resetForm() {
    setOldPassword('');
    setNewPassword('');
  }

  function onSubmitPrevented(ev) {
    ev.preventDefault();
    onSubmit({ oldPassword, newPassword, resetForm });
  }

  return (
    <Box onSubmit={onSubmitPrevented}>
      <h3>{translations[commonMessages.changePassword.id]}</h3>

      <div>
        <div>{translations[commonMessages.oldPassword.id]}</div>
        <input
          type="password"
          value={oldPassword}
          onChange={e => setOldPassword(e.target.value)}
          disabled={isProcessing}
        />
      </div>

      <div>
        <div>{translations[commonMessages.newPassword.id]}</div>
        <input
          type="password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
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

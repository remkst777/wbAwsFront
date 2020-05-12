import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { translationMessages } from 'i18n';

import Box from 'components/Form';

import commonMessages from 'common-messages';
import forgotPasswordMessages from 'containers/ForgotPassword/messages';

function SetPasswordForm({ onSubmit, isProcessing, locale }) {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const translations = translationMessages[locale];

  const isFormDisabled = isProcessing || !code.length || newPassword.length < 6;

  function resetForm() {
    setCode('');
    setNewPassword('');
  }

  function onSubmitPrevented(ev) {
    ev.preventDefault();
    onSubmit({ code, newPassword, resetForm });
  }

  return (
    <Box onSubmit={onSubmitPrevented}>
      <h3>{translations[commonMessages.recoverPassword.id]}</h3>

      <div className="tip">{translations[forgotPasswordMessages.checkEmail.id]}</div>

      <div>
        <div>{translations[commonMessages.code.id]}</div>
        <input
          type="text"
          value={code}
          onChange={e => setCode(e.target.value)}
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

SetPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired,
};

export default React.memo(SetPasswordForm);

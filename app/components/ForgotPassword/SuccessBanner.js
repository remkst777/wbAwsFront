import React from 'react';
import PropTypes from 'prop-types';

import bannerImage from 'images/banner2.svg?inline';

import commonMessages from 'common-messages';
import TranslatedMessage from 'containers/TranslatedMessage';
import forgotPasswordMessages from 'containers/ForgotPassword/messages';

import Box from 'components/Banner';
import { ButtonIL } from 'components/Button/Contained/InfoLarge';

function SuccessBanner({ hideForgotPasswordModal, showLoginModal }) {
  function onClick() {
    hideForgotPasswordModal();
    showLoginModal();
  }

  return (
    <Box>
      <div>
        <TranslatedMessage {...forgotPasswordMessages.passwordRecovering} />
      </div>

      <div>
        <img src={bannerImage} alt="banner" />
      </div>

      <div>
        <ButtonIL onClick={onClick} type="button">
          <TranslatedMessage {...commonMessages.continue} />
        </ButtonIL>
      </div>
    </Box>
  );
}

SuccessBanner.propTypes = {
  hideForgotPasswordModal: PropTypes.func.isRequired,
  showLoginModal: PropTypes.func.isRequired,
};

export default React.memo(SuccessBanner);

import React from 'react';
import PropTypes from 'prop-types';

import bannerImage from 'images/banner1.svg?inline';

import commonMessages from 'common-messages';
import signUpMessages from 'containers/SignUp/messages';
import TranslatedMessage from 'containers/TranslatedMessage';

import Box from 'components/Banner';
import { ButtonIL } from 'components/Button/Contained/InfoLarge';

function ThankYouBanner({ hideSignUpModal, showLoginModal }) {
  function onClick() {
    hideSignUpModal();
    showLoginModal();
  }

  return (
    <Box>
      <div>
        <TranslatedMessage {...signUpMessages.thankYouBanner} />
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

ThankYouBanner.propTypes = {
  hideSignUpModal: PropTypes.func.isRequired,
  showLoginModal: PropTypes.func.isRequired,
};

export default React.memo(ThankYouBanner);

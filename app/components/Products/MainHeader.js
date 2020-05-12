import React from 'react';
import PropTypes from 'prop-types';

import commonMessages from 'common-messages';

import logoutIcon from 'images/logout.svg?inline';
import translateIcon from 'images/translate.svg?inline';
import passwordIcon from 'images/password.svg?inline';
import languageIcon from 'images/language.svg?inline';

import { flags } from 'utils/shopManagement';

import TranslatedMessage from 'containers/TranslatedMessage';
import productsMessages from 'containers/Products/messages';

import ChangeAppLocale from 'containers/ChangeAppLocale';
import ChangeUserLocale from 'containers/ChangeUserLocale';
import ChangePassword from 'containers/ChangePassword';
import Logout from 'containers/Logout';

import MainHeaderButton from './MainHeaderButton';

const MainHeader = ({ title }) => (
  <header>
    <div>{title || <TranslatedMessage {...productsMessages.chooseSomething} />}</div>
    <div>
      <ChangeAppLocale
        Button={({ onClick, country }) => (
          <MainHeaderButton onClick={onClick} type="button">
            <img src={translateIcon} alt="change-language" />
            <div>
              <img src={flags[country]} alt="country" />
              <TranslatedMessage {...commonMessages.language} />
            </div>
          </MainHeaderButton>
        )}
      />

      <ChangeUserLocale
        Button={({ onClick, country }) => (
          <MainHeaderButton onClick={onClick} type="button">
            <img src={languageIcon} alt="change-locale" />
            <div>
              <img src={flags[country]} alt="country" />
              <TranslatedMessage {...commonMessages.country} />
            </div>
          </MainHeaderButton>
        )}
      />

      <ChangePassword>
        {({ showChangePasswordModalDispatch }) => (
          <MainHeaderButton onClick={showChangePasswordModalDispatch} type="button">
            <img src={passwordIcon} alt="change-password" />
            <TranslatedMessage {...commonMessages.password} />
          </MainHeaderButton>
        )}
      </ChangePassword>

      <Logout>
        {({ logoutDispatch }) => (
          <MainHeaderButton onClick={logoutDispatch} type="button">
            <img src={logoutIcon} alt="logout" />
            <TranslatedMessage {...commonMessages.logout} />
          </MainHeaderButton>
        )}
      </Logout>
    </div>
  </header>
);

MainHeader.propTypes = {
  title: PropTypes.string,
};

export default React.memo(MainHeader);

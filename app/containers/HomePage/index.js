import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { translationMessages } from 'i18n';

import * as routes from 'routes';
import { shops, flags } from 'utils/shopManagement';

import loginIcon from 'images/login.svg?external';
import signupIcon from 'images/register.svg?external';
import forgotIcon from 'images/forgot.svg?external';
import logo from 'images/logo.ico';

import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

import {
  selectAuthKey,
  selectGetCurrentUserProcessing,
} from 'containers/GlobalProvider/selectors';

import Login from 'containers/Login';
import SignUp from 'containers/SignUp';
import ForgotPassword from 'containers/ForgotPassword';
import ChangeAppLocale from 'containers/ChangeAppLocale';

import StartTrackingForm from 'components/StartTracking/V1/Form';

import Logo, { Letters } from 'components/Logo';
import Box from 'components/HomePage/Box';
import View from 'components/HomePage/View';
import Aside from 'components/HomePage/Aside';

import messages from './messages';

const HomePage = ({ locale, authKey, history, getCurrentUserProcessing }) => {
  const transl = translationMessages[locale];

  useEffect(() => {
    if (authKey && !getCurrentUserProcessing) {
      history.push(routes.products());
    }
  }, [authKey, getCurrentUserProcessing]);

  return (
    <>
      <Helmet>
        <title>{transl[messages.title.id]}</title>
        <meta name="description" content={transl[messages.title.description]} />
      </Helmet>

      <Box>
        <Aside>
          <Logo to={routes.home}>
            <img src={logo} alt="logo" width="100%" />
          </Logo>

          <div className="bottom">
            <ChangeAppLocale
              Button={({ onClick, country }) => (
                <button onClick={onClick} type="button">
                  <img src={flags[country]} alt="country" />
                </button>
              )}
            />

            <Login>
              {({ showLoginModalDispatch }) => (
                <Letters
                  onClick={showLoginModalDispatch}
                  dangerouslySetInnerHTML={{ __html: loginIcon }}
                />
              )}
            </Login>

            <SignUp>
              {({ showSignUpModalDispatch }) => (
                <Letters
                  onClick={showSignUpModalDispatch}
                  dangerouslySetInnerHTML={{ __html: signupIcon }}
                />
              )}
            </SignUp>

            <ForgotPassword>
              {({ showForgotPasswordModalDispatch }) => (
                <Letters
                  onClick={showForgotPasswordModalDispatch}
                  dangerouslySetInnerHTML={{ __html: forgotIcon }}
                />
              )}
            </ForgotPassword>
          </div>
        </Aside>
        <View>
          <div className="top">{shops.join(', ')}</div>

          <div className="middle">
            <div>{transl[messages.getEmail.id]}</div>
            <div>{transl[messages.when.id]}</div>
            <div>{transl[messages.costLlBeReduced.id]}</div>
          </div>

          <StartTrackingForm />
        </View>
      </Box>
    </>
  );
};

HomePage.propTypes = {
  locale: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  getCurrentUserProcessing: PropTypes.bool.isRequired,
  authKey: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
  authKey: selectAuthKey(),
  getCurrentUserProcessing: selectGetCurrentUserProcessing(),
});

export default connect(
  mapStateToProps,
  null,
)(memo(HomePage));

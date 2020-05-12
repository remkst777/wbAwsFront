import { Auth } from 'aws-amplify';

function emailToUsername(email) {
  return email.replace(/[@.]/gim, '');
}

async function signUp({ email, password, locale }) {
  await Auth.signUp({
    username: emailToUsername(email),
    password,
    attributes: {
      email,
      locale,
    },
  });
}

async function login({ email, password }) {
  const response = await Auth.signIn(emailToUsername(email), password);
  const authKey = response.signInUserSession.idToken.jwtToken;
  const { locale } = response.attributes;

  return {
    locale,
    authKey,
  };
}

async function logout() {
  await Auth.signOut();
}

async function getVerificationCodeWithForgotPassword(email) {
  await Auth.forgotPassword(email);
}

async function setNewPasswordWithForgotPassword({ email, code, password }) {
  await Auth.forgotPasswordSubmit(email, code, password);
}

async function changePasswordForAuthUser({ oldPassword, newPassword }) {
  const user = await Auth.currentAuthenticatedUser();
  await Auth.changePassword(user, oldPassword, newPassword);
}

async function changeUserLocale(locale) {
  const user = await Auth.currentAuthenticatedUser();
  await Auth.updateUserAttributes(user, {
    locale,
  });
}

async function getCurrentUser() {
  const userInfo = await Auth.currentUserInfo();
  const userId = await Auth.currentAuthenticatedUser();

  const authKey = userId.signInUserSession.idToken.jwtToken;
  const { locale, email } = userInfo.attributes;

  return {
    authKey,
    locale,
    email,
  };
}

export {
  signUp,
  login,
  getCurrentUser,
  logout,
  getVerificationCodeWithForgotPassword,
  setNewPasswordWithForgotPassword,
  changePasswordForAuthUser,
  changeUserLocale,
};

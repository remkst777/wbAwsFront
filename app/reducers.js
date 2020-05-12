/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import globalProviderReducer from 'containers/GlobalProvider/reducer';
import forgotPasswordReducer from 'containers/ForgotPassword/reducer';
import productsReducer from 'containers/Products/reducer';
import changePasswordReducer from 'containers/ChangePassword/reducer';
import logoutReducer from 'containers/Logout/reducer';
import signUpReducer from 'containers/SignUp/reducer';
import loginReducer from 'containers/Login/reducer';
import toastsReducer from 'containers/Toasts/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    globalProvider: globalProviderReducer,
    toasts: toastsReducer,
    signUp: signUpReducer,
    login: loginReducer,
    logout: logoutReducer,
    forgotPassword: forgotPasswordReducer,
    changePassword: changePasswordReducer,
    products: productsReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}

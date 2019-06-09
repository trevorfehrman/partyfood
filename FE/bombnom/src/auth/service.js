import { config } from './config';
import * as Auth0 from 'auth0-js';

class Auth {
  auth0 = new Auth0.WebAuth({
    domain: config.domain,
    clientID: config.clientId,
    redirectUri: config.redirect,
    audience: config.audience,
    responseType: 'id_token token',
    scope: 'openid profile email'
  });

  loginCallback = a => {};
  logoutCallback = () => {};

  userProfile = null;
  authFlag = 'isLoggedIn';
  authStatus = this.isAuthenticated // we will create isAuthenticated soon
    ? 'init_with_auth_flag'
    : 'init_no_auth_flag';
  idToken = null;
  idTokenPayload = null;
  accessToken;

  localLogin(authResult) {
    console.log(authResult);
    const {
      accessToken,
      idTokenPayload: { name, email, picture }
    } = authResult;
    localStorage.setItem(this.authFlag, true);
    localStorage.setItem('accessToken', authResult.accessToken);
    localStorage.setItem('user', JSON.stringify({ name, email, picture }));
    this.idToken = authResult.idToken;
    this.userProfile = authResult.idTokenPayload;
    this.accessToken = authResult.accessToken;
    this.loginCallback(state => ({ ...state, name, email, accessToken, picture }));
    this.loginToggleCallback(true);
  }

  localLogout() {
    localStorage.removeItem(this.authFlag);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    this.userProfile = null;
    this.logoutCallback({ loggedIn: false });
  }

  getAccessToken() {
    return this.accessToken;
  }

  login() {
    this.auth0.popup.authorize({}, (err, authResult) => {
      if (err) this.localLogout();
      else {
        this.localLogin(authResult);
        this.accessToken = authResult.accessToken;
      }
    });
  }

  isAuthenticated() {
    return localStorage.getItem(this.authFlag) === 'true';
  }

  logout() {
    this.localLogout();
    this.auth0.logout({
      returnTo: config.logoutUrl,
      clientID: config.clientId
    });
  }
}

const auth = new Auth();

export default auth;

import { createAction } from 'typesafe-actions';

export const AUTH_LOGIN = 'auth/login';

export const loginSuccess = createAction(
  AUTH_LOGIN,
)<firebase.default.auth.UserCredential>();
export const actions = { loginSuccess };

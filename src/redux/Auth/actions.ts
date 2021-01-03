import { createAction } from 'typesafe-actions';

export const AUTH_LOGIN = 'auth/login';

export const AUTH_LOGOUT = 'auth/logout';

export const loginSuccess = createAction(AUTH_LOGIN)<firebase.default.User>();

export const logoutSuccess = createAction(AUTH_LOGOUT)();

export const actions = { loginSuccess, logoutSuccess };

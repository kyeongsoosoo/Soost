import { createAction, createAsyncAction } from 'typesafe-actions';
import { IUser } from '../../lib/type';

export const AUTH_LOGIN = 'auth/login';

export const AUTH_LOGOUT = 'auth/logout';

export const AUTH_PROFILE = 'auth/profile';

export const AUTH_PROFILE_INPUT = 'auth/profileInput';

export const loginSuccess = createAction(AUTH_LOGIN)<IUser>();

export const logoutSuccess = createAction(AUTH_LOGOUT)();

export const profileSuccess = createAction(AUTH_PROFILE)<string>();

export const profileInputSuccess = createAction(AUTH_PROFILE_INPUT)<IUser>();

export const actions = {
  loginSuccess,
  logoutSuccess,
  profileSuccess,
  profileInputSuccess,
};

import { createAction, createAsyncAction } from 'typesafe-actions';
import { IUser } from '../../lib/type';

export const AUTH_LOGIN = 'auth/login';

export const AUTH_LOGOUT = 'auth/logout';

export const AUTH_PROFILE = 'auth/profile';

export const AUTH_PROFILE_SUCCESS = 'auth/profileSuccess';

export const AUTH_PROFILE_FAILURE = 'auth/profileFailure';

export const loginSuccess = createAction(AUTH_LOGIN)<IUser>();

export const logoutSuccess = createAction(AUTH_LOGOUT)();

export const profileSuccess = createAction(AUTH_PROFILE)<string>();

export const actions = { loginSuccess, logoutSuccess, profileSuccess };

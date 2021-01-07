/* eslint-disable consistent-return */
import { createReducer } from 'typesafe-actions';
import { IUser } from '../../lib/type';
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_PROFILE,
  AUTH_PROFILE_INPUT,
} from './actions';
import { AUTH_ACTION } from './type';

interface AUTH_STATE {
  currentUser: IUser | null;
}

const initialState: AUTH_STATE = {
  currentUser: null,
};

const auth = createReducer<AUTH_STATE, AUTH_ACTION>(initialState, {
  [AUTH_LOGIN]: (state, action) => ({
    currentUser: action.payload,
  }),
  [AUTH_LOGOUT]: () => ({
    currentUser: null,
  }),
  [AUTH_PROFILE]: (state, action) => {
    const test = state;
    if (!test.currentUser) return test;
    test.currentUser.photoURL = action.payload;
    return test;
  },
  [AUTH_PROFILE_INPUT]: (_, action) => ({
    currentUser: action.payload,
  }),
});

export default auth;

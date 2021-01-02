import { createReducer } from 'typesafe-actions';
import { AUTH_LOGIN } from './actions';
import { AUTH_ACTION } from './type';

type AUTH_STATE = {
  currentUser: firebase.default.auth.UserCredential | null;
};

const initialState: AUTH_STATE = {
  currentUser: null,
};

const auth = createReducer<AUTH_STATE, AUTH_ACTION>(initialState, {
  [AUTH_LOGIN]: (state, action) => ({
    currentUser: action.payload,
  }),
});

export default auth;

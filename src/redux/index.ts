import { combineReducers } from 'redux';
import auth from './Auth/auth';

export const rootReducer = combineReducers({ auth });

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  const hi = yield 1;
}

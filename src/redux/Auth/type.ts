import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type AUTH_ACTION = ActionType<typeof actions>;

import { IAuthData } from 'models/type';
import { ActionType } from 'redux/actionTypes';

interface loginPendingAction {
  type: ActionType.LOGIN_PENDING;
}

interface loginSUccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: IAuthData;
}

interface loginErrorAction {
  type: ActionType.LOGIN_ERROR;
  payload: string;
}

interface logoutAction {
  type: ActionType.LOGOUT;
}

export type AuthAction =
  | loginPendingAction
  | loginSUccessAction
  | loginErrorAction
  | logoutAction;

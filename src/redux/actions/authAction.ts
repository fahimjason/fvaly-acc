import { IAuthData } from 'models/type';
import { ActionType } from 'redux/actionTypes';

interface loginAction {
  type: ActionType.LOGIN;
  payload: IAuthData;
}

interface logoutAction {
  type: ActionType.LOGOUT;
}

export type AuthAction = loginAction | logoutAction;

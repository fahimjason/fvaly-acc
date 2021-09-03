import { ActionType } from './../actionTypes';
import { AuthAction } from './../actions/authAction';
import { IAuthData } from './../../models/type';

const authReducer = (state: IAuthData | null = null, action: AuthAction) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return action.payload;
    case ActionType.LOGOUT:
      return null;
    default:
      return state;
  }
};

export default authReducer;

import { ActionType } from './../actionTypes';
import { AuthAction } from './../actions/authAction';
import { IAuthData } from './../../models/type';

interface IAuthState {
  data: IAuthData | null;
  status: 'idle' | 'pending' | 'success' | 'error';
  error: string | null;
}

const initialIAuthState: IAuthState = {
  data: null,
  status: 'idle',
  error: null,
};

const authReducer = (
  state: IAuthState | null = initialIAuthState,
  action: AuthAction
) => {
  switch (action.type) {
    case ActionType.LOGIN_PENDING:
      return {
        data: null,
        status: 'pending',
        error: null,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        data: action.payload,
        status: 'success',
        error: null,
      };
    case ActionType.LOGIN_ERROR:
      return {
        data: null,
        status: 'error',
        error: action.payload,
      };
    case ActionType.LOGOUT:
      return initialIAuthState;
    default:
      return state;
  }
};

export default authReducer;

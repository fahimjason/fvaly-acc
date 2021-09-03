import { AuthAction } from './authAction';
import { Dispatch } from 'react';
import AuthService from 'services/AuthService';
import { ActionType } from 'redux/actionTypes';

export const login = (payload: { email: string; password: string }) => {
  return (dispatch: Dispatch<AuthAction>) => {
    AuthService.login(payload).then((data) => {
      dispatch({
        type: ActionType.LOGIN,
        payload: data,
      });
    });
  };
};

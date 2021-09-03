import { ActionType } from '../actionTypes';
import { IProduct } from 'models/type';
import { CartActions } from 'redux/actions/cartAction';

export const addToCart = (payload: IProduct): CartActions => {
  return {
    type: ActionType.ADD_TO_CART,
    payload,
  };
};

export const removeCart = (payload: string): CartActions => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload,
  };
};

export const clearCart = (): CartActions => {
  return {
    type: ActionType.CLEAR_CART,
  };
};

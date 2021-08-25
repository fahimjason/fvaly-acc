import { ActionType } from './../actionTypes';
import { IProduct } from 'models/type';

export const addToCart = (payload: IProduct) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload,
  };
};

export const removeCart = (payload: IProduct) => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload,
  };
};

export const clearCart = (payload: IProduct) => {
  return {
    type: ActionType.CLEAR_CART,
  };
};

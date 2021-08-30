import { ActionType } from './../actionTypes';
import { IProduct } from 'models/type';

export const addToCart = (payload: IProduct) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload,
  };
};

export const removeCart = (payload: string) => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload,
  };
};

export const clearCart = () => {
  return {
    type: ActionType.CLEAR_CART,
    payload: '',
  };
};

export type CartActions =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeCart>
  | ReturnType<typeof clearCart>;

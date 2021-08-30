import { CartActions } from '../actions/cartActions';
import { IProduct } from 'models/type';
import { ActionType } from 'redux/actionTypes';

export const cartReducer = (state: IProduct[] = [], action: CartActions) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return [...state, action];

    case ActionType.REMOVE_FROM_CART: {
      const newState = state.filter((item) => item._id !== action.payload);
      return newState;
    }

    case ActionType.CLEAR_CART:
      return [];

    default:
      return state;
  }
};

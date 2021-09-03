import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cartReducer } from './reducers/cartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'; // no changes here 😀

const rootReducer = combineReducers({
  cart: cartReducer,
});

const middleware = applyMiddleware(ReduxThunk);

export const store = createStore(rootReducer, composeWithDevTools(middleware));

export type AppState = ReturnType<typeof rootReducer>;

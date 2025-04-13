import {
  combineReducers,
  configureStore,
  createAction,
  createReducer,
  PayloadAction,
} from '@reduxjs/toolkit';
import market from '../../../apps/market/src/app/market/market';
import { assetsReducer } from '../../../apps/market/src/app/store/store';

// Define an action to increment or decrement the counter
export const increment = createAction<number>('counter/increment');
export const decrement = createAction<number>('counter/decrement');

// Define the initial state
const initialState: number = 0;

// Define the counterReducer
const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(
      increment,
      (state, action: PayloadAction<number>) => state + action.payload
    )
    .addCase(
      decrement,
      (state, action: PayloadAction<number>) => state - action.payload
    );
});

let shellReducers: any = {
  counter: counterReducer,
};

const store = configureStore({
  reducer: shellReducers,
});

// @ts-ignore
import('marketApp/Store').then((market) => {
  shellReducers = { ...shellReducers, assets: market.assetsReducer };
  store.replaceReducer(combineReducers(shellReducers));
});

export default store;

import {
  configureStore,
  createAction,
  createReducer,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Assets } from './assets';
import { Crypto } from './crypto';

export const assetsInitialState: Assets = {
  crypto: [],
};

export const addCrypto = createAction<Crypto>('assets/crypto-tile/add');

export const assetsReducer = createReducer(assetsInitialState, (builder) => {
  builder.addCase(addCrypto, (state, action: PayloadAction<Crypto>) => {
    return { ...state, crypto: [...state.crypto, action.payload] };
  });
});

export const store = configureStore({
  reducer: {
    assets: assetsReducer,
  },
});

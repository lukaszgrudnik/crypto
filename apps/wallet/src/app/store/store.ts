import {
  configureStore,
  createAction,
  createReducer,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Assets } from './assets';
import { Crypto } from './crypto';

const assetsInitialState: Assets = {
  crypto: [
    {
      rank: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      price_usd: 87873.8,
      changeIn24h: 3.4,
    },
  ],
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

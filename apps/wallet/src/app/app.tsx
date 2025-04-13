import { Provider } from 'react-redux';
import React from 'react';
import Wallet from './wallet/wallet';
import { store } from './store/store';

export const App = () => {
  return (
    <div className="app">
      <Wallet></Wallet>
    </div>
  );
};

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;

import Market from './market/market';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from './store/store';

export const App = () => {
  return (
    <div className="app">
      <Market></Market>
    </div>
  );
};

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;

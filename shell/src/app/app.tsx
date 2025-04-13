import React, { lazy, Suspense, useEffect, useState } from 'react';
import './app.scss';
import { Nav } from './nav/nav';
import { Provider } from 'react-redux';
import store from './store';

// @ts-ignore
const WalletApp = lazy(() => import('walletApp/Wallet'));
// @ts-ignore
const MarketApp = lazy(() => import('marketApp/Market'));

const App: React.FC = () => {
  const [nav, setNav] = useState('wallet');

  const views: Record<string, React.ReactNode> = {
    wallet: <WalletApp />,
    market: <MarketApp />,
  };

  return (
    <div className="app">
      <Nav select={setNav} />
      <div className="content">
        <Suspense fallback={null}>
          {views[nav] || <div>Did not found</div>}
        </Suspense>
      </div>
    </div>
  );
};

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;

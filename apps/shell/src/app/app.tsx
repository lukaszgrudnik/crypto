import { lazy, Suspense } from 'react';
import * as React from 'react';

const Market = lazy(() => import('market/Market'));

export const App: React.FC = () => {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Market />
      </Suspense>
    </div>
  );
};

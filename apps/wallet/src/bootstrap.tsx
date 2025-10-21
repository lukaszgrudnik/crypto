import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Wallet from './app/wallet';

const rootElement = document.getElementById('root') as HTMLElement;

const root = createRoot(rootElement);
root.render(
  <div>
    <Wallet />
  </div>,
);

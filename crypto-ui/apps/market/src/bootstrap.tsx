import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Market from './app/market';

const rootElement = document.getElementById('root') as HTMLElement;

const root = createRoot(rootElement);
root.render(
  <div>
    <Market />
  </div>,
);

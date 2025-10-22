import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/app';

const rootElement = document.getElementById('root') as HTMLElement;

const root = createRoot(rootElement);
root.render(
  <div>
    <App />
  </div>,
);

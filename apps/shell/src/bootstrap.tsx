import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from './router';

const rootElement = document.getElementById('root') as HTMLElement;

const root = createRoot(rootElement);
root.render(<RouterProvider router={router} />);

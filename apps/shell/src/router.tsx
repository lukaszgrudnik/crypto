import { createBrowserRouter } from 'react-router';
import { App } from './app/app';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
]);

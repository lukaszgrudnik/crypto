import { createBrowserRouter } from 'react-router';
import { App } from './app/app';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: 'market',
        lazy: {
          Component: async () =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            await import('marketApp/Market').then((c) => c.Market),
        },
      },
      {
        path: 'wallet',
        lazy: {
          Component: async () =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            await import('walletApp/Wallet').then((c) => c.Wallet),
        },
      },
    ],
  },
]);

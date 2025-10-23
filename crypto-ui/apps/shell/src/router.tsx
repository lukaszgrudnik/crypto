import { createBrowserRouter } from "react-router";
import { App } from "./app/app";
import { lazy, Suspense } from "react";

const Market = lazy(() => import('market/Market'));
const Wallet = lazy(() => import('wallet/Wallet'));


let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/market",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Market />
      </Suspense>
    )
  },
  {
    path: "/wallet",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Wallet />
      </Suspense>
    )
  }
]);

export default router;
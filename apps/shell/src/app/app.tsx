import * as React from 'react';
import { NavLink, Outlet } from 'react-router';

export const App: React.FC = () => {
  return (
    <div>
      <nav>
        <NavLink to="wallet">Wallet</NavLink>
        <NavLink to="market">Market</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

import * as React from 'react';
import { Outlet } from 'react-router';

export const App: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

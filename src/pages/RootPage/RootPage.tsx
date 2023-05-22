import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const RootPage: FC = () => {
  return (
      <main>
        <Outlet />
      </main>
  );
};

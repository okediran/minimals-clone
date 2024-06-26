// PrivateRoute.tsx

import React from 'react';
import {Route, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode; // Use ReactNode instead of React.FC
  isLoggedIn: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  path,
  element,
  isLoggedIn,
}) => {
  return isLoggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;

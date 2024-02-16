import React, { FC } from 'react';
import { Route, Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
  children: React.ReactNode;
  path?: string;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isAuthenticated,
  authenticationPath,
  children,
  path,
}) => {
  if (!isAuthenticated) {
    return <Navigate to={authenticationPath} />;
  }

  return <Route path={path}>{children}</Route>;
};

export default ProtectedRoute;


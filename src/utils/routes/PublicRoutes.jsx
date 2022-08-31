import React, { useContext } from 'react';
import AuthContext from '../store/auth_context';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Navigate to="/todo" /> : <Outlet />;
};

export default PublicRoutes;

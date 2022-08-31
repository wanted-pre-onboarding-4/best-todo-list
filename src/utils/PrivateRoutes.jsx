import React, { useContext } from 'react';
import AuthContext from '../store/auth_context';
import { Outlet, Navigate } from 'react-router-dom';
const PrivateRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;

import React from 'react';
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLoginAndJoin: (type, email, password) => {},
});

export default AuthContext;

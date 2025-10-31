import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const defaultUser = {
    id: 1,
    email: 'admin@dokterresidency.id',
    role: 'admin',
    name: 'Admin',
    avatar: 'https://ui-avatars.com/api/?name=Admin&background=3B82F6&color=fff'
  };

  const [user] = useState(defaultUser);

  const logout = () => {
    // Logout disabled - no authentication required
    console.log('Logout disabled - direct access mode');
  };

  const value = {
    user,
    logout,
    loading: false,
    isAuthenticated: true
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

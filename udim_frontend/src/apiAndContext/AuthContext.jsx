import React, { createContext, useState, useEffect } from 'react';

const ContextProvider = createContext();

const AuthContext = ({ children }) => {
  // Load auth state from local storage if available, or initialize it
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem('auth');
    return storedAuth ? JSON.parse(storedAuth) : {};
  });

  // Update local storage whenever auth state changes
  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  return (
    <ContextProvider.Provider value={{ auth, setAuth }}>
      {children}
    </ContextProvider.Provider>
  );
};

export { AuthContext, ContextProvider };

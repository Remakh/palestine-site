import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  const login = (token) => {
    localStorage.setItem('authToken', token);
    setAuthToken(token);
  };
  
  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
  };

  const value = {
    authToken,
    login,
    logout,
    isAuthenticated: !!authToken 
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
    return useContext(AuthContext);
};
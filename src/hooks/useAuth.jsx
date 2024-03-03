import { createContext, useContext, useState } from "react";
import { loginCall, logoutCall } from "../apiUtils"

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  const login = async ( data ) => {
      const token = await loginCall(data)
      localStorage.setItem('authToken', token);
      setAuthToken(token);
      return token
  };
  
  const logout = async ( config ) => {
    const response  = await logoutCall(config)
    localStorage.removeItem('authToken');
    setAuthToken(null);
    return response
  };

  const value = {
    authToken,
    login,
    logout,
    isAuthenticated : !!authToken
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
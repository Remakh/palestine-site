import React, { createContext, useContext, useState } from 'react'

const AuthContext = useContext();

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const login = () => {
        
    }

}

const useAuth = () => {
  return (
    <div>
      
    </div>
  )
}

export default useAuth

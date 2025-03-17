import { jwtDecode } from "jwt-decode";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded); 
      setUserId(decoded.id);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, userId, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

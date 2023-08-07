import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { loginUser } from "../Reducers/loginReducer"; // Import loginUser from your reducer

export const AuthContext = createContext();

export const AuthProvider = ({ children, required }) => {
  const [user, setUser] = useState({ isAuthenticated: false });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser({ ...storedUser, isAuthenticated: true });
    }
  }, []);

  if (!user.isAuthenticated && required) {
    navigate("/login");
    return null;
  }

  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/");
    setUser({ isAuthenticated: false }); // Reset user state when logging out
  };

  return (
    <AuthContext.Provider value={{ user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider
export const useAuthContext = () => useContext(AuthContext);
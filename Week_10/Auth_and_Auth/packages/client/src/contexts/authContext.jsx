import { createContext, useState } from "react";

export const authContext = createContext();

const initialAuthState = {
  isAuthenticated: false,
  user: null,
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuthState);

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

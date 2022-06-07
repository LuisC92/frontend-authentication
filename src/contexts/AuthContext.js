import React from "react";

export const AuthContext = React.createContext(null);

export default function AuthContextProvider(props) {
  const [auth, setAuth] = React.useState(false);
  const [user, setUser] = React.useState({})
  return (
    <AuthContext.Provider 
      value={{
          auth, 
          setAuth, 
          user, 
          setUser}}>
      {props.children}
    </AuthContext.Provider>
  );
}

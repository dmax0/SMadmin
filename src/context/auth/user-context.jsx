import avatar from "@assets/images/1.jpg";
import React from "react";

const user = 
{
  name: "Dragon Max",
  email: "",
  avatar: "http://cdn.dmax.wang/assets/avatar.jpg",
  token: "",
};
const UserContext = React.createContext(user);
export const UserProvider = (props) => {
  return <UserContext.Provider value={user} {...props} />;
};

const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
};
const useAuth = () => {};
export { useUser, useAuth };

import React from "react";

export const AuthContext = React.createContext();

export const AuthProvider = () => {
    const [user, setUser] = React.useState(null);
}
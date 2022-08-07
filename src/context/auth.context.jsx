import React from "react";

const AuthContext = React.createContext();

export const AuthProvider = () => {
    const [user, setUser] = React.useState(null);
}
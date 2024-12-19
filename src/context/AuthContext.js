// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, email, password) => {
        // Here you would typically verify with a backend service.
        // For now, we will just set the user state.
        setUser({ username, email });
        console.log('User logged in:', { username, email }); // Log user info for debugging
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

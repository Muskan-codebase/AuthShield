import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true); // optional, to prevent flicker

    // check login on app load
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/verify",
                    { withCredentials: true }
                );

                if (res.status === 200) {

                    setIsAuthenticated(true);
                }

            } catch {

                setIsAuthenticated(false);

            } finally {
                setLoading(false);
            }
        };

        checkAuth();

    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
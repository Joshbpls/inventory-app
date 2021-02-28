import React, {createContext, useState} from "react";

export interface AuthContextProperties {
    authenticated: boolean
    setAuthenticated: (authed: boolean) => void
}

export const AuthContext = createContext<AuthContextProperties>({ authenticated: true, setAuthenticated: () => {}});

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const [authenticated, setAuthenticated] = useState(true);
    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}
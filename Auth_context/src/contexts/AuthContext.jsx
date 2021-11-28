import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const toggleAuth = (change) => {
        setIsAuth(change)
    }
    const [token, setToken] = useState("")
    const handleAuth = () => {
        setToken(Date.now)
        setIsAuth(true)
    }

    return <AuthContext.Provider value={{isAuth,handleAuth,toggleAuth,token}}>{children }</AuthContext.Provider>
}
import { createContext, useState } from "react";


export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState("")
    const handleToken = (newToken) =>{
        setToken(newToken)
    }
    return <AuthContext.Provider value={{token, handleToken}}>{children}</AuthContext.Provider>
}

export {AuthContextProvider}
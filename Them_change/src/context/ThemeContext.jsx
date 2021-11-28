import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const [dark, setDark] = useState({});
    const handleDark = () => {
        if (isDark) {
            setDark({
                height: "1024px",
                width: "1440px",
                borderRadius: " 0px",
                background: "#1F2327",

            })
        }
        setIsDark(false)
    }
    const [light, setLight] = useState({});
    const handleLight = ()=>{
        if (!isDark) {
            setLight({
                height: "500px",
                width: "1440px",
                borderRadius: " 0px",
                background: "#F5F6FA",
            })
        }
        setIsDark(true)
    }

    return <ThemeContext.Provider value={{handleDark,handleLight,light,dark,isDark}}>{children}</ThemeContext.Provider>
}
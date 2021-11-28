import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";
import "./button.css"
export const Homepage = () => {
    const {handleLight,handleDark,isDark}=useContext(ThemeContext)

    return <div>
        <button className="btn"  onClick={() => {
            if (isDark) {
                handleDark();
            } else {
                handleLight()
            }
        }}>{isDark ? "Light" : "Dark"}</button>
        
    </div>
}
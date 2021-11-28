import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export const Navbar = () => {
    const { isAuth}=useContext(AuthContext);
    return (
        <div>
            <button>Home</button>
            <button >{!isAuth?"Login":"logout" }</button>

        </div>
    )
        
      
}
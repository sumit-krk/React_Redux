import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"


const Login = () => {
    const {handleToken} = useContext(AuthContext)
    return (
        <div style={{marginTop: '20px'}}>
            <input type="email" placeholder="enter email" />
            <br />
            <br />
            <input type="password" placeholder="enter password" />
            <br />
            <br />
            <button onClick={()=>{
                handleToken("12345")
            }}>Login</button>
        </div>
    )
}

export { Login }
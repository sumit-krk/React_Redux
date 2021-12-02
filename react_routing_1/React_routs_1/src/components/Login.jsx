import { useState } from "react"

export const Login = () => {
    const [login, setLogin] = useState(false)
    const handleLogin = (e) => {
        e.preventDefault();

        setLogin(!login)
    }
    return <form>
        <input type="text" placeholder="Enter the user id"></input>
        <input type="password" placeholder="Enter your password"></input>
        <button onSubmit={() => {
            handleLogin()
        }}>Login</button>
    </form>
}
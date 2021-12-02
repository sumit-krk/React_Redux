import { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

const PrivateRoute = ({children, path}) => {
    const {token} = useContext(AuthContext)

    if(!token){
        return <Redirect to="/login" />
    }

    return (
        <Route path = {path} >
            {children}
        </Route>
    )
}

export {PrivateRoute}
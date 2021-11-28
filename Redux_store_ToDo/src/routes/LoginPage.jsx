import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Redirect } from "react-router"
import { Login } from "../components/Login"
import { loginFailure, loginSuccess } from "../redux/auth/action"


export const LoginPage=()=>{
    const isAuth = useSelector(store=>store.auth.isAuth)
    const dispatch = useDispatch()
    const handleLogin = ({email, password}) => {
        if(email === "game" && password === "game"){
            const action = loginSuccess("jehf3829hufnui23wh73")
            dispatch(action)
        }else{
            const action = loginFailure("wrong credentials")
            dispatch(action)
        }
    }
    if(isAuth){
        return <Redirect to="/" />
    }
    return (
        <div>
            <Login handleLogin={handleLogin}/>
        </div>
    )
}
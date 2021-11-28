import { TodoInput } from "../components/TodoInput"
import { TodoList } from "../components/TodoList"
import { useSelector } from "react-redux"
import { Redirect } from "react-router"


export const Home = () =>{
    const isAuth = useSelector(store=>store.auth.isAuth)

    if(!isAuth){
        return <Redirect to="/login" />
    }
    return (
        <div>
            <TodoInput />
            <TodoList />
        </div>
    )
}
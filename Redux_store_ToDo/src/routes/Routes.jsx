import { Link, Route, Switch } from "react-router-dom"
import { Home } from "./Home"
import { LoginPage } from "./LoginPage"



const Routes = () => {

    return(
        <>
        <div>
        <Link to="/">Home</Link>
        <Link style={{marginLeft:'15px'}} to="/login">Login</Link>
        </div>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route>
                404 Error
            </Route>
        </Switch>
        </>
    )
}

export {Routes}
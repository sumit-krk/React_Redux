import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import './App.css';
import { Registration } from "./Components/Registration";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Profile } from "./Components/Profile";


function App() {
  return (
    <div className="App">
      <Link style = {{marginLeft : "20px"}} to = "/">Home</Link>
      <Link style = {{marginLeft : "20px"}} to = "/registration">Registration</Link>
      <Link style = {{marginLeft : "20px"}} to = "/login"> Login </Link>
      <Link style = {{marginLeft : "20px"}} to = "/profile">Dashboard</Link>
      <hr />
      <div>
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/registration">
            <Registration />
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path = "/profile">
            <Profile />
          </Route>
        </Switch>
      </div>

    </div>
  );
}

export default App;

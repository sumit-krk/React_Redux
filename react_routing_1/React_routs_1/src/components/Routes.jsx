import React from 'react'
import { NavBar } from './NavBar'
import {Route , Switch} from "react-router-dom"
import { Home } from './Home'
import { Contact } from './Contact'
import { About } from './About'
import { Services } from './Services'
import { Login } from './Login'
export const Routes = () => {
    return (
      <>
        <NavBar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="login">
            <Login></Login>
          </Route>
        </Switch>
      </>
    ); 

    
}

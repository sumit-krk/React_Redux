import './App.css';

import React from 'react'
import {NavBar} from "./components/Navbar"
import { Switch,Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ShowCart from './components/ShowCart';
export const App = () => {
  return (
    <div className="App">
      <h1>Proucts Page</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
        <Route path="/showcart">
          <ShowCart/>
        </Route>
        <Route >
         <h1>Error :404 ,item not found</h1>
        </Route>
      </Switch>
    </div>
  )
}
export default App
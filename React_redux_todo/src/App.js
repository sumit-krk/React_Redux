import {Home} from "./Components/Home";
import {One} from "./Components/One";

import './App.css';
import {Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/todo/:id">
          <One />
        </Route>
      
      </Switch>
     
    </div>
  );
}

export default App;

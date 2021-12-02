import { Hello } from "./components/Cart";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About"
import { Navbar } from "./components/Navbar";
function App() {
	return (
    <div>
      <div style={{textAlign:"center"}}>
        <Hello></Hello>
      </div>

      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route path="/about/me">
          <h1>sumit Kumar</h1>
        </Route>

        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
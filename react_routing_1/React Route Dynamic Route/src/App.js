import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { ProductDetails } from './components/ProductDetails';
import { Products } from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/products'>
        <Products />
      </Route>
      <Route exact path='/products/:id'>
        <ProductDetails />
      </Route>
      <Route>404 not found</Route>
      </Switch>
    </div>
  );
}

export default App;
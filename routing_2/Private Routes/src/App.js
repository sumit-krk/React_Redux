import { Switch,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';
import { DashboardPage } from './pages/DashboardPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SettingsPage } from './pages/SettingsPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <PrivateRoute path = "/dashboard">
          <DashboardPage />
        </PrivateRoute>
        <PrivateRoute path = "/settings">
          <SettingsPage />
        </PrivateRoute>
        <Route path = "/login">
          <LoginPage />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
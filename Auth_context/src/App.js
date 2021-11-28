import { useContext } from 'react';
import { Navbar } from './components/Navbar';
import './App.css';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const { token, handleAuth,isAuth}=useContext(AuthContext)
      if(!isAuth){
        return (<>
          <Navbar />
          <h1>User need to login first</h1>

      <div>
        <input type="text" placeholder="enter the your name"></input>
        <input type="password" placeholder="enter your password"></input>
            <input type="submit" onClick={() => {
              handleAuth()
        }
          
    }></input>
      </div>
        </>)
      }
  return <>
    <Navbar></Navbar>
    <h1>This is the home page</h1>
    <div>user token is {token }</div>
    
        </>

}

export default App;

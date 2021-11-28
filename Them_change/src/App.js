import './App.css';
import { Homepage } from './components/Hompage';
import {useContext} from "react"
import { ThemeContext } from './context/ThemeContext';
function App() {
  const {isDark,dark,light} = useContext(ThemeContext)
  return <div style={isDark ? dark : light} className="App">
    <Homepage></Homepage>
    <h3>On clicking the button the theme of the page changes to dark to light.</h3>
  </div>

}

export default App;

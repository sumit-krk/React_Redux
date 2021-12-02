import { Link } from "react-router-dom"
export const Navbar = () =>{
   return(
    <div style={{
        display:"flex",
        justifyContent:"space-around",
        width:"500px",
        margin:"auto"
    }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contactUs">Contact Us</Link>
        <Link to="/users">Users</Link>
    </div>
   )
}
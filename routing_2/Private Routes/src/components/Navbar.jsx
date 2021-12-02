import { Link } from "react-router-dom"


const Navbar = () =>{
    return (
        <div >
            <Link to="/" >
                Home
            </Link>
            <Link to="/dashboard" style={{marginLeft: '20px'}}>
                Dashboard
            </Link>
            <Link to="/settings" style={{marginLeft: '20px'}}>
                settings
            </Link>
            <Link to="/login" style={{marginLeft: '20px'}}>
                login
            </Link>
        </div>
    )
}

export {Navbar}
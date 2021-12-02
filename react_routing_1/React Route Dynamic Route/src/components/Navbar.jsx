import { Link } from "react-router-dom"

const Navbar = () =>{
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', width: '300px', marginLeft: '540px'}}>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
        </div>
    )
}

export {Navbar}
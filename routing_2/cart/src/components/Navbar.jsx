import React from 'react'
import { Link } from 'react-router-dom'

const routes = [
    {
        to: "/home",
        title:"Home"
    },
    {
        title: "All Products",
        to:"/products"
    },
    {
        title: "Cart",
        to:"/showcart"
    }
]

export const NavBar = () => {
    return (
        <div>
            {
                routes.map(({ to, title })=>{
                    return <Link style={{margin:"5px"}} to={to}>{title }</Link>
                })
            }
        </div>
    )
}
export default NavBar
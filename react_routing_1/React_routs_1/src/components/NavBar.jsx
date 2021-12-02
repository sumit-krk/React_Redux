import React from 'react'
import { Link } from "react-router-dom"
const links = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/contact",
        title: "Contact"
    },
    {
        to: "/about",
        title: "About"
    }, {
        to: "/services",
        title: "Services"
    }, {
        to: "/login",
        title: "Login"
    },
]
function NavBar() {

    return (
        <>
            <div style={{marginTop:"15px"}}>
                {
                    links.map((el) => {
                        return <Link style={{padding: "3px", margin: "5px" }} to={el.to}>{el.title}</Link>
                    })
                }

            </div>
        </>
    )
}

export { NavBar }

import React from "react"
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink to='/dashboard'>Home</NavLink>
            <NavLink to='/games'>Games</NavLink>
            <NavLink to='/library'>Library</NavLink>
            <NavLink to='/learn'>Learn</NavLink>    
        </nav>
    )
}

export default Nav
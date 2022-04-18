import React from "react"
import {ReactComponent as Logo} from '../../assets/img/Icon.svg'
import Nav from "../Nav/Nav"
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <Nav />
        </header>
    )
}

export default Header
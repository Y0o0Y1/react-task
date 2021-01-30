import React from 'react'
import Navbar from "./Navbar"
import Logo from "./Logo"
import "./Header.scss"
const Header = () => {
    return (
        <header className="header">
            <Navbar items={["360 planner ","Her","Him","The Wedding"]}/>
            <Logo/>
            <Navbar items={["Wedding ","Gallery","Ideas & More"]} />
        </header>

        )
}

export default Header

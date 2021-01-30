import React from 'react'
import logo from "./logo.png"
import "./Logo.scss"
const Logo = () => {
    return (
        <div className="logo">
            <a href="/">
                <img src={logo} alt="logo" className="logo-img"/>
            </a>
        </div>
    )
}

export default Logo

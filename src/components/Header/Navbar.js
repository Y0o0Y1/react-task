import React from 'react'
import "./Navbar.scss"
import DropDown from "./DropDown"

const Navbar = ({items}) => {
    return (
        <nav className ="Navbar">
            <ul className="u-list">
                {items.map(item =>{
                    return <li className = "List-item dropdown"><DropDown/>{item} </li>
                })}
            </ul>
        </nav>        
    )
}
export default Navbar

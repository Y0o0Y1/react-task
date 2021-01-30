import React from 'react'
import "./Navbar.scss"
const Navbar = ({items,text}) => {
    return (
            <nav className ="Navbar">
            <ul>
                {items.map(item =>{
                    return <li className = "List-item">{item}</li>
                })}
            </ul>
        </nav>        
    )
}
export default Navbar

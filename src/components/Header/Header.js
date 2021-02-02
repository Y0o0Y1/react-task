import React ,{useState} from 'react'
import Navbar from "./Navbar"
import Logo from "./Logo"
import "./Header.scss"
import { ReactComponent as CloseMenu } from "./x.svg";
import { ReactComponent as MenuIcon } from "./menu.svg";
const Header = () => {    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div>
        <header className="header">
            <Navbar items={["360 planner ","Her","Him","The Wedding"]}/>
            <Logo/>
            <Navbar items={["Wedding ","Gallery","Ideas & More"]} />
        </header>
        <div className="mobile-view">
        <Logo/>
          <div className="burger-btn" onClick={handleClick}>
          {click ? (<CloseMenu className="menu-icon" />) : 
                    (<MenuIcon className="menu-icon" />)}
            <svg viewBox="0 0 100 80" width="40" height="40">
            </svg>
          </div>
          </div>
        </div>
        )
}

export default Header

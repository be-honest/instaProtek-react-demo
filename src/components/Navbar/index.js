import React from "react"
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from "./NavbarElements"
import Logo from '../../images/Logo.png'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="instaProtek Logo" style={{width:"50%"}}/>
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
          <NavLink to="/" activeStyle> 
            Home
          </NavLink>
          <NavLink to="/" activeStyle> 
            Products
          </NavLink>
          <NavLink to="/" activeStyle> 
            Corporate
          </NavLink>
          <NavLink to="/" activeStyle> 
            Buy Protection
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Sign In</NavBtnLink> 
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar

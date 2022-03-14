import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";




function MainNavBar() {
const[navShow, setNavShow] =useState(false)
console.log("refreshed")
  return (
    <div>
      <Navbar color="faded" light className="mainNav">
        <NavbarBrand className="me-auto" href="/">
          Plugged N
        </NavbarBrand>
        <div className="nav__username">UserName</div>
        <NavbarToggler className="me-2" onClick={() => setNavShow(!navShow)} />
        <Collapse isOpen navbar>
          {navShow ? (
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Login">Profile</NavLink>
              </NavItem>
            </Nav>
          ) : null}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavBar
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";

function MainNavBar({ user }) {
  const [navShow, setNavShow] = useState(false);

  return (
    <div>
      <Navbar color="faded" light className="mainNav">
        <NavbarBrand className="me-auto" href="/Main">
          Plugged N
        </NavbarBrand>
        {user ? (
          <div className="nav__username">{user.username}</div>
        ) : (
          <div className="nav__username"></div>
        )}
        <NavbarToggler className="me-2" onClick={() => setNavShow(!navShow)} />
        <Collapse isOpen navbar>
          {navShow ? (
            <Nav navbar>
              <NavItem>
                <Link to="/Main">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/TaskBoard">Task Board</Link>
              </NavItem>
              <NavItem>
                <Link to="/Login">Profile</Link>
              </NavItem>
            </Nav>
          ) : null}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Button,
 
} from "reactstrap";

function MainNavBar({ user, setUser }) {
  const [navShow, setNavShow] = useState(false);
  function handleLogout(e) {
    fetch("/logout", {
      method: "DELETE",
    }).then(setUser(""));
  }
  return (
    <div>
      <Navbar color="faded" light className="mainNav">
        <NavbarBrand className="me-auto" href="/">
          Plugged N
        </NavbarBrand>
        {user ? (
          <div className="nav__username">
            <b>
             Welcome, {user.username}
            </b>
          </div>
        ) : (
          <div className="nav__username"></div>
        )}
        <NavbarToggler className="me-2" onClick={() => setNavShow(!navShow)} />
        <Collapse isOpen navbar>
          {navShow ? (
            <Nav navbar>
              <NavItem onClick={() => setNavShow(!navShow)}>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem onClick={() => setNavShow(!navShow)}>
                <Link to="/TaskBoard">Task Board</Link>
              </NavItem>
              {user ? (
                <NavItem onClick={() => setNavShow(!navShow)}>
                  <Link to="/Profile">Profile</Link>
                </NavItem>
              ) : (
                <NavItem onClick={() => setNavShow(!navShow)}>
                  <Link to="/Login">Login</Link>
                </NavItem>
              )}
              {user ? (
                <NavItem onClick={() => setNavShow(!navShow)}>
                  <Button onClick={handleLogout}>Log Out</Button>
                </NavItem>
              ) : null}
            </Nav>
          ) : null}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavBar;

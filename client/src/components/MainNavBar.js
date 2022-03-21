import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Button,
  Toast,
  ToastHeader,
  ToastBody,
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
              <NavItem onClick={() => setNavShow(!navShow)}>
                <Link to="/Main">Home</Link>
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
      {/* <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>Reactstrap</ToastHeader>
          <ToastBody>
            This is a toast on a white background — check it out!
          </ToastBody>
        </Toast>
      </div> */}
    </div>
  );
}

export default MainNavBar;

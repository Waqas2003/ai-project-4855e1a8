import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Hollywood Website</Navbar.Brand>
      <Nav className="mr-auto">
        <NavItem>
          <NavLink href="/movies">Movies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/celebrities">Celebrities</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/news">News</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
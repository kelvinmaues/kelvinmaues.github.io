import React from 'react';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';
import '../../style/App.css';
import logo from '../../assets/avatar_me_3.svg';

const Header = () => {
  return (
    <Navbar className="App-header nav-pull-right" fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">
            <img src={logo} className="App-logo responsive" alt="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse className="App-header-collapse">
        <Nav pullRight>
          <NavItem eventKey={1} href="#">ABOUT ME</NavItem>
          <NavItem eventKey={1} href="#">SKILLS</NavItem>
          <NavItem eventKey={1} href="#">EDUCATION</NavItem>
          <NavItem eventKey={1} href="#">EMPLOYMENT</NavItem>
          <NavItem eventKey={2} href="#">PORTFOLIO</NavItem>
          <NavItem eventKey={2} href="#">BLOG</NavItem>
          <NavItem eventKey={2} href="#">CONTACT</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

import React from "react";
import "./header.css";
import {
  Button,
  Collapse,
  Container,
  Form,
  NavLink,
  Navbar,
} from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <div className="header">
        <div className="d-flex justify-center align-items-center">
          <h2 className="nav-title">Job Seekr</h2>
          <div className="nav-items ms-0 ms-sm-2 ms-md-3 ms-lg-4">
            <NavLink>Statistics</NavLink>
            <NavLink>Applied Job</NavLink>
            <NavLink>Blog</NavLink>
          </div>
        </div>
        <div className="primary-btn">Start Applying</div>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="d-block d-lg-none d-md-none"
        />
      </div>
    </Container>
  );
};

export default Header;

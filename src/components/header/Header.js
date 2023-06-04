import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { Container, NavLink, Navbar } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(route);
  };
  return (
    <Container>
      <div className="header">
        <div className="d-flex justify-center align-items-center">
          <h2 className="nav-title">Job Seekr</h2>
          <div className="nav-items ms-0 ms-sm-2 ms-md-3 ms-lg-4">
            <NavLink onClick={() => handleNavigate("/home")}>Home</NavLink>
            <NavLink onClick={() => handleNavigate("/statistics")}>
              Statistics
            </NavLink>
            <NavLink onClick={() => handleNavigate("/applied-jobs")}>
              Applied Job
            </NavLink>
            <NavLink onClick={() => handleNavigate("/blog")}>Blog</NavLink>
          </div>
        </div>
        <Link className="primary-btn">Start Applying</Link>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="d-block d-lg-none d-md-none"
        />
      </div>
    </Container>
  );
};

export default Header;

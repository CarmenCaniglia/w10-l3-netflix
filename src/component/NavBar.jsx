import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import kids from "../assets/kids_icon.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="mb-4">
      <Container fluid className="ps-md-3">
        <Navbar.Brand href="/">
          <img src={logo} alt="Netflix logo" width="80" />
        </Navbar.Brand>

        <Navbar.Collapse id="right-navbar-nav">
          <Nav>
            <Link
              className={`nav-link${
                location.pathname === "/home" ? " active" : ""
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`nav-link${
                location.pathname === "/" ? " active" : ""
              }`}
              to="/"
            >
              Tv Shows
            </Link>
            <Link
              className={`nav-link${
                location.pathname === "/Movies" ? " active" : ""
              }`}
              to="/"
            >
              Movies
            </Link>
            <Link
              className={`nav-link${
                location.pathname === "/recentlyAdded" ? " active" : ""
              }`}
              to="/"
            >
              Recently Added
            </Link>
            <Link
              className={`nav-link${
                location.pathname === "/MyList" ? " active" : ""
              }`}
              to="/"
            >
              My List
            </Link>
          </Nav>
        </Navbar.Collapse>

        <Nav className="ms-auto me-2 d-flex flex-row flex-nowrap align-items-center  ">
          <Nav.Link href="/">
            <i className="bi bi-search me-4 me-lg-0"></i>
          </Nav.Link>
          <Nav.Link
            className="d-none d-sm-block me-4 me-lg-0 fs-7 fw-bold"
            href="/"
          >
            KIDS
          </Nav.Link>
          <Nav.Link>
            <i className="bi bi-bell-fill me-4 me-lg-0 "></i>
          </Nav.Link>

          <NavDropdown
            direction="start"
            href="/"
            aria-expanded="false"
            drop="start"
            title={<img src={kids} alt="icona profilo bimbi" width="32px" />}
          >
            <Link
              className={`nav-link${
                location.pathname === "/edit" ? " active" : ""
              }`}
              to="/edit"
            >
              Edit profile
            </Link>
            <Link
              className={`nav-link${
                location.pathname === "/settings" ? " active" : ""
              }`}
              to="/settings"
            >
              Settings
            </Link>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Something else here</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Toggle
          variant="secondary"
          aria-controls="right-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
      </Container>
    </Navbar>
  );
};

export default NavBar;

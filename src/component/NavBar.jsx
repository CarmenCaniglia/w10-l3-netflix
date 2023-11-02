import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import logo from "../assets/logo.png"
import kids from "../assets/kids_icon.png"

const NavBar = ()=>{
    return(
        <Navbar expand="lg" className="mb-4" >
        <Container fluid className="ps-md-3">
          <Navbar.Brand href="index.html">
            <img src={logo} alt="Netflix logo" width="80"/>
          </Navbar.Brand>

          <Navbar.Collapse id="right-navbar-nav">
            <Nav>
              <Nav.Link aria-current="page" href="index.html">
                Home
              </Nav.Link>
              <Nav.Link href="index.html" active>
                Tv Shows
              </Nav.Link>
              <Nav.Link href="index.html">Movies</Nav.Link>
              <Nav.Link href="index.html">Recently Added</Nav.Link>
              <Nav.Link href="index.html">My List</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Nav className="ms-auto me-2 d-flex flex-row flex-nowrap align-items-center  ">
            <Nav.Link href="index.html">
              <i className="bi bi-search me-4 me-lg-0"></i>
            </Nav.Link>
            <Nav.Link className="d-none d-sm-block me-4 me-lg-0 fs-7 fw-bold" href="index.html">
              KIDS
            </Nav.Link>
            <Nav.Link>
              <i className="bi bi-bell-fill me-4 me-lg-0 "></i>
            </Nav.Link>

            <NavDropdown
              direction="start"
              href="index.html"
              aria-expanded="false"
              drop="start"
              title={<img src={kids} alt="icona profilo bimbi" width="32px" />}>
              <NavDropdown.Item href="index.html">Edit profile</NavDropdown.Item>
              <NavDropdown.Item href="index.html">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="index.html">Something else here</NavDropdown.Item>
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
    )
}

export default NavBar
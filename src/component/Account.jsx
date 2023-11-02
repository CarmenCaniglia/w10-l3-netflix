import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import avatar from "../assets/avatar.png"

const Account = () => {
  return (
    <Container>
      <Row className="justify-content-md-center mb-5">
        <Col xs lg="8">
          <h1 className="fw-bold">Edit Profile</h1>
          <hr />
          <div className="d-flex flex-column flex-md-row pe-5">
            <div className="me-3">
              <div className="position-relative">
                <img className="mb-3" src={avatar} alt="avatar icon" width="120px" />
                <span className="position-absolute bottom-0 start-0 ms-3 mt4 translate-middle badge rounded-pill bg-black">
                  <i className="bi bi-pencil-fill"></i>
                </span>
              </div>
            </div>
            <div className="flex-grow-1">
              <div className="bg-secondary">
                <p className="fs-4 fw-bold p-2">Stitch#10</p>
              </div>
              <p className="mb-1">Language:</p>
              <div className="dropdown">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    className="text-white py-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    English
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="index.html">English</Dropdown.Item>
                    <Dropdown.Item href="index.html">Italian</Dropdown.Item>
                    <Dropdown.Item href="index.html">French</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <hr />
              <p className="mb-1">Maturity Settings:</p>
              <div className="bg-dark text-white fs-6 fw-bold d-inline-block mb-2">ALL MATURITY RATINGS</div>
              <div className="dropdown mb-3">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    className="text-white py-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Ratings
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="index.html">boh</Dropdown.Item>
                    <Dropdown.Item href="index.html">boh</Dropdown.Item>
                    <Dropdown.Item href="index.html">boh</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Button variant="outline-secondary" className="px-4 mb-2">
                EDIT
              </Button>
              <hr />
              <p>Autoplay controls</p>

              <Form.Check label="Autoplay next episode in a series on all devices." />
              <Form.Check label="Autoplay previews while browsing on all devices." />
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <Button variant="outline-secondary" className="b px-4 me-4 fs-5 active">
              SAVE
            </Button>
            <Button variant="outline-secondary" className="px-4 me-4 fs-5">
              CANCEL
            </Button>
            <Button variant="outline-secondary" className="px-4 me-4 fs-5">
              DELETE PROFILE
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
import { Container, Dropdown } from "react-bootstrap";
import MyGallery from "./MyGallery";

const CompleteGalleries = () => {
  return (
    <>
      <Container fluid className=" mb-5 ps-md-3 d-flex align-items-center ">
        <h3 className="fw-bold me-3 mb-0">TV Shows</h3>
        <Dropdown>
          <Dropdown.Toggle variant="border-secondary text-white btn-outline-secondary ">Genres</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="index.html">Comedy</Dropdown.Item>
            <Dropdown.Item href="index.html">Drama</Dropdown.Item>
            <Dropdown.Item href="index.html">Thriller</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="d-flex ms-auto align-items-center d-none d-sm-block">
          <a className="text-secondary view-box" href="index.html">
          <i className="bi bi-grid border border px-3 py-1"></i>
            
          </a>
          <a className="text-secondary view-box" href="index.html">
          <i className="bi bi-text-left border px-3 py-1"></i>
          </a>
        </div>
      </Container>
        <MyGallery film='Harry Potter'/>
        <MyGallery film='Marvel'/>
        <MyGallery film='Star Wars'/>
    </>
  );
};

export default CompleteGalleries;
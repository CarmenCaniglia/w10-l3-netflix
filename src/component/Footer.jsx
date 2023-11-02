import { Button, Container, Row, Col } from "react-bootstrap"

const Footer = () => {
    return (
        <Container className="px-lg-8 px-xxl-10 mt-5">
            <Row>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <div className="d-flex mb-2">
                        <a href="index.html" className="text-secondary">
                            <i className="bi bi-facebook fs-4 me-3"></i>
                        </a>
                        <a href="index.html" className="text-secondary">
                            <i className="bi bi-instagram fs-4 me-3"></i>
                        </a>
                        <a href="index.html" className="text-secondary">
                            <i className="bi bi-twitter fs-4 me-3"></i>
                        </a>
                        <a href="index.html" className="text-secondary">
                            <i className="bi bi-youtube fs-4 me-3"></i>
                        </a>
                    </div>
                </Col>
                </Row>
                    <Row>
                        <Col xs={6} sm={6} md={3}>
                            <p className="mb-0">
                                <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                                    Audio and Subtitles
                                </a>
                            </p>
                            <p className="mb-0">
                                <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                                    Media Center
                                </a>
                            </p>
                            <p className="mb-0">
                                <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                                    Privacy
                                </a>
                            </p>
                            <p className="mb-0">
                                <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                                    Contact Us
                                </a>
                            </p>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <p className="mb-0">
                                <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                                    Audio Description
                                </a>
                            </p>
                            <p className="mb-0">
                                <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                                    Investor Relations
                                </a>
                            </p>
                            <p className="mb-0">
                                <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                                    Legal Notices
                                </a>
                            </p>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <p className="mb-0">
                                <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                                    Help Center
                                </a>
                            </p>
                            <p className="mb-0">
                                <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                                    Jobs
                                </a>
                            </p>
                            <p className="mb-0">
                                <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                                    Cookie Preferences
                                </a>
                            </p>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <p className="mb-0">
                                <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                                    Gift Cards
                                </a>
                            </p>
                            <p className="mb-0">
                                <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                                    Term of Use
                                </a>
                            </p>
                            <p className="mb-0">
                                <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                                    Corporate Information
                                </a>
                            </p>
                        </Col>
                    </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <Button variant="outline-secondary" className="text-white fs-8 mb-2">
                        Service code
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <p className="fs-9 text-secondary">&copy; 1997-2023 Netflix Inc.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
import { Alert, Carousel, Col, Container, Row, Spinner } from "react-bootstrap";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MyGallery = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [films, setFilms] = useState([]);
  const navigate = useNavigate();

  // state = {
  //   isLoading: true,
  //   hasError: false,
  //   films: [],
  // };

  // componentDidMount = () => {
  //   this.getFilms();
  // };
  useEffect(() => {
    const getFilms = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://www.omdbapi.com/?apikey=25893d78&s=" + props.film
        );
        if (res.ok) {
          const arrayOfFilms = await res.json();
          console.log(arrayOfFilms);
          setFilms((prev) => [
            ...prev,
            ...arrayOfFilms.Search.map((film) => ({
              Title: film.Title,
              Year: film.Year,
              imdbID: film.imdbID,
              Type: film.Type,
              Poster: film.Poster,
            })),
          ]);
        } else {
          throw new Error("Errore nel recupero dei film");
        }
      } catch (error) {
        console.log("error", error);
        setHasError(true);
      }
      setIsLoading(false);
    };
    getFilms();
  }, [props.film]);

  const handleFilmClick = (imdbID) => {
    navigate(`/movie-details/${imdbID}`);
  };

  const filmsInGroups = [];
  for (let i = 0; i < films.length; i += 6) {
    filmsInGroups.push(films.slice(i, i + 6));
  }
  return (
    <>
      <Container fluid className="mb-4">
        <Row>
          <Col>
            {isLoading && <Spinner animation="border" variant="danger" />}
            {hasError && (
              <Alert variant="danger">
                Error:An error occurred while fetching data.
              </Alert>
            )}
            <h5>{props.film}: La saga completa!</h5>
            <Carousel className="carousel-container">
              {filmsInGroups.map((filmGroup, groupIndex) => (
                <Carousel.Item key={groupIndex} className="carousel">
                  <Row className="d-relative">
                    {filmGroup.map((film) => (
                      <Col
                        key={film.imdbID}
                        lg={2}
                        xs={12}
                        onClick={() => handleFilmClick(film.imdbID)}
                      >
                        <Link to={"/movie-details/" + film.imdbID}>
                          <img
                            src={film.Poster}
                            alt={film.Title}
                            className="carousel-item d-block"
                          />
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyGallery;

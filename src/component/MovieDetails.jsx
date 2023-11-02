import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const params = useParams();

  const [film, setFilm] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async (imdbID) => {
      try {
        const res = await fetch(
          "https://www.omdbapi.com/?apikey=25893d78&i=" + imdbID
        );
        if (res.ok) {
          const film = await res.json();
          if (film.res === "true") {
            setFilm(film);
            console.log(film);
          } else {
            throw new Error(film.error);
          }
        }
      } catch (error) {}
    };
    fetchMovieDetails(params.imdbID);
  }, []);
  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="h-100">
      <Row className="justify-content-center h-100">
        <Col md={6} className="h-100">
          <div>
            <img src={film.Poster} alt={film.Title} className="w-100 rounded" />
            <h4 className="text-center mt-3">{film.Title}</h4>
            <p className="text-center">Anno di uscita {film.Year}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;

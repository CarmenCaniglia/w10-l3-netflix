import { Component } from "react";
import { Alert, Carousel, Col, Container, Row, Spinner } from "react-bootstrap";
import './style.css'
class MyGallery extends Component{

    state = {
        
        isLoading:true,
        hasError: false,
        films:[],
    }

    componentDidMount = ()=>{
        this.getFilms()
    }

    getFilms = async ()=> {
        this.setState({isLoading: true})

        
        try {
            const res = await fetch('https://www.omdbapi.com/?apikey=25893d78&s='+ this.props.film)
            if(res.ok){
               const arrayOfFilms = await res.json()
               console.log(arrayOfFilms)
                this.setState((prev)=> ({
                    films: [
                        ...prev.films,
                        ...arrayOfFilms.Search.map((film)=>({
                            Title: film.Title,
                            Year: film.Year,
                            imdbID: film.imdbID,
                            Type: film.Type,
                            Poster: film.Poster,

                        }))
                    ]
                })                 
                ) 
            }else{
                throw new Error('Errore nel recupero dei film')
                
            }
            
        } catch (error) {
            console.log('error',error)
            this.setState({ hasError: true, error });
        }
        this.setState({isLoading: false})
    }

    render(){
        const filmsInGroups = [];
    for (let i = 0; i < this.state.films.length; i += 6) {
      filmsInGroups.push(this.state.films.slice(i, i + 6));
    }
       return(
        
        <>
        <Container fluid className="mb-4" >
          
          <Row>
            <Col>
              {this.state.isLoading && <Spinner animation="border" variant="danger" />}
              {this.state.hasError && <Alert variant="danger">Error: {this.state.error}</Alert>}
              <h5>{this.props.film}: La saga completa!</h5>
              <Carousel className="carousel-container" >
                {filmsInGroups.map((filmGroup, groupIndex) => (
                  <Carousel.Item key={groupIndex} className="carousel">
                    <Row className="d-relative">
                      {filmGroup.map((film) => (
                        <Col key={film.imdbID} lg={2} xs={12}>
                          <img 
                          src={film.Poster} 
                          alt={film.Title}
                          className="carousel-item d-block"
                           />
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
        
     
       ) 
    }
}

export default MyGallery
import Carousel from 'react-bootstrap/Carousel';

function CreateCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="https://d3n817fwly711g.cloudfront.net/uploads/2014/07/Basic-org-chart-1-1024x738.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="carousel-font">First slide label</h3>
          <p className="carousel-font">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="https://cdn-icons-png.flaticon.com/512/2471/2471610.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="carousel-font">Second slide label</h3>
          <p className="carousel-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="https://img.freepik.com/premium-vector/quiz-logo-poll-questionnaire-icon-symbol_101884-1076.jpg?w=2000"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="carousel-font">Third slide label</h3>
          <p className="carousel-font">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CreateCarousel;
import Carousel from 'react-bootstrap/Carousel';
import Memoji from './Memoji'

function CreateCarousel() {
  return (
    <Carousel className="Carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          alt="First slide"
        />
        <Memoji />
        <Carousel.Caption>
          <h3 className="carousel-font">Hey i'm Charlotte</h3>
          <p className="carousel-font">I am currently studying web development at the University of Birmingham!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="carousel-font">Second slide label</h3>
          <p className="carousel-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
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
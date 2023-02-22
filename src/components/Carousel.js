import Carousel from 'react-bootstrap/Carousel';

function CreateCarousel() {
  return (
    <Carousel className="Carousel">
      <Carousel.Item  >
        <div className="center">
        <img
          className="emoji"
          src="/assets/images/photo.PNG"
          alt="First slide"
        />
        </div>
        <div class="carousel-text">
        <h3 className="carousel-font">Hey i'm Charlotte</h3>
          <p className="carousel-font">I am currently studying web development at the University of Birmingham!</p>
          <p className="carousel-font">I am currently learning to create applications in React</p>
        </div>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/languages.PNG"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="carousel-font">Here are some coding languages I am learning</h3>
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
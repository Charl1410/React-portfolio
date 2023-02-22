import React from 'react';
import CreateCarousel from '../Carousel'


export default function AboutMe() {
  return (
    <div className="home-container">
          <h1>About me title</h1>
          <p>
            I am cool
          </p>

          <div className="carousel-container">
            <CreateCarousel />
          </div>

    </div>

    
  );
}

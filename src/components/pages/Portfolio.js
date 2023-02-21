import React from 'react';
import CreateCard from '../RenderCard';
//import styles from '../../styles/'
export default function Blog() {
  return (
    <div>
      <div className="portfolio-banner">
          <h1>Portfolio page</h1>
          <p>
            Welcome to my portfolio page ☺️
          </p>
      </div>

          <CreateCard />
      
    </div>
  );
}

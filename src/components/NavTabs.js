import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar className="navbar" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand className="my-name">Charlotte Griffin</Navbar.Brand>
          <Navbar.Brand href="#home" 
          onClick={() => handlePageChange('Home')}
         
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>About me</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Nav.Link>
            <Nav.Link href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >Contact me</Nav.Link>
            <Nav.Link href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}









export default NavTabs;





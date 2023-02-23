import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar className="navbar" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand style={{ fontSize: '190%' }}>Charlotte Griffin</Navbar.Brand>
          <Navbar.Brand href="#home" 
          onClick={() => handlePageChange('Home')}
         
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} style={{ fontSize: '150%' }}>About me</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#portfolio" 
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} style={{ fontSize: '150%' }}>Portfolio</Nav.Link>
            <Nav.Link href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}style={{ fontSize: '150%' }}
        >Contact me</Nav.Link>
            <Nav.Link href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}style={{ fontSize: '150%' }}>Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}









export default NavTabs;





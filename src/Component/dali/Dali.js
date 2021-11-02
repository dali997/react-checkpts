import React from 'react'
import  {Navbar, Container, Nav } from "react-bootstrap"
import './Style.css'
const Dali = () => {
    return (
        <div className='dali'>
            <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />

 
</>
        </div>
    )
}

export default Dali

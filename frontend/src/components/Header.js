
import React from 'react'
import { Navbar, Nav, Container, FormControl, Form, Button} from 'react-bootstrap'

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">eHealth</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"><i className="fa-solid fa-user-plus"></i>Nuevo Paciente</Nav.Link>
              <Nav.Link href="/"><i className="fa-solid fa-file"></i>Nuevo Medico</Nav.Link>
              <Nav.Link href="/"><i className="fa-solid fa-chart-line"></i>Estaditicas</Nav.Link>
              <Nav.Link href="/login"><i className="fas fa-user"></i>xxxx</Nav.Link>
              
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Buscar"
              />
              <Button variant="outline-light">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

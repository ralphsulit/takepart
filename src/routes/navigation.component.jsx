import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faBell, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import './navigation.styles.scss';

function NavScrollExample() {
  return (
    <Navbar className='navbar-container mb-5' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='navbar-brand'>Centralized Catalog</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-4 shadow-none navbar-search-box no-border"
              aria-label="Search"
            />
          </Form>
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Tools</Nav.Link>
            <Nav.Link href="#action2">Catalogs</Nav.Link>
            <Nav.Link href="#action2"><FontAwesomeIcon icon={faList} /></Nav.Link>
            <Nav.Link href="#action2"><FontAwesomeIcon icon={faBell} /></Nav.Link>
            <Nav.Link href="#action2"><FontAwesomeIcon icon={faRightFromBracket} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
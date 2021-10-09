import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "gatsby"


const Header = () => {
    return (
        <>
            <Navbar fixed="top" expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="variant-dark">Ga Jun Young</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav as="ul" className="ms-auto text-center">
                            <Nav.Item as="li">
                                <Link to="/about" className="nav-link" activeClassName="active">about</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="/portfolio" className="nav-link" activeClassName="active">portfolio</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="/blog" className="nav-link" activeClassName="active">blog</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="#" className="nav-link" activeClassName="active">contact</Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
import logo from '../../images/logo.png'
import './style.css'

function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand>
                    <img
                        src={logo}
                        width="220vw"
                        className="d-inline-block align-top logo"
                        alt="OPT logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link className="linkcol" to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link className="linkcol" to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link className="linkcol" to="/brevard">Brevard</Link></Nav.Link>
                        <Nav.Link><Link className="linkcol" to="/asheville">Asheville</Link></Nav.Link>
                        <Nav.Link><Link className="linkcol" to="/greenville">Greenville</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
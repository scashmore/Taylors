import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
import logo from '../../images/logo.png'

function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand>
                    <img
                        src={logo}
                        width="220vw"
                        className="d-inline-block align-top"
                        alt="OPT logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Item>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#aboutus">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#brevard">Brevard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#asheville">Asheville</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#greenville">Greenville</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar


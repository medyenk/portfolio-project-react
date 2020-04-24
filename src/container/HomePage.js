import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './HomePage.css'


class HomePage extends Component {
    
    render() {
        return (
            <div className="align-items-md-center hp" >
                <Container fluid>
                    <Row className="justify-content-md-center" >
                        <Col>
                            <h1>Hi, I'm Medyen Kadhum.</h1> 
                            <h1>I'm a fullstack web developer trainee at futureproof.</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto"><Link to ='/about' ><Button variant="info">About me</Button></Link></Col>
                        <Col md="auto"><Link to ='/projects' ><Button variant="info">View my work</Button></Link></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HomePage;

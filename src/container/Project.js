import React, { Component } from 'react'
import './Project.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


class Project extends Component {
    
    constructor(props){
        super(props)
        this.state={
           projects:[],
           isLoaded:false
        };
    }
    componentDidMount() {
        const user="igork172";
        const git="https://api.github.com/users/";
        const repo="/repos";
        const url=git+user+repo;
        fetch(url)
        .then(res => res.json())
        .then((result) => {
            this.setState({
                projects: result,
                isLoaded: true
            });
        })
    };
          

    render() {

        if(this.state.isLoaded===true){
            return(
                <Container>
                  <Row>
                    {this.state.projects.map(item => (
                        <Col className="outline" xs={6} md={4}>
                            <React.Fragment key={item.id}>
                            <h5>{item.name}</h5>
                            <p>Description: {item.description}</p>
                            <a href={item.clone_url} target="_blank"><Button variant="light" >Link to repository</Button></a>
                            <p>LOADED</p>
                            </React.Fragment>
                        </Col>
                    ))}
                  </Row>  
                </Container>   
            ) 
        }
        else{
            return null;
        }
    }
}

export default Project

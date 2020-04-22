import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class About extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={8}>
                        <div>
                            <h1>About me</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin euismod justo, nec accumsan ante semper quis. Phasellus sem tellus, euismod nec erat id, ullamcorper laoreet felis. Sed venenatis sem non ipsum porttitor, ut euismod metus pharetra. Donec sit amet tristique lectus. Pellentesque vehicula dui nisi, id aliquet ligula lobortis vitae. Nunc condimentum tempus mattis. In nulla tortor, sodales sit amet pulvinar ut, faucibus non nibh. Suspendisse potenti. Sed ac enim rutrum, sollicitudin dolor at, rhoncus est. Phasellus in orci vel metus vulputate tristique at a odio. Sed hendrerit, quam eget ornare vestibulum, ipsum nibh interdum leo, in egestas arcu ligula in ex. Quisque imperdiet tincidunt accumsan. Sed nibh tellus, mattis vitae rutrum in, faucibus quis tellus. Proin pretium imperdiet egestas.<br /><br />

                            Morbi felis metus, lacinia a justo et, volutpat sodales magna. Sed sed lacinia lectus. Nam fringilla feugiat tempor. Donec venenatis tellus non fringilla accumsan. Vivamus tempus eget dolor id tempus. Mauris tristique sapien odio, convallis venenatis tortor tristique vitae. Nunc sodales turpis eget dolor varius consectetur. Ut sit amet mi ut tellus sodales rutrum. Suspendisse quis euismod elit, nec venenatis ligula. Maecenas ullamcorper faucibus erat in porta. Cras interdum ex sit amet tempor placerat. Suspendisse ac libero neque. Nunc et facilisis nisl. Vivamus rhoncus malesuada est sit amet pulvinar.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About
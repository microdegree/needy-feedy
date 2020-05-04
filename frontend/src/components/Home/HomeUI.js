import React, { Component, Fragment } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";

class HomeUI extends Component {
    render() {
        return (
            <Jumbotron style={{ backgroundColor:'#fff' }}>
                <Container>
                    <Row>
                        <Col> <img
                            src="https://pluspng.com/img-png/helping-the-poor-and-needy-png-loving-people-through-our-feed-the-needy-ministry-we-prepare-and-serve-meals-every-monday-night-at-6pm-that-include-bbq-hamburgers-and-hot-dogs-1214.png" style={{ width: '600px',height:'500px' }}/></Col>
                        <Col>
                            <br /><br /><br /><br /><br /><br /><br />
                            <h1 style={{ color:'#258B00' }}>Bridging Donors to Ngo</h1>
                            <p style={{ color:'#258B00' }}> Solving the ground level issue of preordering items from brands directly. Making restocking inventory as seamless as possible</p>
                            <p><Button variant="success" href='/login'>Signin</Button></p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default HomeUI;

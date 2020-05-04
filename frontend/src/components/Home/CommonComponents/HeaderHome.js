import React from 'react'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
const HeaderHome = () => {
    return (
        <div>
        <Navbar style={{ backgroundColor:'#FFA843' }}>
        <Row>
                    <Col>
            <Link exact to="/">  <Navbar.Brand href="#home" style={{ color:'#fff' }}>NeedyFeedy</Navbar.Brand></Link>
            </Col>
            <Col style={{ marginLeft:'900px',color:'#fff' }}>
            <Nav className="mr-auto">
                <Link exact to="/"><Nav.Link href="#home" style={{ color:'#fff' }}>Home</Nav.Link></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/about"> <Nav.Link href="#features" style={{ color:'#fff' }}>About</Nav.Link></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/login"><Nav.Link href="#pricing" style={{ color:'#fff' }}>Login</Nav.Link></Link><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                <Link to="/donatePaymentsGateway" style={{ color:'#fff' }}><Nav.Link style={{ color:'#fff' }} href="#pricing">Donate</Nav.Link></Link><br />
            </Nav>
            </Col>
                </Row>
        </Navbar>
    </div>
       
           
    )
}

export default HeaderHome

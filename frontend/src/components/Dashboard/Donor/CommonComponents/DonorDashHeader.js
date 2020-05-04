import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const DonorDashHeader = (props) => {
    return (
        <div>
            <Navbar style={{ backgroundColor:'#FFA843' }}>
                <Link exact to="/donorDashboard">  <Navbar.Brand href="#home" style={{ color:'#fff' }}>NeedyFeedy</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/donorDashboard"><Nav.Link href="#home" style={{ color:'#fff' }}>Home</Nav.Link></Link>
                    <Link to="/donorDashboard/uploadDonorImage"> <Nav.Link href="#features" style={{ color:'#fff' }}>Add Donor Info</Nav.Link></Link>
                    <Link to="/donorDashboard/showMyInfo"> <Nav.Link href="#features" style={{ color:'#fff' }}>My Info</Nav.Link></Link>

                    <Button
                        onClick={() => {
                            auth.logout(() => {
                                props.logout.push("/");
                            });
                        }}
                    >
                        Logout
                    </Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default DonorDashHeader

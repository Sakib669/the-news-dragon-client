import React from 'react';
import logo from '../../../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {

    // const 

    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" className='mx-auto' />
                <p className='text-secondary'>
                    <small>
                        Journalism Without Fear or Favour
                    </small>
                </p>
                <p className='text-dark'>{moment().format("dddd, MMMM D,  YYYY")}</p>
            </div>

            <div className='d-flex'>
                <Button variant="danger">Container</Button>
                <Marquee className=' text-dark' speed={80} >
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" direction="horizontal">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                About
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                Career
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                Profile
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">
                                    Login
                                </Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;
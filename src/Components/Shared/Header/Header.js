import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"

import useAuth from './../../../hooks/useAuth';


const Header = () => {
    const { user, logOut, admin } = useAuth()
    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">SPEED WORLD</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto nav">
                            <Link className="navLink" to="/home">Home</Link>
                            <Link className="navLink" to="/explores">Explores</Link>


                            {user.email && !admin &&
                                <Link className="navLink" to="/dashboard">Dashboard</Link>
                            }
                            {user.email && admin &&
                                <Link className="navLink" to="/dashboard/allorders">Dashboard</Link>
                            }


                        </Nav>

                        <Nav>

                            {user?.email ?
                                <>
                                    <Link className="nav-link" to="home"><i className="fas fa-user"></i><span> </span>{user?.displayName}<span className="text-lite ms-2" onClick={logOut}> <i className="fas fa-sign-out-alt"></i> Log Out</span></Link>
                                </> :
                                <Link className="navLink" to="/login">Login</Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
};

export default Header;
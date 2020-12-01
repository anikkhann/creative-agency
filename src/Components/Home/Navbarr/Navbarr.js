import React, { useContext } from 'react';
import logos from '../../../logos/logo.png';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import * as firebase from "firebase/app";
import "firebase/auth";

const Navbarr = () => {

    //sign out
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        firebase.auth().signOut().then(function () {
            const logOut = {
                name: " ",
                email: " "
            }
            setLoggedInUser(logOut);
        })
            .catch(function (error) {
                // An error happened.
            });
    }
    return (
        <div>
            <div>
                <Navbar bg="none" >
                    <Navbar.Brand href="#home" style={{ marginLeft: '140px' }}>

                        <img style={{ width: '200px' }}
                            src={logos}

                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand >

                    <Nav className="header" >
                        <Link to="/home"> <Nav.Link style={{ marginLeft: '270px', color: 'black' }} to="/home">Home</Nav.Link></Link>
                        <Nav.Link style={{ marginLeft: '20px', color: 'black' }}>Our Portfolio</Nav.Link>
                        <Nav.Link style={{ marginLeft: '20px', color: 'black' }}>Our Team</Nav.Link>
                        <Nav.Link style={{ marginLeft: '20px', color: 'black' }}>Contact Us</Nav.Link>
                         { 
                           loggedInUser.email ? 
                        <Link to="/login"> 
                            <Button onClick={handleSignOut} style={{ marginLeft: '20px', width: '100px', height: '40px', borderRadius: '10px' }} variant="dark"> Login</Button>
                        </Link> :
                             
                            <Link to="/order"> 
                            <Button style={{ marginLeft: '20px', width: '100px', height: '40px', borderRadius: '10px' }} variant="dark">Login</Button>
                            </Link> 
                         } 
                        <Link to="/admin"> <Button style={{ marginLeft: '20px', width: '100px', height: '40px', borderRadius: '10px' }} variant="primary">Admin</Button></Link>
                    </Nav>

                </Navbar>
            </div>
        </div>
    );
};

export default Navbarr;
import React from 'react';
import logos from '../../../logos/logo.png';
import { Button, Nav, Navbar } from 'react-bootstrap';

const Navbarr = () => {
    return (
        <div>
             <div>
            <Navbar bg="none" >
           <Navbar.Brand href="#home" style={{marginLeft:'140px'}}>
                
                    <img style={{width: '200px'}}
                        src={logos}
                        
                        alt="React Bootstrap logo"
                    />
             </Navbar.Brand >   
                   
                <Nav className="header" >
                <Nav.Link style={{marginLeft:'270px', color:'black'}}  href="#home">Home</Nav.Link>
                <Nav.Link style={{marginLeft:'20px', color:'black'}}  href="#donation">Our Portfolio</Nav.Link>
                <Nav.Link style={{marginLeft:'20px', color:'black'}}  href="#events">Our Team</Nav.Link>
                <Nav.Link style={{marginLeft:'20px', color:'black'}}  href="#blog">Contact Us</Nav.Link>
                  <Button style={{marginLeft:'20px', width:'100px', height:'40px', borderRadius:'10px'}} variant="dark">Login</Button>
                </Nav>
               
            </Navbar>
            </div>
        </div>
    );
};

export default Navbarr;
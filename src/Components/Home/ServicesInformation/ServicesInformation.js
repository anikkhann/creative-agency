import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesInformation.css';
import logo from '../../../icons/service2.png';
const ServicesInformation = (props) => {
    const { title, designation } = props.serviceData;
    return (
         
           
        <div className="col-md-4 m-0 p-0"  >
           
        <div className="card-deck d-flex" style={{width:'300px', marginLeft:'80px'}} >
            <Link to="/order" style={{textDecoration:'none'}}>
            <div className="card text-center service-style text-dark" style={{border:'none'}}>
                <img className="card-img-top img-fluid" style={{width:'50px', marginLeft:'100px' }} src={logo} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{designation}</p>
                   
                </div>
            </div>
            </Link>

         </div>
        </div>
        


    );
};

export default ServicesInformation;
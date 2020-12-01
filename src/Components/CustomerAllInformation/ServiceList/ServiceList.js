import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../logos/logo.png';
import fakeData from '../../../fakeData/index';
import ServiceListInformation from '../ServiceListInformation/ServiceListInformation';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCoffee, faClipboardList,faCommentDots } from '@fortawesome/free-solid-svg-icons';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Button } from 'react-bootstrap';

const ServiceList = () => {
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
    const [orderService, setOrderService] = useState([]);
    useEffect(()=>{
        fetch("https://rocky-badlands-31326.herokuapp.com/getCustomerOrder?email="+loggedInUser.email)
        .then(res=>res.json())
        .then(data => setOrderService(data))
    }, [])
  
    return (
        <div style={{background: '#FFFFFF'}}>
        <div className='container'>
            <div style={{padding: '20px 0'}} className="Topbar d-flex">
                <div style={{width: '20%'}} className="top">
                <Link to='/home'><img style={{width:'150px'}} src={logo} alt=""/></Link>  
                </div>
                <div style={{width: '80%'}} className="userData d-flex justify-content-between">
                    <h5 style={{marginTop: '15px'}}>Service list</h5>
                    <h5 style={{marginTop: '15px'}}>
                    {loggedInUser.email ? loggedInUser.name : 'User Name'}
                    </h5>
                </div>
            
            </div> 
        </div>
        
        <div className="row">
                <div className="col-md-3">
                    <div className="sidebarList">
                        <NavLink className="sidebar" activeClassName='text-primary' to="/order">
                        <FontAwesomeIcon icon={faCartPlus} /> Order
                        </NavLink>
                        <NavLink className="sidebar" activeClassName='text-primary' to="/serviceList">
                        <FontAwesomeIcon icon={faClipboardList} /> Service list
                        </NavLink>
                        <NavLink className="sidebar" activeClassName='text-primary' to="/review">
                        <FontAwesomeIcon icon={faCommentDots} /> Review
                        </NavLink>
                        <Link to ="/">
                                <Button onClick={handleSignOut} style={{ marginLeft: '20px', width: '100px', height: '40px', borderRadius: '10px' }} variant="dark">Logout</Button>
                        </Link> 
                      {/* <Link to="/admin">  */}
                       {/* <NavLink className="sidebar" activeClassName='text-primary'> */}
                            {/* <button style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#111430' ,color:'#FFFFFF' , borderRadius:'10px' , marginTop :'20px'}} className='btn'> Admin Panel </button>   */}
                        {/* </NavLink> */}
                      {/* </Link>   */}
                    </div>
                </div>
                
                <div className="col-md-9">
                    <div className="formSubmit">
                        <div className="row">
                        {
                        orderService.map(service => <ServiceListInformation key={service._id}  service={service}></ServiceListInformation>)
                        }
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default ServiceList;
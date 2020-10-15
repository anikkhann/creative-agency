import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../logos/logo.png';
import fakeData from '../../../fakeData/index3';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPlus, faClipboardList } from '@fortawesome/free-solid-svg-icons';


const AdminServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allCustomerOrder, setAllCustomerOrder] = useState([])
    useEffect(() =>{
        fetch("https://rocky-badlands-31326.herokuapp.com/getAllCustomerOrder")
        .then(res => res.json())
        .then(data => setAllCustomerOrder(data))
    }, [])
   
    return (
        <div style={{background: '#FFFFFF'}}>
        <div className='container'>
            <div style={{padding: '20px 0'}} className="Topbar d-flex">
                <div style={{width: '20%'}} className="top">
                   <Link to='/home'><img style={{width:'150px'}} src={logo} alt=""/></Link>   
                </div>
                <div style={{width: '80%'}} className="userData d-flex justify-content-between">
                    <h5 style={{marginTop: '15px'}}>Admin</h5>
                    <h5 style={{marginTop: '15px'}}>
                     {loggedInUser.email ? loggedInUser.name : 'User Name'}
                    </h5>
                </div>
            
            </div> 
        </div>
        
        <div className="row">
                <div className="col-md-3">
                <div className="sidebarList">
                        <NavLink  activeClassName='text-primary' to="/adminServiceList" className="sidebar">
                        <FontAwesomeIcon icon={faClipboardList} /> Service list
                        </NavLink>
                        <NavLink  activeClassName='text-primary' to="/adminAddService" className="sidebar">
                        <FontAwesomeIcon icon={faPlus} /> Add Service
                        </NavLink>
                        <NavLink activeClassName='text-primary' to="/adminMakeAdmin" className="sidebar">
                        <FontAwesomeIcon icon={faUserPlus} />  Make Admin
                        </NavLink>
                    </div>
                </div>
                
                <div className="col-md-9">
                    <div className="formSubmit">
                    <Table style={{borderRadius : '15px' , background : '#ffffff', width : '950px',  padding :'20px'}}>
                            <thead style={{background:'#F5F6FA', margin:'10px 15px', borderRadius:'30px'}}>
                            <tr>
                                <th style={{width:'160px'}}>Name</th>
                                <th style={{width:'160px'}}>Email ID</th>
                                <th style={{width:'160px'}}>Service</th>
                                <th style={{width:'160px'}}>Project Details</th>
                                <th style={{width:'160px'}}>Status</th>
                              
                            </tr>

                            </thead>
                            <tbody>
                                {
                                 allCustomerOrder.map(orderData => 
                                 <tr>
                                    <td>{orderData.company}</td>
                                    <td>{orderData.email}</td>
                                    <td>{orderData.design}</td>
                                    <td>{orderData.details} </td>
                                    <td style={{color:'green', fontSize:'400'}}> successful </td>
                                   
                                </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default AdminServiceList;
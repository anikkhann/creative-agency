import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../logos/logo.png';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPlus, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const MakeAdmin = () => {
    
    const {makeAdmin , setMakeAdmin} = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, e) => {
        const makeAdminEmail = {...data}
        fetch("http://localhost:5000/addEmail", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(makeAdminEmail)
        })
        .then(res => res.json())
        .then(data => {
            alert('Admin Email saved in database');
            e.target.reset();
        })
    }

    return (
        <div style={{background: '#FFFFFF'}}>
        <div className='container'>
            <div style={{padding: '20px 0'}} className="Topbar d-flex">
                <div style={{width: '20%'}} className="top">
                <Link to='/home'><img style={{width:'150px'}} src={logo} alt=""/></Link>  
                </div>
                <div style={{width: '80%'}} className="userData d-flex justify-content-between">
                    <h5 style={{marginTop: '15px'}}>Make Admin</h5>
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
                        <FontAwesomeIcon icon={faClipboardList} />  Service list
                        </NavLink>
                        <NavLink  activeClassName='text-primary' to="/adminAddService" className="sidebar">
                        <FontAwesomeIcon icon={faPlus} /> Add Service
                        </NavLink>
                        <NavLink  activeClassName='text-primary' to="/adminMakeAdmin" className="sidebar">
                        <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                        </NavLink>
                    </div>
                </div>
                
                <div className="col-md-9">
                    <div className="formSubmit">
                        <form onSubmit={handleSubmit(onSubmit)} style={{ height : '300px',borderRadius : '15px' , width : '900px', padding :'20px',   background : '#ffffff'}} >
                                <label>Email</label>
                            <div className='d-flex '>
                                <input name="email" style={{width:'400px', padding:'20px 10px'}} placeholder='Enter Your Email' className='form-control' ref={register({ required: true })} />
                                {errors.name && <span className="error">Email is required</span>}
                                <input type="submit" value='Send' style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#009444' ,color:'#FFFFFF' , borderRadius:'10px' , marginLeft :'20px'}} />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default MakeAdmin;
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../logos/logo.png';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPlus, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const AdminAddService = () => {
   
    const {addService , setAddService} = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, e) => {
        const adminAddService = {...data}
        fetch("http://localhost:5000/addService", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(adminAddService)
        })
        .then(res => res.json())
        .then(data => {
            alert('Admin AddService saved in database');
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
                    <h5 style={{marginTop: '15px'}}>Add Service</h5>
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
                        <FontAwesomeIcon icon={faUserPlus} />  Make Admin
                        </NavLink>
                    </div>
                </div>
                
                <div className="col-md-9">
                    <div className="formSubmit">
                    <form onSubmit={handleSubmit(onSubmit)} >
                            <div className='d-flex' style={{ width : '900px',height : '300px',background : '#ffffff',borderRadius : '15px' ,padding :'20px'}}>
                                <div>
                                    <label>Service Title</label>
                                    <input name="title" style={{width:'500px', padding:'20px 10px'}} placeholder='Enter title' className='form-control' ref={register({ required: true })} />
                                    {errors.name && <span className="error">Title is required</span>} 
                                    <br/> 
                                    <label>Description</label>
                                    <textarea name="designation" style={{width:'500px', padding:'20px 10px',resize:'none'}} placeholder='Enter Designation' className='form-control' ref={register({ required: true })} />
                                </div>
                                <div>
                                    <label style={{width:'270px', backgroundColor: "#DEFFED", color: "#009444", border: "1px solid #009444", marginTop :'30px' }} class="custom-file-upload ml-3 p-2 text-center">
                                        <input style={{ display: "none" }} type="file" />
                                        {/* <FontAwesomeIcon icon={faCloudUploadAlt} />*/} upload project file 
                                    </label>
                                </div>
                            </div>
                            
                            <div className='d-flex justify-content-end'>
                                <input type="submit" value='Submit' style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#009444' ,color:'#FFFFFF' , borderRadius:'10px' , marginTop :'20px' , marginRight:'35px'}} />
                            </div>
                            </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default AdminAddService;
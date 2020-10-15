import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../logos/logo.png';
import './OrderInformation.css';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCoffee, faClipboardList,faCommentDots } from '@fortawesome/free-solid-svg-icons'


const OrderInformation = () => {
    
    const {orderSend , setOrderSend} = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, watch, errors } = useForm();
    //order send to databse
    const onSubmit = (data, e) => {
       
        const customerOrder = {...data}
        fetch("http://localhost:5000/customerOrder", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customerOrder)
        })
        .then(res => res.json())
        .then(data => {
            alert('customer order saved in database');
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
                        <h5 style={{marginTop: '15px'}}>Order</h5>
                        <h5 style={{marginTop: '15px'}}>
                        {loggedInUser.email ? loggedInUser.name : 'User Name'}
                        </h5>
                    </div>
                
                </div> 
            </div>
            
            <div className="row">
                    <div className="col-md-3">
                        <div className="sidebarList">
                            <NavLink  activeClassName='text-primary'  to="/customerOrder" className="sidebar">
                            <FontAwesomeIcon icon={faCartPlus} /> Order
                            
                            </NavLink>
                            <NavLink activeClassName='text-primary' to="/serviceList" className="sidebar" >
                            <FontAwesomeIcon icon={faClipboardList} /> Service list
                            </NavLink>
                            <NavLink  activeClassName='text-primary' to="/review" className="sidebar">
                            <FontAwesomeIcon icon={faCommentDots} />   Review
                            </NavLink>
                         {/* <Link to ="/admin"> 
                        {/* <NavLink  activeClassName='text-primary' className="sidebar"> */}
                                {/* <button style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#111430' ,color:'#FFFFFF' , borderRadius:'10px' , marginTop :'20px'}} className='btn'> Admin Panel </button>  */}
                            {/* </NavLink> */}
                        {/* </Link>  */}
                    
                        </div>
                    </div>
                    
                    <div className="col-md-9">
                        <div className="formSubmit">
                            <form onSubmit={handleSubmit(onSubmit)} >
                            <input name="company" style={{width:'570px', padding:'20px 10px'}} placeholder='Your name / company’s name' className='form-control' ref={register({ required: true })} />
                            {errors.name && <span className="error">Name is required</span>}
                             <br/> 
                            <input name="email" style={{width:'570px', padding:'20px 10px'}} placeholder='Your email address' className='form-control' ref={register({ required: true })} /> 
                            {errors.name && <span className="error">Email is required </span>}
                            <br/>
                            <input name="design" style={{width:'570px', padding:'20px 10px'}} placeholder='Graphic Design' className='form-control' ref={register({ required: true })} /> 
                            {errors.name && <span className="error">Design is required</span>}
                            <br/>
                            <textarea name="details" style={{width:'570px', padding:'20px 10px',resize:'none'}} placeholder='Project Details' className='form-control' ref={register({ required: true })} /> 
                            {errors.name && <span className="error">Details is required</span>}
                            <br/>
                            <div className='d-flex'>
                                <input name="price" style={{width:'288px', padding:'20px 10px'}} placeholder='Price' className='form-control'  ref={register({ required: true })} /> 
                                {errors.name && <span className="error">Price is required</span>}
                                <label style={{width:'270px', backgroundColor: "#DEFFED", color: "#009444", border: "1px solid #009444" }} class="custom-file-upload ml-3 p-2 text-center">
                                    <input style={{ display: "none" }} type="file" />
                                     upload project file 
                                </label>
                            </div>
                            
                            <input type="submit" value='Send' style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#111430' ,color:'#FFFFFF' , borderRadius:'10px' , marginTop :'20px'}} />
                            </form>
                        </div>
                    </div>
                </div >
            </div>
    );
};

export default OrderInformation;
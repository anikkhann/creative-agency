import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../logos/logo.png';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCoffee, faClipboardList,faCommentDots } from '@fortawesome/free-solid-svg-icons';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Button } from 'react-bootstrap';


const ReviewInformation = () => {
  
    //const {review , setReview} = useState([]);
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
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, e) => {
        const customerReviewData = {...data}
        fetch("https://rocky-badlands-31326.herokuapp.com/customerReview", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customerReviewData)
        })
        .then(res => res.json())
        .then(data => {
            alert('customer review data saved in database');
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
                    <h5 style={{marginTop: '15px'}}>Review</h5>
                    <h5 style={{marginTop: '15px'}}>
                    {loggedInUser.email ? loggedInUser.name : 'User Name'}
                    </h5>
                </div>
            
            </div> 
        </div>
        
        <div className="row">
                <div className="col-md-3">
                    <div className="sidebarList">
                        <NavLink  activeClassName='text-primary' to="/order" className="sidebar">
                        <FontAwesomeIcon icon={faCartPlus} /> Order
                        </NavLink>
                        <NavLink  activeClassName='text-primary' to="/serviceList" className="sidebar">
                        <FontAwesomeIcon icon={faClipboardList} /> Service list
                        </NavLink>
                        <NavLink  activeClassName='text-primary' to="/review" className="sidebar">
                        <FontAwesomeIcon icon={faCommentDots} /> Review
                        </NavLink>
                        <Link to ="/">
                                <Button onClick={handleSignOut} style={{ marginLeft: '20px', width: '100px', height: '40px', borderRadius: '10px' }} variant="dark">Logout</Button>
                        </Link> 
                    {/* <Link to="/admin">    */}
                     {/* <NavLink  activeClassName='text-primary' className="sidebar"> */}
                              {/* <button style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#111430' ,color:'#FFFFFF' , borderRadius:'10px' , marginTop :'20px'}} className='btn'> Admin Panel </button>    */}
                        {/* </NavLink> */}
                    {/* </Link>     */}
                    </div>
                </div>
                
                <div className="col-md-9">
                    <div className="formSubmit">
                    <form onSubmit={handleSubmit(onSubmit)} >
                            <input name="name" style={{width:'570px', padding:'20px 10px'}} placeholder='Your name ' className='form-control' ref={register({ required: true })} />
                            {errors.name && <span className="error">Name is required</span>}
                            <br/> 
                            <input name="company" style={{width:'570px', padding:'20px 10px'}} placeholder='Company’s Designation' className='form-control' ref={register({ required: true })} /> 
                            {errors.name && <span className="error">Designation is required</span>}
                            <br/>
                            <textarea name="description" style={{width:'570px', padding:'20px 10px',resize:'none'}} placeholder='Description' className='form-control' ref={register({ required: true })} />
                            {errors.name && <span className="error">Description is required</span>}
                             <br/>
                            <input type="submit" value='Submit' style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#111430' ,color:'#FFFFFF' , borderRadius:'10px' , marginTop :'20px'}} />
                            </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default ReviewInformation;
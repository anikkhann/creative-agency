import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-style" style={{marginTop:'200px'}}>
            <div className="container mt-5 p-4">
                <div className="row mt-5 ">
                    <div className="col-md-6">
                        <h1>Let us handle your <br /> project, professionally</h1>
                        <small style={{color:'rgba(0, 0, 0, 0.7)'}}>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general</small>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div class="form-group">
                               
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Your email address "/>
                                    
                            </div>
                                <div class="form-group">
                                   
                                    <input type="text" class="form-control" id="exampleInputName" placeholder="Your name/company's name"/>
                                </div>
                                    <div class="form-group">

                                        <textarea type="text"  style={{resize:'none'}} class="form-control" rows="8" cols="50" id="exampleInputText" placeholder="Your message"/>
                                           
                                    </div>
                                        <button type="submit" class="btn btn-dark px-4">Submit</button>
                                        <br/>
                                        <br/>
                                        <br/>
     
                        </form>
                       
                    </div>
                   
                </div>
                        <div>
                            <small style={{marginLeft:'370px', color:'rgba(0, 0, 0, 0.7)'}}>Copyright Orange labs 2020</small>
                        </div>
                  
            </div>
         </div>
    );
};

export default Footer;
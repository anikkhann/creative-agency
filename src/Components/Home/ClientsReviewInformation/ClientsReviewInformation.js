import React from 'react';
import logo from '../../../carousel/customer-2.png'

const ClientsReviewInformation = (props) => {
    const {name, company, description} = props.reviewData;
    
    return (
        <div>
             <div className=" container col-sm-3 m-0"  >
           
           <div className="card-deck d-flex" style={{width:'300px',borderRadius:'10px', padding:'0px', height:'200px' ,marginLeft:'100px'}}>
               <div className="card text-center d-flex mt-3">
                   <img className="card-img-top img-fluid " style={{width:'50px'}} src={logo} alt="image" />
                   <h5 className="card-title">{name}</h5>
                    <h6> {company}</h6>
                   <p className="card-text text-inline">{description}</p>
                   
                   
               </div>
   
            </div>
           </div>
           
        </div>
    );
};

export default ClientsReviewInformation;
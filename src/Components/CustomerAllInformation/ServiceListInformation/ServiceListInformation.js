import React from 'react';

const ServiceListInformation = (props) => {
 const {design, details} = props.service;
 console.log(props.service);
  
    return (
        <div className='col-md-6'>
            <div style={{ background : '#ffffff', borderRadius: '15px',padding: '15px',  border: 'none' }} >
                <div className="cardImg d-flex justify-content-between">
                    <div>
                        {/* <img style={{width:'80px'}} src={img} alt="icon"/> */}
                    </div>
                    <div>
                        {/* <button className="btn btn-primary mt-4">{button}</button> */}
                    </div>
                </div>
                <div className='mt-3 pb-3'>
                    <h5>{design}</h5>
                    <small>{details}</small>
                </div>
            </div>
        </div>
    );
};

export default ServiceListInformation;
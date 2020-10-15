import React, { useEffect, useState } from 'react';
import fakeData from '../../../fakeData/index';
import ServicesInformation from '../ServicesInformation/ServicesInformation';


const Services = () => {
    const [getServiceData, setGetServiceData] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5000/getAddService")
        .then(res => res.json())
        .then(data => setGetServiceData(data))
    })
    
    return (
        <div className="">
            <h2 className="text-center" style={{marginTop:'150px'}}>Provide awesome <span style={{color:'#7AB259'}}>services</span> </h2>
        
        <div className="row mt-5">
            {
                getServiceData.map(serviceData => <ServicesInformation serviceData={serviceData}></ServicesInformation>)
            }
        </div>
        </div>
    );
};

export default Services;
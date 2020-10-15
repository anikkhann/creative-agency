import React from 'react';
import slack from '../../../logos/slack.png';
import google from '../../../logos/google.png';
import uber from '../../../logos/uber.png';
import netflix from '../../../logos/netflix.png';
import airbnb from '../../../logos/airbnb.png';


const CompanyLogos = () => {
    return (
        <div>
            <div className="container" >
                <div className="row d-flex justify-content-center mt-5" >
                    <img style={{width:'100px', height:'40px', marginRight:'75px'}} src={slack} alt=""/>
                    <img style={{width:'100px', height:'40px', marginRight:'75px'}} src={google} alt=""/>
                    <img style={{width:'100px', height:'40px', marginRight:'60px'}} src={uber} alt=""/>
                    <img style={{width:'100px', height:'40px', marginRight:'60px'}} src={netflix} alt=""/>
                    <img style={{width:'100px', height:'40px', marginRight:'60px'}} src={airbnb} alt=""/>
                    
                </div>

            </div>
        </div>
    );
};

export default CompanyLogos;
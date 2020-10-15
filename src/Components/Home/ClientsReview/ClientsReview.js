import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import fakeData from '../../../fakeData/index2';
import ClientsReviewInformation from '../ClientsReviewInformation/ClientsReviewInformation';

const ClientsReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [findCustomerReview, setFindCustomerReview] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/getCustomerReview")
        .then(res=>res.json())
        .then(data => setFindCustomerReview(data))
    }, [])

    return (
        <div>
        <h2 className="text-center" style={{marginTop:'150px'}}> <span style={{color:'#171B4E'}}>Clients </span> <span style={{color:'#7AB259'}}>Feedback</span> </h2>
    
    <div className="row mt-5  ">
        {
            findCustomerReview.map(reviewData => <ClientsReviewInformation reviewData={reviewData}></ClientsReviewInformation>)
        }
    </div>
    </div>
    );
};

export default ClientsReview;
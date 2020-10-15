import React from 'react';
import servicesData from '../../../fakeData';
import CarouselWork from '../CarouselWork/CarouselWork';
import ClientsReview from '../ClientsReview/ClientsReview';
import CompanyLogos from '../CompanyLogos/CompanyLogos';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CompanyLogos></CompanyLogos>
            <Services></Services>
            <CarouselWork></CarouselWork>
            <ClientsReview></ClientsReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;
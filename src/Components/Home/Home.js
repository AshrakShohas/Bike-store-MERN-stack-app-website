import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Extra1 from './Extra1/Extra1';
import Footer from './../Shared/Footer/Footer';
import Reviews from '../Dashboard/Dashboard/Review/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Extra1></Extra1>

            <Footer></Footer>
        </div>
    );
};

export default Home;